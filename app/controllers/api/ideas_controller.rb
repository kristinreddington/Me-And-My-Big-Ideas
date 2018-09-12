class Api::IdeasController < ApplicationController
  before_action :set_idea, only: %I[show update destroy]

  def index
    @ideas = Idea.all
    render :json => @ideas
  end

  def show
    render :json => @idea
  end

  def create
    @idea = Idea.new(idea_params)

    if @idea.save
      render json: @idea, status: :created
    else
      render json: @idea.errors, status: :unprocessable_entity
    end
  end


  def update
    if @idea.update(idea_params)
      render :json => @idea
    else
      render json: @idea.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @idea.destroy
  end

  private

  def set_idea
    @idea = Idea.find(params[:id])
  end

  def idea_params
    params.require(:idea).permit(
      [
        :title,
        :description,
        :images_attributes => %I[
            id
            photo
           _destroy
         ]
         ])
  end
end
