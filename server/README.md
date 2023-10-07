# My E-Commerce App - Server

This is the server-side component of My E-Commerce App, a full-stack e-commerce application.

## Installation

1. Clone the repository: `git clone https://github.com/Muhammad0320/audiophile--f.git`
2. Navigate to the server directory: `cd audiophile--f/server`
3. Install dependencies: `npm install`

## Configuration

1. Create a `.env` file in the server directory.

2. Create a new project with mongodb

3. Set the following environment variables in the `.env` file:

   -

   - `DATABASE`: The uri from you mongodb database database.

   - `JWT_SECRET`: Any secret text with kebeab case minimum of 32 characters database.
   - `JWT_EXPIRES_IN`: The number of days you want the user to stay logged in

   - `DATABASE_PASSWORD`: The password for accessing your PostgreSQL database.
   - `STRIPE_API_KEY`: Your Stripe API key.

## Starting the Server

To start the server locally, run the following command: `npm run start:prod`

The server will be running on `http://127.0.0.1:3000`

## API Documentation

The server exposes the following API endpoints:

### Product Endpoint

- `GET /api/v1/products`: Fetches a list of all products.
- `POST /api/v1/products`: Creates a new product - Restricted to admin only.

- `GET /api/v1/products/top-5-cheap`: To get the list top cheap products.
- `GET /api/v1/products/products-below/:price`: Fetch a list of product below the price params'
- `GET /api/v1/products/slug/:slug`: GET a particular product by slug.
- `GET /api/v1/products/:id`: Get a particular product by id.
- `PATCH /api/v1/products/:id`:Update a particular product by id .
- `DELETE /api/v1/products/:id`: Delete a particular product by id.
- `GET /api/v1/products/get-product-stats`: Get a all tour statictics.

### Product Endpoint on Review

- `/api/v1/products/:productId/review`: Navigates to the reviews routes and Get all reviews with a that belogs to the product with id of productId params.
