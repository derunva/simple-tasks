json.extract! list, :id, :name, :created_at, :updated_at
json.tasks list.tasks, :id, :status, :name, :created_at
json.url list_url(list, format: :json)
