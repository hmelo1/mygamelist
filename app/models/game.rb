class Game < ApplicationRecord

  has_many :gamelists
  has_many :users, through: :gamelists
  has_many :screenshots

end
