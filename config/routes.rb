Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: %i(create destroy)
    resources :projects, except: [:edit, :new]
  end

  root 'static_pages#root'

end
