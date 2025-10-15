module Interactors::Snack
  class CreateSnack < Interactors::BaseInteractor
    include Interactor::ContextValidator

    params :attributes, :user

    validate :attributes, :hash do
      attribute :name, :required
      attribute :icon, :optional
      attribute :description, :optional
      attribute :flavor_ids, :required
    end
    validate :user, :required

    def call
      ActiveRecord::Base.transaction do
        @snack = Snack.create!(attributes.compact.except(:flavor_ids).merge({ user_id: user.id }))
        add_snack_flavors

        context.data = @snack
      end
    end

    private

    def add_snack_flavors
      snack_flavors = attributes[:flavor_ids].uniq.map do |flavor_id|
        {
          snack_id: @snack.id,
          flavor_id: flavor_id
        }
      end

      @snack.snack_flavors.create!(snack_flavors)
    end
  end
end
