json.extract! task, :id, :list_id, :name, :status, :position, :created_at, :updated_at
json.url task_url(task, format: :json)
