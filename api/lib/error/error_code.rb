module Error
  class ErrorCode < StandardError
    attr_reader :code, :status, :trace

    def initialize(code = 'ERROR_CODE', status = :ok, trace = false)
      super(code)
      @code = code
      @status = status
      @trace = trace
    end
  end
end
