Rails.application.routes.draw do
  resources :tasks
  resources :lists
  root to: 'pages#index'
  get '/up_position/:id.json', to: 'tasks#up_position'
  get '/down_position/:id.json', to: 'tasks#down_position'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
