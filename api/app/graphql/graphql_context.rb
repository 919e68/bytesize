class GraphqlContext < GraphQL::Query::Context
  def current_session
    self[:current_session]
  end

  def request
    self[:request]
  end

  def files
    self[:files]
  end
end
