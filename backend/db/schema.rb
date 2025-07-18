# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_07_12_151804) do
  create_table "cars", force: :cascade do |t|
    t.string "brand"
    t.string "model"
    t.integer "year"
    t.string "color"
    t.integer "mileage"
    t.decimal "price", precision: 10, scale: 2
    t.text "images"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "on_promo", default: false, null: false
    t.string "carroceria"
    t.decimal "promo_price", precision: 10, scale: 2
    t.string "cambio"
    t.string "combustivel"
    t.integer "doors"
    t.string "plate"
    t.string "plate_end"
  end
end
