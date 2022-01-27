# grad project
Made up of the following stack: graphql, react, apollo, django

# Setup/ run Virtual environment

- at root level create VM once `virtualenv env` (env being the name you set)
- ensure Django is installed in Lib/site-packages `pip install "Django=3.0.*"`
- ensure django-graphene is installed 

- to activate VM in windows `demo\Scripts\activate`, on unix `source env/Scripts/activate`
- Note: you are in if you see `(env)` on CLI
# Running website server

- cd into website then `python manage.py runserver`

# running a migration
- `python manage.py makemigrations`
- `python manage.py migrate`

- load the test data `python manage.py loaddata ingredients`

# to create new subfolder/ app
- `django-admin startapp ingredients`