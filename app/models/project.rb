# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  author_id   :integer					 not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
	validates :title, :author_id, presence: true
	validates :title, uniqueness: true

	belongs_to :user,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: :User
end
