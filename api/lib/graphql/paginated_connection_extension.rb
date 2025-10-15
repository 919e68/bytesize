module Graphql
  class PaginatedConnectionExtension < GraphQL::Schema::FieldExtension
    def apply
      field.argument :page, 'Int', required: false, default_value: 1
      field.argument :limit, 'Int', required: false, default_value: 100
    end

    # remove pagination args before passing it to a user method
    def resolve(object:, arguments:, context:)
      next_args = arguments.dup
      next_args.delete(:page)
      next_args.delete(:limit)
      yield(object, next_args, arguments)
    end

    def after_resolve(value:, object:, arguments:, context:, memo:)
      # `memo` was the original `arguments` value from `resolve`.
      # normalize those arguments here for GraphQL-Ruby's connection objects.
      connection_arguments = {
        page: memo[:page],
        limit: memo[:limit]
      }

      # Use GraphQL-Ruby's connection system to find a wrapper for `value` and apply it.
      # For code that handles GraphQL-Batch Promises, see graphql/schema/field/connection_extension.rb.
      context.namespace(:connections)[:all_wrappers] ||= context.schema.connections.all_wrappers
      context.schema.connections.wrap(field, object.object, value, connection_arguments, context)
    end
  end
end
