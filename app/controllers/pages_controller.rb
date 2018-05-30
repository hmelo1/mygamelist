class PagesController < ApplicationController
  def home
    @games = Game.all
    respond_to do |format|
      format.html {render :home}
      format.json {render json: @games}
    end
  end
end
