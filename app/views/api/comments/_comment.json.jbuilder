json.extract! comment, :id, :body, :message_id, :author_id, :created_at
json.author comment.user.username
