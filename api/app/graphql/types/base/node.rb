# frozen_string_literal: true

module Types::Base
  module Node
    include Types::Base::Interface

    # Add the `id` field
    include GraphQL::Types::Relay::NodeBehaviors
  end
end
