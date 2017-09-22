class Api::TodosController < ApplicationController
	before_action :require_logged_in

	def index
		@todos = Todo.where(project_id: params[:project_id])
		render :index
	end

	def show
		@todo = Todo.find_by(id: params[:id])
		if @todo
			render :show
		else
			render json: ["Todo Not Found"], status: 404
		end
	end

	def create
		@todo = Todo.new(todo_params)
		@todo.project_id = params[:project_id]
		@todo.author_id = current_user.id
		if @todo.save
			render :show
		else
			render json: @todo.errors.full_messages, status: 422
		end
	end

	def update
		@todo = Todo.find_by(id: params[:id])
		if @todo.update_attributes(todo_params)
			render :show
		else
			render json: @todo.errors.full_messages, status: 422
		end
	end

	def delete
		@todo = Todo.find_by(id: params[:id])
		if @todo.destroy
			render :show
		else
			render json: ["Todo doesn't exist"], status: 404
		end
	end

end
