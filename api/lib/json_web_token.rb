class JsonWebToken
  ALGORITHM = 'HS256'.freeze
  SECRET_KEY = ENV.fetch('SECRET_KEY_BASE')

  def self.encode(payload)
    JWT.encode(payload, SECRET_KEY, ALGORITHM)
  end

  def self.validate(token)
    decoded_token = JWT.decode(token, SECRET_KEY, true, algorithm: ALGORITHM)
    return unless decoded_token

    decoded_token[0]
  rescue
    nil
  end
end
