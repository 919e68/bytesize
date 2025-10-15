# frozen_string_literal: true

module Types::Base
  class Model < Types::Base::Object
    field :id, ID, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    class << self
      def association(model, type, null: false)
        field model, type, null: null

        define_method model do
          dataloader.with(Sources::Association, model).load(object)
        end
      end
    end
  end
end
