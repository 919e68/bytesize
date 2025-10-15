module Subscriptions
  class BaseSubscription < GraphQL::Schema::Subscription
    include ::Auth::Concerns::Authorization

    object_class Types::Base::Object
    field_class Types::Base::Field
    argument_class Types::Base::Argument

    def current_session
      context.current_session
    end
  end
end
