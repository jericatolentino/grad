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

### Setup/ run Virtual environment
- at root level create VM once `virtualenv env` (env being the name you set)
- ensure all packages is installed in Lib/site-packages `pip install -r requirements.txt`
- for package specific; `pip install "Django=3.0.*"`

- to activate VM in windows `env\Scripts\activate`, on unix `source env/Scripts/activate`
- Note: you are in if you see `(env)` on CLI

- to deactivate `deactivate`
### Running website server
- cd into website then `python manage.py runserver`

### Running GraphQL queries
- http://127.0.0.1:8000/graphql

### Running a migration
- `python manage.py makemigrations`
- `python manage.py migrate`

- load the test data `python manage.py loaddata users`

### Setting up with PostgreSQL

- ensure PostgreSQL is installed on your OS, version 14 and add to OS env variables (bashrc + source for unix if using git bash)
- check psql is installed, `psql`

- Note: by default psql will try to authenticate with database using name of machine user, user `psql -U postgres` to log in with postgres user and it will prompt for your setup password

- to create db + user ref to owner for SQL setup file

- In psql `\l` to show all databases 

## Other Info
### to create new subfolder/ app
- `django-admin startapp users`
### getting list of all dependencies
- on root level whilst in VM `pip freeze > requirements.txt`
- installing `pip install -r requirements.txt` 
