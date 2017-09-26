# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

4.times do
	Message.create({
		title: Faker::Company.catch_phrase,
		body: Faker::Company.bs,
		author_id: rand(10),
		project_id: 3,
		})
end

4.times do
	Message.create({
		title: Faker::Company.catch_phrase,
		body: Faker::Company.bs,
		author_id: rand(10),
		project_id: 5,
		})
end

4.times do
	Message.create({
		title: Faker::Company.catch_phrase,
		body: Faker::Company.bs,
		author_id: rand(10),
		project_id: 9,
		})
end
