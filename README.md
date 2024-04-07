# User App API

The fully functioning REST API using:

 - Express
 - MongoDB
 - Mongoose

## Getting started

To start project, run:
- Place youe MONGODB_URI in a `.env` file
```
npm install
npm start
```

## API's Description:-

- POST `/api/create-user`: Create a new user with provided data.\
- GET `/api/get-random-user`: Get data of a single random user.\
- POST `/api/check-user-existence`: Check if a user with a given name exists.\
- POST `/api/users-above-age`: Get users above a certain age.\
- GET `/api/list-user-names`: Get an array of names of all users.\
