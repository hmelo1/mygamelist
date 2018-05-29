Rails.application.routes.draw do
  root 'pages#home'

  devise_for :users,
                      path: '',
                      path_names: {sign_in: 'login', sign_out: 'logout', edit: 'profile', sign_up: 'registration'}

  post 'gamelists/:id' => 'gamelists#addgame'
  resources :gamelists
  resources :users, only: [:show]
  resources :games, only: [:show, :index]


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
