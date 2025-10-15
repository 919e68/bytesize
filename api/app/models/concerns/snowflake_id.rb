
module SnowflakeId
  extend ActiveSupport::Concern

  included do
    before_validation :ensure_sid
  end

  class_methods do
    def get_id(sid)
      return nil unless sid
      return unless column_names.include?('sid')

      find_by(sid: sid)&.id
    end
  end

  private

  def ensure_sid
    return unless self.class.column_names.include?('sid')

    self.sid = Snowflake.id if sid.blank?
  end
end
