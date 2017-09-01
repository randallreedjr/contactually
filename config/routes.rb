require 'resque/server'

Rails.application.routes.draw do
  root 'contacts#index'

  resources :contacts
  resources :companies
  resources :file_uploads

  mount Resque::Server, at: '/jobs'
end
