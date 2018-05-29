class GamelistsController < ApplicationController

  before_action :set_gamelist, except: [:index, :new, :create]

  def index
    @list = Gamelist.where user_id: current_user.id
  end

  def new
    @lists = current_user.gamelists.build
  end

  #add to gamelist
  def addgame
    @list = Gamelist.where user_id: current_user.id

    @game = Gamelist.new
    @game.game_id = params[:id]
    @game.user_id = current_user.id

    respond_to do |format|
      if @game.save
        format.html {redirect_to root_url + "gamelists", notice: 'Added to gamelist.'}
        format.json {render :show, status: :created, location: @game}
      else
        format.html {render :new}
        format.json {render json: @game.errors, status: :unprocessable_entity}
      end
    end
  end

  def deletegame
    @game = Gamelist.find_by id: params[:id]
    @game.destroy
    respond_to :js
  end

  def show
    @list = Gamelist.where user_id: current_user.id
  end

  private

  def set_gamelist
    @list = Game.find(params[:id])
  end
end
