class Api::EventsController < ApplicationController
	before_action :require_logged_in

	def index
		@events = Event.where(project_id: params[:project_id])
		render :index
	end

	def show
		@event = Event.find_by(id: params[:id])
		if @event
			render :show
		else
			render json: ["Event Not Found"], status: 404
		end
	end

	def create
		@event = Event.new(event_params)
		@event.project_id = params[:project_id]
		@event.author_id = current_user.id
		if @event.save
			render :show
		else
			render json: @event.errors.full_messages, status: 422
		end
	end

	def update
		@event = Event.find_by(id: params[:id])
		if @event.update_attributes(event_params)
			render :show
		else
			render json: @event.errors.full_messages, status: 422
		end
	end

	def destroy
		@event = current_user.events.find_by(id: params[:id])
		if @event && @event.destroy
			render :show
		else
			render json: ["You are not the creator of this event"], status: 403
		end
	end

	private

	def event_params
		params.require(:event).permit(:title, :body, :start_date, :end_date)
	end
end
