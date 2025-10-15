class UserPolicy < ApplicationPolicy
  def register?
    true
  end

  def view_all?
    session.present?
  end

  def view?
    session.present?
  end

  def create?
    session.present?
  end

  def update?
    session.present?
  end

  def remove?
    session.present?
  end
end
