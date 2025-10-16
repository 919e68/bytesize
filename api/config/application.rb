require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

module Api
  class Application < Rails::Application
    config.load_defaults 8.0
    config.autoload_lib(ignore: %w[assets tasks])

    # timezone
    config.active_support.to_time_preserves_timezone = :zone

    # generators
    config.generators do |g|
      g.test_framework  nil
      g.helper          false
      g.stylesheets     false
      g.javascripts     false
    end

    # autoload path
    [
      'lib/common'
    ].each do |path|
      config.autoload_paths << Rails.root.join(path)
      config.eager_load_paths << Rails.root.join(path)
    end

    # config.api_only = true
    # config.middleware.use ActionDispatch::Cookies
    # config.middleware.use ActionDispatch::Session::CookieStore
  end
end
