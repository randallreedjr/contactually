require 'resque/server'

Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  root 'contacts#index'

  resources :contacts
  resources :companies
  resources :file_uploads

  mount Resque::Server, at: '/jobs'
end
