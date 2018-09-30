class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :slug
      t.text :description
      t.integer :position

      t.timestamps
    end
  end
end
