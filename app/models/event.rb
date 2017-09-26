# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string
#  author_id  :integer          not null
#  project_id :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Event < ApplicationRecord
	validates :title, :project_id, :author_id, :start_date, :end_date, presence: true

	belongs_to :project

	belongs_to :user,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: :User

end
