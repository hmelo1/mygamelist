class Game < ApplicationRecord

  has_many :gamelists
  has_many :users, through: :gamelists

  def self.randThree
    Game.all.sample(3)
  end
end
