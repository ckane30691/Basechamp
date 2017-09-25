json.extract! message, :id, :title, :body, :project_id, :author_id, :created_at
json.author message.user.username
