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
      flavors = Flavor.all

      context.data = flavors
    end
  end
end
