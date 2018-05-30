class ScreenshotsController < ApplicationController
  def create
    @game = Game.find(params[:game_id])

    if params[:images]
      params[:images].each do |img|
        @game.screenshots.create(image: img)
      end
      @screenshots = @game.screenshots
      redirect_back(fallback_location: request.referer, notice: "Saved")
    end


  end
end
