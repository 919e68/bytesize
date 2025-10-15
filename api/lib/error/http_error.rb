module Error
  class HttpError < StandardError
    attr_reader :status

    def initialize(message, status = :ok)
      @status = status
      super(message)
    end
  end
end
