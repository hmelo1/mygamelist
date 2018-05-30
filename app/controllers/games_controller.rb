class GamesController < ApplicationController
  respond_to :json

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
    @comments.each do |comment|
      comment.email = comment.user.email
    end
    respond_to do |format|
      format.html {render :show}
      format.json {render json: {game: @game, comments: @comments.as_json(methods: :email)}}
    end
  end

  def next
    @game = Game.find(params[:id])
    @comments = @game.comments
    @comments.each do |comment|
      comment.email = comment.user.email
    end
    respond_to do |format|
      format.html {render :show}
      format.json {render json: {game: @game, comments: @comments.as_json(methods: :email)}}
    end
  end

  def screenshot_upload
    @game = Game.find(params[:id])
    @screenshots = @game.screenshots
  end
end
