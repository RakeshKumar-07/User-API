# User App API

Live site [User-Api](https://user-api-g3oc.onrender.com/api/get-random-user)

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

- POST `/api/create-user`: Create a new user with provided data.
- GET `/api/get-random-user`: Get data of a single random user.
- POST `/api/check-user-existence`: Check if a user with a given name exists.
- POST `/api/users-above-age`: Get users above a certain age, provide age as JSON object.
- GET `/api/list-user-names`: Get an array of names of all users.
- User Object example:- {
    "name": "Dinesh",
    "dob": "2024-2-14",
    "age": 22,
    "location": "Delhi"
}
