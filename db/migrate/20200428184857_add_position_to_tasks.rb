class AddPositionToTasks < ActiveRecord::Migration[6.0]
  def self.up
    add_column :tasks, :position, :integer
    execute <<-SQL
     CREATE SEQUENCE position_seq START 1;
     ALTER SEQUENCE position_seq OWNED BY tasks.position;
     ALTER TABLE tasks ALTER COLUMN position SET DEFAULT nextval('position_seq');
    SQL
  end
  def self.down
    remove_column :tasks, :position
    execute <<-SQL
      DROP SEQUENCE position_seq;
    SQL
  end
end
