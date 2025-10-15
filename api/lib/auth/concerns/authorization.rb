module Auth::Concerns
  module Authorization
    extend ActiveSupport::Concern
    include Pundit::Authorization

    def authorize!(record, query)
      raise Error::ErrorCode.new('UNAUTHORIZED', :unauthorized) unless current_session.present?

      policy = Pundit.policy!(current_session, record)
      raise Error::ErrorCode.new('FORBIDDEN', :forbidden) unless policy.public_send(query)
    end
  end
end
