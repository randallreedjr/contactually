source 'https://rubygems.org'
# Specify Ruby version for Heroku
ruby '2.3.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.2'
# Use postgres as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.6'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use react-rails to create React views
gem 'react-rails'
# Use jQuery rails for React ajax requests
gem 'jquery-rails'

# Use resque to queue background jobs in redis server
gem 'redis'
gem 'resque', require: 'resque/server'

# Use puma as the web server
gem 'puma'

# Use font awesome for icons
gem 'font-awesome-rails'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Spring speeds up development by keeping your application running in the background.
  # Read more: https://github.com/rails/spring
  gem 'spring'

  # Ensure consistent styling
  gem 'rubocop', require: false

  gem 'rspec-rails'

  # FactoryGirl and Faker for generating test data
  gem 'factory_girl_rails', '~> 4.0'
  gem 'faker'

  # Shoulda Matchers for model tests
  gem 'shoulda-matchers', '~> 3.1'

  # Capybara for feature tests
  gem 'capybara'
  gem 'poltergeist'

  # Take screenshots on test failures
  gem 'capybara-screenshot'

  # Handle db transactions in capybara tests
  gem 'transactional_capybara'

  # Use Jasmine to test javascript components
  gem 'jasmine-rails'
end

group :production do
  # Include rails_12factor for Heroku features
  gem 'rails_12factor'
end
