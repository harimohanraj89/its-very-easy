Rails.application.routes.draw do
  get '/', to: 'pages#coming_soon'

  resources :recipes, only: [:show]

  namespace :admin do
    resources :recipe_ingredients
    resources :recipes
  end
  # mount Fae below your admin namespec
  mount Fae::Engine => '/admin'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
