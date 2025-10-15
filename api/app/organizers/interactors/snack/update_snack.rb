module Interactors::Snack
  class UpdateSnack < Interactors::BaseInteractor
    include Interactor::ContextValidator

    params :id, :attributes, :user

    validate :id, :required
    validate :attributes, :hash do
      attribute :name, :optional
      attribute :icon, :optional
      attribute :description, :optional
      attribute :flavor_ids, :optional
    end
    validate :user, :required

    def call
      validate!

      ActiveRecord::Base.transaction do
        @snack.update!(attributes.compact.except(:flavor_ids))
        update_flavors

        context.data = @snack
      end
    end

    private

    def validate!
      @snack = Snack.find_by(id: id)
      raise Error::ErrorCode.new('SNACK_NOT_FOUND', :unprocessable_content) unless @snack
    end

    def update_flavors
      if attributes[:flavor_ids].present?
        existing_flavor_ids = @snack.flavors.pluck(:id)

        # add
        attributes[:flavor_ids].each do |flavor_id|
          unless existing_flavor_ids.include?(flavor_id)
            @snack.snack_flavors.create!(snack_id: @snack.id, flavor_id: flavor_id)
          end
        end

        # remove
        existing_flavor_ids.each do |flavor_id|
          unless attributes[:flavor_ids].include?(flavor_id)
            SnackFlavor.where(snack_id: @snack.id, flavor_id: flavor_id).delete_all
          end
        end
      end
    end
  end
end
