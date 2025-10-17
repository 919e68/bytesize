class RatingPolicy < ApplicationPolicy
  def create?
    session.present?
  end
end
