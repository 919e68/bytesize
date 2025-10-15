Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allowed_origins = []

  if ENV['ALLOWED_ORIGINS'].present?
    allowed_origins = ENV['ALLOWED_ORIGINS'].split(' ').map(&:strip)
  end

  allow do
    origins allowed_origins
    resource '*',
      headers: :any,
      methods: [ :get, :post, :put, :patch, :delete, :options, :head ],
      credentials: true
  end
end
