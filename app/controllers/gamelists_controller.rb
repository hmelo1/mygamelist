class GamelistsController < ApplicationController

  before_action :set_gamelist, except: [:index, :new, :create]

  def index
    @lists = current_user.gamelists
  end

  def new
    @lists = current_user.gamelists.build
  end

  def create
    @lists = current_user.gamelists.build(list_params)
  end

  def show

  end

  private

  def set_gamelist
    @list = Game.find(params[:id])
  end

  def list_params
    params.require(:gamelist).permit(:progress, :start_date, :end_date, :day)
  end
end
