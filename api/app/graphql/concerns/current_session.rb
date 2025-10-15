module CurrentSession
  extend ActiveSupport::Concern

  def current_session
    context.current_session
  end

  def current_user
    current_session&.user
  end
end
