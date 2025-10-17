module Interactors::Flavor
  class FetchFlavors < Interactors::BaseInteractor
    include Interactor::PaginationSupport
    include Interactor::FilterSupport
    include Interactor::ContextValidator

    params :filters, :user

    validate :filters, :array do
      attribute :type, :required
      attribute :value, :optional
    end

    def call
      current_user_filter = filters.find { |f| f[:type] == "isCurrentUser" }

      flavors = if current_user_filter&.dig(:value) && user.present?
        user.flavors.distinct
      else
        Flavor.all
      end

      context.data = flavors
    end
  end
end
