This is my yet-unnamed project to improve upon the existing external resources for GeoGuessr. 

It's a React app, built on Django, with MariaDB as the backend. 

# Requirements
--------------

- Python 3.10
- Docker
- npm

# Installation
--------------

- Clone the repo
- Install a venv in the root directory of the project (or wherever, I'm not your mother).
- `cd geohints2`
- `pip install -r requirements.txt`
- `docker compose up -d`
- `python manage.py makemigrations [bollard|country|flag|licensePlate|roadSign|vehicle]` (TODO: make script for this)
- `python manage.py migrate`
- `python manage.py runserver 0.0.0.0:8000`

Backend should be up now, you can test at localhost:8000/admin 

- open another shell...
- `cd countrystreak/frontend`

