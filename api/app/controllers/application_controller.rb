class ApplicationController < ActionController::Base
  include Error::Handler

  skip_before_action :verify_authenticity_token
end
