# Freelance Developer App
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
### Description
This app is a full stack app with that allows freelance developers to advertise their services

[Live Site](https://goldendevs.herokuapp.com/)
### Installation
install dependancies

    npm install 

create .env file
DB_NAME=   database name (adjust in db/schema.sql)
DB_USER=    maybe root
DB_PASSWORD= sql password

setup database in mysql shell

    source db/schema.sql

seed database

    npm run seeds

start server

    npm run watch

### Contributions
This was a collaborative project by:
* James Pritchard - Lead Developer
* Sebastian Gillis - Backend Developer
* Taylor Moss - Frontend Developer and prepared presentation

[Issues and Pull requests can be made to this repo](https://github.com/SuedePritch/fluffy-palm-tree)

### Technology
* NodeJS
* Express
* Express Sessions
* SQL
* Sequalize
* Handlebars
* Three JS
