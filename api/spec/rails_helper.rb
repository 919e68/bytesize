require 'spec_helper'
require 'simplecov'

ENV['RAILS_ENV'] ||= 'test'
ENV['SECRET_KEY_BASE'] ||= 'test_secret'

require_relative '../config/environment'

abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'rspec/rails'

begin
  ActiveRecord::Migration.maintain_test_schema!
rescue ActiveRecord::PendingMigrationError => e
  abort e.to_s.strip
end

RSpec.configure do |config|
  config.fixture_paths = [ Rails.root.join('spec/fixtures') ]
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!

  # factory bot
  config.include FactoryBot::Syntax::Methods
end

# shoulda matchers
Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end

# simplecov
SimpleCov.start 'rails' do
  add_filter '/config/'  # Exclude configuration files
  add_filter '/spec/'    # Exclude test files

  add_group 'Graphql', 'app/graphql'
  add_group 'Interactors', 'app/organizers'

  minimum_coverage 90
end

SimpleCov.formatters = SimpleCov::Formatter::MultiFormatter.new([
  SimpleCov::Formatter::HTMLFormatter
])

# rspec support
Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }
