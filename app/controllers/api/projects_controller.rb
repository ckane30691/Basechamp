class Api::ProjectsController < ApplicationController
	before_action :require_logged_in

	def index
		@projects = current_user.projects
		render :index
	end

	def show
		@project = current_user.projects.find_by(id: params[:id])
		if @project
			render :show
		else
			render json: ["This project does not exist"], status: 404
		end
	end

	def create
		@project = Project.new(project_params)
		@project.author_id = current_user.id

		if @project.save
			render :show
		else
			render json: @project.errors.full_messages, status: 422
		end
	end

	def update
		@project = current_user.projects.find_by(id: params[:id])
		if @project.update_attributes(project_params)
			render :show
		else
			render json: @project.errors.full_messages, status: 422
		end
	end

	def destroy
		@project = current_user.projects.find_by(id: params[:id])
		if @project.destroy
			render :show
		else
			render json: ["Project does not exist"], status: 404
		end
	end

	private

	def project_params
		params.require(:project).permit(:title, :description)
	end

end
