## Stranger Events
Visit the deployed site: [Stranger Events](http://strangerevents.herokuapp.com)

Inspired by "Stranger Things", Stranger Events is a registration site for a hypothetical conference based on the Netflix series. Although the site relies on dummy data, it functions as a responsive, front-to-back CRUD application. One can view events, register as an attendee based on a tiered ticketing scale, and dynamically search attendees and schedules.

The following technologies were utilized to create both functionality and usability:

1. Express.js web framework for Node.js
1. Nunjucks for server-side templating
1. Knex for SQL-querying and schema-building
1. Gulp for local hosting
1. Bootstrap for responsive web design
1. Faker.js to populate PostgreSQL database
1. Moment.js for date-filtering and validations

To Run This Application Locally:

1. Fork and clone this repository
1. Run ```npm i``` in the application's root folder
1. Create a PostgreSQL database titled ```events_crud```
1. You may also need to create a .env file, in which case, add ```NODE_ENV=development``` to that file
1. To seed the database, run knex migration commands:
  - ```knex migrate:latest```
  - ```knex seed:run```
1. Run ```gulp```  

Next steps: This application is not complete. I plan on refactoring much of the server-side querying to enhance code readability.

Last Updated: October 26, 2016
