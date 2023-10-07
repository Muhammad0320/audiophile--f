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