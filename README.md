```bash
npm install
clasp create --type standalone --title 'Web App Example' --rootDir .gas mv .gas/.clasp.json .
```

<<<<<<< HEAD
clasp create --type standalone --title 'Web App Example' --rootDir .gas
mv .gas/.clasp.json .
=======
other type options:

- sheets
- docs
- slides
- forms
>>>>>>> master

Served webapp at .app directory and google script files in .gas directory.

Project structure:

```bash
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
```

Build the project with:

```bash
npm run build
```

If there is a trigger to install, open:
open the project with
clasp open

and run the index.gs triggers installation file in the src/install folder.

Deploy your project as a web app:

```bash
clasp deploy --description "message"
```

Development mode:
npm run dev:start

```bash
npm run dev:start
```

Clear the mess:

```bash
npm run dev:clear
```

```bash
npm run pretty:start
```

Official clasp cli documentation:
https://github.com/google/clasp

https://github.com/tanaikech/taking-advantage-of-Web-Apps-with-google-apps-script
