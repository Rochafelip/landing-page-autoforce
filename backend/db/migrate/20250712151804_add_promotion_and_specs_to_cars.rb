class AddPromotionAndSpecsToCars < ActiveRecord::Migration[8.0]
  def change
    # Adicionando colunas novas
    add_column :cars, :on_promo, :boolean, default: false, null: false
    add_column :cars, :carroceria, :string
    add_column :cars, :promo_price, :decimal, precision: 10, scale: 2
    add_column :cars, :cambio, :string
    add_column :cars, :combustivel, :string

    # Alterar a coluna price para definir precisão e escala
    change_column :cars, :price, :decimal, precision: 10, scale: 2
  end
end
