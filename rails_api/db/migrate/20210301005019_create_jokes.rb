class CreateJokes < ActiveRecord::Migration[6.1]
  def change
    create_table :jokes do |t|
      t.string :title, null: false
      t.string :full_text

      t.timestamps
    end
  end
end
