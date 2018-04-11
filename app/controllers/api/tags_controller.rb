class Api::TagsController < ApplicationController
  def create
    @tag =
  end

  def destroy
  end

  def show
  end

  def index
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end
