## StrangerEvents
Deployed Site: [StrangerEvents](http://strangerevents.herokuapp.com)

Inspired by "Stranger Things", StrangerEvents is a registration site for a hypothetical conference based on the Netflix series. Although the site relies on dummy data, it functions as a front-to-back CRUD application.


To Run This Application Locally:

1. Fork and clone this repository
1. Run ```npm i``` in the application's root folder
1. Create a PostgreSQL database titled ```events_crud```
1. To seed the database, run knex migration commands:
  - ```knex migrate:latest```
  - ```knex seed:run```
1. Run ```gulp```  

Last Updated: October 26, 2016
