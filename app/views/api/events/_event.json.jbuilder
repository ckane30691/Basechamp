json.extract! event, :id, :title, :body, :project_id, :author_id, :created_at, :start_date, :end_date
json.author event.user.username
