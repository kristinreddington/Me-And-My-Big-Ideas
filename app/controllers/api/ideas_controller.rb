class Api::IdeasController < ApplicationController
  before_action :set_idea, :only => [:show, :destroy]

  def index
    @ideas = Idea.all
    render :json => @ideas
  end

  def create
    @idea = Idea.new(idea_params)
    if params[:idea][:note]
    @note = Note.new(
    :idea_id => @idea.id,
    :text => params[:idea][:note])
  end
    if params[:idea][:file]
    @image = Image.new(
    :idea_id => @idea.id,
    :url => params[:idea][:file])
  end
      @idea.notes << @note
      @idea.images << @image
    if @idea.save
      render :json => @idea
    else
      render :json => {:message => @idea.errors }, :status => 400
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
    @idea = Idea.find_by(:id => params[:id])
    if @idea.destroy
      render json: { :message => "Successfully Deleted!" }, :status => 204
    else
      render json: { :message => "Unable to Delete Idea" }, :status => 400
    end
  end

  private

  def idea_params
    params.require(:idea).permit([
      :title, :description,
      :notes_attributes => %I[text, _destroy],
      :images_attributes => %I[file, _destroy]
      ])
  end

  def set_idea
    @idea = Idea.find_by(:id => params[:id])
  end

end
