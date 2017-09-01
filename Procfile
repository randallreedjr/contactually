web: bundle exec puma -p $PORT -e $RAILS_ENV
worker: bundle exec rake environment resque:work QUEUE='*'
