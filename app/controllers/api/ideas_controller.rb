class Api::IdeasController < ApplicationController
  before_action :set_idea, :only => [:show, :update, :destroy]

  def index
    @ideas = Idea.order(:id)
    render :json => @ideas
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      render :json => idea
    else
      render :json => {:message => product.errors }, :status => 400
    end
  end

  def show
    render :json => @idea
  end

  def update
    if @idea.update(idea_params)
      render :json => @idea
    else
      render json: { :message => product.errors }, :status => 400
    end
  end

  def destroy
    if @idea.destroy
      render json: { :message => "Successfully Deleted!" }, :status => 204
    else
      render json: { :message => "Unable to Delete Idea" }, :status => 400
    end
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :description, :notes_attributes => [:text, :id], :images_attributes => [:url, :id])
  end

  def set_idea
    @idea = Idea.find_by(:id => params[:id])
  end

end
