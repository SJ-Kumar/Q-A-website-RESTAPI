# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Create MongoDb Cluster and Get Connection MongoDb URI
- Set environment variables in `config.env` under `./config/env`
  * Set `MONGO_URI = <YOUR_MONGO_URI>`
  * Set `JWT_SECRET_KEY = <YOUR_SECRET_KEY>`
  * Set `SMTP_EMAIL=<YOUR_GMAIL_EMAIL>`
  * Set `SMTP_PASS=<YOUR_GMAIL_PASSWORD>`
- `node dummy-generator.js --import` to load dummy data to database
- `npm run dev` to start the local server

## MongoDB Database Screenshots

[Screenshots](./MongoDB%20Updation%20Screenshots)

## Complete Documentation with proper specifications

Detailed information can be found in [this specifications](./Q%20%26%20A%20WEBSITE%20USING%20REST%20API%20DOCUMENTATION.pdf)

