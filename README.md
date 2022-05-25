# node-movie-api

Node.JS - Moveis API

![nodejs movie api](https://nodeblog.files.wordpress.com/2011/07/nodejs.png)

### Technology:

- ExpressJS [Express](https://expressjs.com/)

- MongoDB [MongoDB](https://www.mongodb.com/)

- Joi for schema data validation[Joi](https://www.npmjs.com/package/joi)

- Fawn for transactions in MongoDB [Fawn](https://www.npmjs.com/package/fawn)

- BcryptJS for hashing mechanism[BcryptJS](https://www.npmjs.com/package/bcryptjs)

- JSON Web Token [JWT](https://jwt.io/)

- Jest for automated testing [Jest](https://jestjs.io/)

## Index

| Route      | HTTP Verb | POST body                                                            | Description                           |
| ---------- | --------- | -------------------------------------------------------------------- | ------------------------------------- |
| /api/users | `POST`    | { "name": "Oktav", "email": "oktav@domain.com", "password": "abc12"} | Create a new user and generate token. |
| /api/auth  | `POST`    | { "email": "oktav@domain.com", "password": "abc12" }                 | Generate a token.                     |

## Customers

| Route              | HTTP Verb | POST body                                           | Description               |
| ------------------ | --------- | --------------------------------------------------- | ------------------------- |
| /api/customers     | `GET`     | Empty                                               | List all customers.       |
| /api/customers     | `POST`    | {'name':'Oktav', 'phone':'123456789', 'isGold':true | Create a new customers    |
| /api/customers/:id | `GET`     | Empty                                               | Get a customer details.   |
| /api/customers/:id | `PUT`     | {'name':'Oktav1', 'phone':'12345678'}               | Update a customer detail. |
| /api/customers/:id | `DELETE`  | Empty                                               | Delete a customer.        |

## Genres

| Route           | HTTP Verb | POST body           | Description          |
| --------------- | --------- | ------------------- | -------------------- |
| /api/genres     | `GET`     | Empty               | List all genres.     |
| /api/genres     | `POST`    | {'name':'Horro'     | Create a new genre   |
| /api/genres/:id | `GET`     | Empty               | Get a genre details. |
| /api/genres/:id | `PUT`     | {'name':'Thriller'} | Update a genre name. |
| /api/genres/:id | `DELETE`  | Empty               | Delete a genre.      |

## Movies

| Route           | HTTP Verb | POST body                                                                                                | Description             |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------- | ----------------------- |
| /api/movies     | `GET`     | Empty                                                                                                    | List all movies.        |
| /api/movies     | `POST`    | { "title": "Another", "genreId": "628e72e329123a350c89bc9d", "numberInStock": 10, "dailyRentalRate": 2}  | Create a new movie      |
| /api/movies/:id | `GET`     | Empty                                                                                                    | Get a movie details.    |
| /api/movies/:id | `PUT`     | { "title": "Another1", "genreId": "6278f8a6e828d51e406e7216", "numberInStock": 20, "dailyRentalRate": 3} | Update a movie details. |
| /api/movies/:id | `DELETE`  | Empty                                                                                                    | Delete a movie.         |

## Rentals

| Route            | HTTP Verb | POST body                                                                         | Description                          |
| ---------------- | --------- | --------------------------------------------------------------------------------- | ------------------------------------ |
| /api/rentals     | `GET`     | Empty                                                                             | List all rentals that still ongoing. |
| /api/rentals     | `POST`    | {"customerId": "627000de7585443fdc5f5087", "movieId": "628e74e229123a350c89bca3"} | Create a new rental                  |
| /api/rentals/:id | `GET`     | Empty                                                                             | Get a rental details.                |

## Returns

| Route        | HTTP Verb | POST body                                                                         | Description                                                                                                           |
| ------------ | --------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| /api/rentals | `POST`    | {"customerId": "627000de7585443fdc5f5087", "movieId": "628e74e229123a350c89bca3"} | Make rental with given customerId and MovieId as return, delete rental, also update numberInStock movie with given Id |

## Installation<a name="installation"></a>

### Running Locally

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1.  Clone or Download the repository

    ```
    $ git clone https://github.com/oktaveko/moveis-API.git
    $ cd moveis-API
    ```

2.  Install Dependencies

    ```
    $ npm install
    ```

3.  Set env variables

    ```
    $ set "moveis_jwtPrivateKey":<your private key>
    $ set "moveis_db":<your local db>
    ```

4.  Start the application

    ```
    $ npm run dev
    ```

    Your app should now be running on [localhost:3000](http://localhost:3000/).

# Demo

[Root url for live demo on Heroku](https://moveis-oktav.herokuapp.com/)
