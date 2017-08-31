Rails.application.routes.draw do
  root 'contacts#index'

  resources :contacts
  resources :companies
  resources :file_uploads
end
