# frozen_string_literal: true

class MainController < ApplicationController
  def index
    render json: {
      ok: true,
      app: 'snackswap-api-v1'
    }
  end
end
