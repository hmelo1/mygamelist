class GamesController < ApplicationController
  def show
    @game = Game.find(params[:id])
  end

  def index
    @games = Game.all
  end

  def prev
    @game = Game.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @game}
    end
  end

  def next

  end
end
