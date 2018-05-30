class ScreenshotsController < ApplicationController
  def create
    @game = Game.find(params[:game_id])

    if params[:images]
      params[:images].each do |img|
        @game.screenshots.create(image: img)
      end
      @screenshots = @game.photos
      redirect_back(fallback_location: request.referer, notice: "Saved")
    end

    
  end
end
