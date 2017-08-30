Rails.application.routes.draw do
  root 'contacts#index'

  resources :contacts
  resources :companies
end
