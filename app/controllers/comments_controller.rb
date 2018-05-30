class CommentsController < ApplicationController
  before_action :authenticate_user!
  def new
    @comment = Comment.new
    @game = Game.find(params[:game_id])
    respond_to do |format|
      format.html {redirect_to 'games/shows'}
      format.json {render json: @game}
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.game_id = get_game_id
    @comment.user_id = current_user.id
    if @comment.save!
      redirect_to game_url(@comment.game_id), notice: 'Successfully Commented!'
    else
      render :new
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

  def get_game_id
    params.require(:game_id)
  end
end
