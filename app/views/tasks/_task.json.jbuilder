json.extract! task, :id, :list_id, :name, :status, :created_at, :updated_at
json.url task_url(task, format: :json)
