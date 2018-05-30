class GamesController < ApplicationController
  def show
    @game = Game.find(params[:id])
    @comments = @game.comments
    @comment = Comment.new
  end

  def index
    @games = Game.all
  end

  def prev
    @game = Game.find(params[:id])
    @comments = @game.comments
    respond_to do |format|
      format.html {render :show}
      format.json {render json: {game: @game, comments: @comments}}
    end
  end

  def next
    @game = Game.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @game}
    end
  end

  def screenshot_upload
    @game = Game.find(params[:id])
    @screenshots = @game.screenshots
  end
end
