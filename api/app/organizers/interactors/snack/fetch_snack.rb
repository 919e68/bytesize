module Interactors::Snack
  class FetchSnack < Interactors::BaseInteractor
    include Interactor::ContextValidator

    params :id, :user

    validate :id, :required
    validate :user, :required

    def call
      validate!

      context.data = @snack
    end

    private

    def validate!
      @snack = user.snacks.find_by(id: id)
      raise Error::ErrorCode.new('SNACK_NOT_FOUND', :unprocessable_content) unless @snack
    end
  end
end
