class Api::CommentsController < ApplicationController
	before_action :require_logged_in

	def index
		@comments = Comment.where(message_id: params[:message_id])
		render :index
	end

	def create
		@comment = Comment.new(comment_params)
		@comment.message_id = params[:message_id]
		@comment.author_id = current_user.id
		if @comment.save
			render :index
		else
			render json: @comment.errors.full_messages, status: 422
		end
	end

	def destroy
		@comment = current_user.find_by(id: params[:id])
		if @comment.destroy
			render :index
		else
			render json: ["You are not the author of this message"], status: 403
		end
	end

	private

	def comment_params
		params.require(:message).permit(:body)
	end
end
