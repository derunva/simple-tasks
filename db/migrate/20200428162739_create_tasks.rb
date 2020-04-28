class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :list, null: false, foreign_key: true
      t.string :name
      t.boolean :status

      t.timestamps
    end
  end
end
