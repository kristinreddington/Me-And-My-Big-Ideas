Rails.application.routes.draw do

  namespace :api do
    resources :ideas
    resources :notes
    resources :images
  end
end
