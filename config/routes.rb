Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: %i(create destroy)
    resources :projects, except: %i(edit new) do
      resources :todos, only: %i(index create)
      resources :messages, only: %i(index create)
      resources :events, only: %i(index create)
    end
    resources :todos, only: %i(show update destroy)
    resources :messages, only: %i(show update destroy) do
      resources :comments, only: %i(index create)
    end
    resources :comments, only: [:destroy]
    resources :events, except: %i(edit new index create)
  end

  root 'static_pages#root'

end
