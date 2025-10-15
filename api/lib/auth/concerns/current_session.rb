module Auth::Concerns
  module CurrentSession
    extend ActiveSupport::Concern

    def current_session
      if get_access_token.present?
        return Auth::Authentication.authenticate_access_token(get_access_token)
      end

      nil
    end

    def current_user
      current_session&.user
    end

    private

    def get_access_token
      @access_token ||= request.headers['Authorization']&.split&.last || cookies[:auth_token]
    end
  end
end
