
module SnowflakeId
  extend ActiveSupport::Concern

  included do
    before_validation :ensure_sid
  end

  private

  def ensure_sid
    return unless self.class.column_names.include?('sid')

    self.sid = Snowflake.id if sid.blank?
  end
end
