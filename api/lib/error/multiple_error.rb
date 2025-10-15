module Error
  class MultipleError < StandardError
    attr_reader :status, :errors

    def initialize(errors = [], status = :ok)
      @errors = errors
      @status = status
      super('MultipleError')
    end
  end
end
