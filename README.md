npm install

clasp create --type standalone 'Web App Example' --rootDir .gas

Served webapp at .app directory and google script files in .gas directory.

Project structure:

config
src
├── client
│ ├── css
│ └── js
│ └── home.html
├── library
└── server
├── functions
├── install
└── routines

Build the project with:

npm run build

If there is a trigger to install, open:
open the project with
clasp open

and run the index.gs triggers installation file in the src/install folder.

Deploy your project as a web app:
clasp deploy --description "message"

Development mode:
npm run dev:start

npm run dev:start

Clear the mess:
npm run dev:clear

npm run pretty:start

Official clasp cli documentation:
https://github.com/google/clasp

https://github.com/tanaikech/taking-advantage-of-Web-Apps-with-google-apps-script
