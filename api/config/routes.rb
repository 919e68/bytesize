Rails.application.routes.draw do
  get 'up' => 'rails/health#show', as: :rails_health_check
  root 'main#index'

  # graphql
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphql', graphql_path: '/graphql'
  end
  post '/graphql', to: 'graphql#execute'
end
