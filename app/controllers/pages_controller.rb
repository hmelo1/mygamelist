class PagesController < ApplicationController
  def home
    @games = Game.randThree
  end
end
