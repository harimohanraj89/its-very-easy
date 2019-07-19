Rails.application.routes.draw do
  get '/', to: redirect('/recipes')
  get '/under-construction', to: 'pages#under_construction'
  get '/app', to: 'pages#app'

  get '/recipes', to: 'pages#app'
  get '/recipes/:id', to: 'pages#app', as: 'recipe'

  namespace :api do
    resources :recipes, only: [:index, :show]
  end

  namespace :admin do
    resources :recipe_steps
    resources :recipe_ingredients
    resources :recipes
  end
  # mount Fae below your admin namespec
  mount Fae::Engine => '/admin'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
