# `GRAD Project`
Made up of the following stack: graphql, react, apollo, django, (typescript)


## Front End (within website_fe)

### Run front end server
- ensure you have latest dependencies `npm run install`
- to build changes `npm run build`
- to start app `npm run start`, running on localhost:3000

### Run GraphQL client sandbox
- 'https://48p1r2roz4.sse.codesandbox.io'
- Otherwise you can access straight via context using the `useQuery` react hook


## Back End

### Setting up with PostgreSQL

- ensure PostgreSQL is installed on your OS, version 14 and add to OS env variables (bashrc + source for unix if using git bash)
- check psql is installed, `psql`

- In either pgAdmin or psql CLI
- Referencing `website/people/settings.py` line 80
- Create the same User credentials and allow all privileges
- Create the same database name and assign the owner as the same user above

### Setup/ run Virtual environment
- ensure you have `virtualenv` installed
- at root level create VM once `virtualenv env` (env being the name you set)

- to activate VM in windows `env\Scripts\activate`, on unix `source env/bin/activate`
- Note: you are in if you see `(env)` on CLI
- to deactivate `deactivate`

[`pip` or `pip3` depending which version you have installed]
- cd into `website` folder
- ensure all packages is installed in Lib/site-packages `pip install -r requirements.txt`
- if you want to install new/update for a specific package; `pip install "Django=3.0.*"`

### Running a migration
- `python manage.py makemigrations` - apply changes based on models
- `python manage.py migrate` - applying/unapplying migrations
- `python manage.py loaddata users` - load the test data (may need to restart db to see changes)

### Running website server
- (ensure env is running) run `python manage.py runserver`

### Running GraphQL queries
- http://127.0.0.1:8000/graphql
## Other Info
### to create new subfolder/ app
- `django-admin startapp users`
### getting list of all dependencies
- whilst in VM `pip freeze > requirements.txt`
