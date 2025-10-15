# frozen_string_literal: true

module Auth
  module AccountType
    USER = 'user'
  end

  class Account
    attr_accessor :type, :username, :password, :options

    def initialize(type:, username:, password:, options: {})
      @type = type
      @username = username
      @password = password
      @options = options
    end
  end
end
