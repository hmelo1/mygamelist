Rails.application.routes.draw do
  root 'pages#home'

  devise_for :users,
                      path: '',
                      path_names: {sign_in: 'login', sign_out: 'logout', edit: 'profile', sign_up: 'registration'}

    resources :users, only: [:show]
    resources :games, only: [:show, :index]
    resources :gamelist

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
