module Interactors::Snack
  class FetchSnacks < Interactors::BaseInteractor
    include Interactor::PaginationSupport
    include Interactor::FilterSupport
    include Interactor::ContextValidator

    params :filters, :user

    validate :filters, :array do
      attribute :type, :required
      attribute :value, :optional
    end

    def call
      snacks = Snack.all
      snacks = snacks.where(user_id: user.id) if user.present?

      context.data = snacks
    end
  end
end
