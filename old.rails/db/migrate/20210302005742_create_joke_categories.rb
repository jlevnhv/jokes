class CreateJokeCategories < ActiveRecord::Migration[6.1]
  def change
    create_join_table :categories, :jokes
  end
end
