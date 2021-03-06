# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
	validates :title, :author_id, presence: true
	validates :title, uniqueness: { scope: [:author_id] }

	belongs_to :user,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: :User

	has_many :todos, dependent: :destroy
	has_many :messages, dependent: :destroy
	has_many :events, dependent: :destroy
end
