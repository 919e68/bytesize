class ApplicationRecord < ActiveRecord::Base
  include Pagination
  primary_abstract_class
end
