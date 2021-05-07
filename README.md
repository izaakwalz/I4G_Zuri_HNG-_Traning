# Task Title: Crud App With Database

##### <b>Heroku Link🌐:</b> https://heroku.com

## APP FEATURES

Create a simple express application that:

1. Connects to database
2. Creates the payload:
   `{ message: String, data: Object }`
3. Get's the data created,
4. Updates the data created,
5. Deletes the data Created

The data you are required to create should contain name, email, country.

## How To Run

- In the project directory, you can run:
  `npm install`
- add enviromental virables, create
- `mkdir .env .env.dev` file then add the following

```javascript
 PORT = your desired port
 NODE_ENV = development
 MONGODB_URI=mongodb://localhost/XXX-XXX-XXX
```

- In your terminal run `npm start` or `npm run dev`

## Get All Data Endpoints

- `GET: /api.v1/users` : access public, get all data

```json
GET >>> data: {}
```

## Create Endpoints

- `POST: /api/v1/users` : access public, post data:

```javascript
POST req.body >>> data: {}
```

## Update Data Endpoints

- `PUT: /api/v1/users/:id` : access public, update data:

```javascript
PUT req.params >>>  <user id> data:  {}
```

## Delete Data

- `DELETE: /api/v1/users/:id` : assess public, delete data:

```javascript
Delete req.params >>>  <user id> data:  {}
```

###### CRUD APP ⬛
