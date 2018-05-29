class GamesController < ApplicationController
  def show
    @game = Game.find(params[:id])
  end

  def index
    @games = Game.all
  end

  def prev
    @game = Game.find(params[:id])
    binding.pry
  end

  def next

  end
end
