# spec/models/concerns/snowflake_id_spec.rb
require 'rails_helper'

RSpec.describe SnowflakeId, type: :concern do
  describe "callbacks" do
    it "assigns a sid before validation if blank" do
      allow(Snowflake).to receive(:id).and_return(123456)

      record = Session.new
      record.valid?

      expect(record.sid).to eq(123456)
    end

    it "does not overwrite existing sid" do
      allow(Snowflake).to receive(:id).and_return(111)

      record = Session.new(sid: 222)
      record.valid?

      expect(record.sid).to eq(222)
    end
  end
end
