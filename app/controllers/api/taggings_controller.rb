class Api::TaggingsController < ApplicationController
  def create
    @tagging = Tagging.new(tagging_params)
    @tagging.save 
    render json: @tagging.errors.full_messages
  end

  def destroy
  end

  def show
  end

  def index
  end

  private
  def tagging_params
    params.require(:tagging).permit(:note_id, :tag_id)
  end
end
