module Error
  class GraphqlError < StandardError
    attr_reader :status, :errors

    def initialize(errors = [], status = :ok)
      @errors = errors
      @status = status
      super('GraphqlError')
    end
  end
end
