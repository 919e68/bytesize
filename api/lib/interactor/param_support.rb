module Interactor
  module ParamSupport
    extend ActiveSupport::Concern

    class_methods do
      def params(*params)
        delegate(*params, to: :context)
      end
    end
  end
end
