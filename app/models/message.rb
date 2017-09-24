# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  project_id :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
	validates :title, :body, :project_id, :author_id, presence: true

	belongs_to :project

	belongs_to :user,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: :User

	has_many :comments, dependent: :destroy
end
