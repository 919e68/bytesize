# frozen_string_literal: true

class ApplicationPolicy
  attr_reader :session, :record

  def initialize(session, record)
    @session = session
    @record = record
  end

  def index?
    false
  end

  def show?
    false
  end

  def create?
    false
  end

  def new?
    create?
  end

  def update?
    false
  end

  def edit?
    update?
  end

  def destroy?
    false
  end

  class Scope
    def initialize(session, scope)
      @session = session
      @scope = scope
    end

    def resolve
      raise NoMethodError, "You must define #resolve in #{self.class}"
    end

    private

    attr_reader :session, :scope
  end
end
