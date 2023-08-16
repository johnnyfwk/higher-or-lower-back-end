HigherorLower.co.uk is a full-stack game where users guess whether the next number will be higher or lower. If they score high enough, they can add their details to the global leaderboard.

The app was built using PostgreSQL, Express, React, and Node.js.

Live URL: https://higherorlower.co.uk

The back end (Github: https://github.com/johnnyfwk/higher-or-lower-back-end) is an Express API that supplies the front end (Github: https://github.com/johnnyfwk/higher-or-lower-front-end) with scores stored in PostgreSQL hosted by Render.com.

To clone this repo:
- go to https://github.com/johnnyfwk/higher-or-lower-back-end;
- near the top of the page, click on the 'Code' button;
- in the 'Local' tab, copy the HTTPS URL (https://github.com/johnnyfwk/higher-or-lower-back-end.git);
- in Terminal, access the folder you want to hold the repo;
- type 'git clone https://github.com/johnnyfwk/higher-or-lower-back-end.git' in the terminal (a repo named 'higher-or-lower-back-end' will be created in the current folder);
- in Terminal, type 'cd higher-or-lower-back-end' to go into that folder.
- This project uses packages that need to be installed in order for it to be run. To do this:

In Terminal, ensure you are in the 'higher-or-lower-back-end' folder;
- type 'npm i'.

To connect to the development database and run the project, a development environment variable must be created:
- at repo root level, create a .env file named '.env.development';
- In this file, type in 'PGDATABASE=higher_or_lower'.

If the database already exists and you want to drop it:
- in Terminal, type 'npm run dev-drop-database';

To create the database:
- in Terminal, type 'npm run dev-create-database'.

To create and seed all tables:
- in Terminal, type 'npm run prod-drop-create-and-seed-all-tables'.

To run the project:
- in Terminal, type 'npm run dev' to start listening to API requests;
- Visit 'http://localhost:9090/W2eR9tY4uI7oP1aS8dF3gH6jK5lQ0/original' to view the JSON data of scores.