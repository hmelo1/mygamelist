Rails.application.routes.draw do
  root 'pages#home'

  devise_for :users,
                      path: '',
                      path_names: {sign_in: 'login', sign_out: 'logout', edit: 'profile', sign_up: 'registration'}

  post 'gamelists/:id' => 'gamelists#addgame'
  delete 'gamelists/:id' => 'gamelists#deletegame'
  get '/games/:id/next', to: 'games#next'
  get '/games/:id/prev', to: 'games#prev'
  get '/games/:id/screenshot_upload', to: "games#screenshot_upload"
  resources :gamelists
  resources :users, only: [:show]
  resources :games, only: [:show, :index] do
    resources :screenshots, only: [:create, :destroy]
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
