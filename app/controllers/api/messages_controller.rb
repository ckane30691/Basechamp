class Api::MessagesController < ApplicationController
	before_action :require_logged_in

	def index
		@messages = Message.where(project_id: params[:project_id])
		render :index
	end

	def show
		@message = Message.find_by(id: params[:id])
		if @message
			render :show
		else
			render json: ["Message Not Found"], status: 404
		end
	end

	def create
		@message = Message.new(message_params)
		@message.project_id = params[:project_id]
		@message.author_id = current_user.id
		if @message.save
			render :show
		else
			render json: @message.errors.full_messages, status: 422
		end
	end

	def update
		@message = Message.find_by(id: params[:id])
		if @message.update_attributes(message_params)
			render :show
		else
			render json: @todo.errors.full_messages, status: 422
		end
	end

	def destroy
		@message = current_user.messages.find_by(id: params[:id])
		if @message.destroy
			render :show
		else
			render json: ["You are not the author of this message"], status: 403
		end
	end

	private

	def message_params
		params.require(:message).permit(:body)
	end
end
