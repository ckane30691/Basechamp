# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string
#  author_id  :integer          not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Todo < ApplicationRecord
	validates :title, :project_id, :author_id, presence: true

	belongs_to :project

	belongs_to :user,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: :User
end
