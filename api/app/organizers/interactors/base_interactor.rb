module Interactors
  class BaseInteractor
    include Interactor
    include Interactor::ParamSupport
  end
end
