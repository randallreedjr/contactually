### Contactually Lite

At its core, Contactually is an online database for your contacts. Your task
is to build a very basic web interface for this database that accepts file
uploads, stores the data in a relational database, and displays the information
back to the user. This is an un-timed exercise, though most applicants submit 
within a few days to a week.


##### Requirements

- Built in Ruby on Rails.
- Allow a user to upload a comma-delimited file of contacts via a web form. The
  file will contain the following columns: `first_name`, `last_name`, `email_address`,
  `phone_number`, `company_name`. There's an example file included (data.csv).
- Parse the given file, normalize the data, and store the information in a
  relational database.
- Display the list of contacts and their data.
- Accompanying specs written in [Rspec](https://github.com/rspec/rspec-core)
- Allow deleting specific contacts via Ajax (ideally using React).
- Allow the list of contacts to be filtered via Javascript to show:
  - Only contacts with `.com` email addresses
  - Order the contacts alphabetically by email address
- Deploy your app to a free instance of [Heroku](https://www.heroku.com/pricing) and email us the link

##### Submission Instructions

- Break up your work into separate/logical commits.
- You can use as many branches as you need in order to organize your work, but you must
  make sure your completed code is on the `master` branch before bundling up your work.
- Your code should be clear and well-documented.

When you're done, use `git bundle` to bundle up the repo and email it as an attachment
to **hw@contactually.com**.

**NOTE:**
Your application *does not* need to handle authentication or authorization.

## Submission Notes from Candidate

- Project is setup with Circle CI for continuous integration
- Successful builds on the master branch are automatically deployed to Heroku
- Project is hosted at https://infinite-journey-91970.herokuapp.com

### Assignment Checklist

[x] Built in Ruby on Rails.
[x] User can upload CSV file via web form
[x] File can be parsed to extract contacts
[x] Contacts are stored in relational database
[x] Contact fields include first_name, last_name, emil_address, phone_number, extension, and company_name
[] Contacts have reference to file upload that created them (if any)
[x] Display list of contacts and their data
[x] User can delete contacts via ajax using React components
[] User can edit an existing contact via ajax using React components
[x] User can sort list of contacts by Name (default sort) or email, both A-Z or Z-A
[] User can filter contacts to only show those with '.com' email addresses

[x] Write ruby tests using RSpec
[x] Write javascript tests using React.TestUtils/Jasmine
[x] Configure CI server to automatically run test suite
[x] Deploy to Heroku

[] Git bundle final submission
[] Email the Heroku link and the git bundle to hw@contactually.com

### Reflections

Completing this assignment was challenging, as it required me to do many things for the first time:

-Integrate React into a Rails project (instead of having a separate React app that interacts with a Rails API)
-Set up Resque from scratch
-Deploy a Resque/Redis app to Heroku
-Configure a CI to run both Rails specs (rspec) and React specs (jasmine)
-Store an uploaded file's contents in the database (instead of storing in the cloud with a service like S3)
-Test React components with React TestUtils (instead of airbnb's enzyme)

I also wrote a stackoverflow answer about one of my challenges: https://stackoverflow.com/a/46020680/1951290
