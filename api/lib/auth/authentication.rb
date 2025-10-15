module Auth
  module Authentication
    SESSION_MAX_AGE = 1.day

    def self.login(account)
      user = User.find_by(username: account.username)
      return unless user

      is_valid_password = BCrypt::Password.new(user.password_digest) == account.password
      return unless user && is_valid_password

      session = Session.where(user: user).order(id: :desc).first

      if session.present?
        return session if session.expires_at.blank?

        if session.expires_at > Time.now
          session.expires_at = Time.now + SESSION_MAX_AGE
          session.save
          return session
        end
      end

      session_sid = Snowflake.id.to_s
      payload = {
        session_id: session_sid
      }

      jwt = JsonWebToken.encode(payload)

      session = Session.create!(
        sid: session_sid,
        user: user,
        access_token: jwt,
        expires_at: Time.now + SESSION_MAX_AGE
      )

      session
    end

    def self.authenticate_access_token(access_token)
      jwt_payload = JsonWebToken.validate(access_token)
      return unless jwt_payload

      return unless jwt_payload&.dig('session_id')

      session = Session.find_by(sid: jwt_payload['session_id'])
      return unless session
      return if session.expires_at && session.expires_at < Time.now

      if session.expires_at && session.expires_at > Time.now
        session.expires_at = Time.now + SESSION_MAX_AGE
        session.save
      end

      session
    end
  end
end
