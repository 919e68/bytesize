class Snowflake
  EPOCH = 1609459200000 # custom epoch (January 1, 2021)

  def initialize(sequence = 0)
    @machine_id = (ENV['MACHINE_ID'] || 1).to_i
    @sequence = sequence
    @last_timestamp = -1
    @mutex = Mutex.new
  end

  def next_id
    @mutex.synchronize do
      timestamp = current_time_millis

      if timestamp < @last_timestamp
        raise 'clock moved backwards. refusing to generate id'
      end

      if timestamp == @last_timestamp
        @sequence = (@sequence + 1) & 0xFFF # 12 bits for sequence
        if @sequence.zero?
          timestamp = until_next_millis(@last_timestamp)
        end
      else
        @sequence = 0
      end

      @last_timestamp = timestamp

      ((timestamp - EPOCH) << 22) | (@machine_id << 12) | @sequence
    end
  end

  def self.id
    Snowflake.new.next_id
  end

  def self.next_id
    Snowflake.new.next_id
  end

  def get(model, id)
    model.select(:id).find_by(sid: id)&.id
  end

  def self.get(model, id)
    model.select(:id).find_by(sid: id)&.id
  end

  private

  def current_time_millis
    (Time.now.to_f * 1000).to_i
  end

  def until_next_millis(last_timestamp)
    timestamp = current_time_millis
    timestamp = current_time_millis while timestamp <= last_timestamp
    timestamp
  end
end
