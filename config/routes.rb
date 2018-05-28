Rails.application.routes.draw do
  get 'gamelist/index'
  get 'gamelist/new'
  get 'gamelist/create'
  get 'gamelist/description'
  get 'gamelist/screenshot_upload'
  get 'gamelist/update'
  get 'game/show'
  root 'pages#home'
  
  devise_for :users,
                      path: '',
                      path_names: {sign_in: 'login', sign_out: 'logout', edit: 'profile', sign_up: 'registration'}

    resources :users, only: [:show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
