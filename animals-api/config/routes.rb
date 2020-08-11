Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :stateorganizations
    end
  end
  namespace :api do
    namespace :v1 do
      resources :animalstates
    end
  end
  namespace :api do
    namespace :v1 do
      resources :backings
    end
  end
  namespace :api do
    namespace :v1 do
      resources :organizations
    end
  end
  namespace :api do
    namespace :v1 do
      resources :states
    end
  end
  namespace :api do
    namespace :v1 do
      resources :sightings
    end
  end
  namespace :api do
    namespace :v1 do
      resources :users
      post '/signup', to: 'users#create'
      post '/login', to: 'users#login'
      get '/auto_login', to:'users#auto_login'
    end
  end
  namespace :api do
    namespace :v1 do
      resources :animals
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
