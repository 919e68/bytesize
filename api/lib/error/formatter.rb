module Error
  module Formatter
    def self.format(error)
      case error
      when Enumerable
        error.map { |item| Error::Formatter.format(item) }
      when Hash
        error
      when Dry::Schema::Message
        { code: "#{error.path.join('_').upcase}_#{error.text}".parameterize.underscore.upcase }
      when ActiveRecord::RecordInvalid
        error.record.errors.messages.map { |key, value| { path: key.to_s, message: value.join(', ') } }
      when ActiveRecord::RecordNotFound
        { code: 'RESOURCE_NOT_FOUND' }
      when Error::ErrorCode
        { code: error.code }
      else
        { path: error.class, message: error.try(:message) }
      end
    end
  end
end
