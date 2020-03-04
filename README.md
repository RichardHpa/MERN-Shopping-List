# MERN Shopping List

> Shopping list app built with the MERN stack along with Redux for state management, Reactstrap and react-transition-group.

## Installation

### Config

For this project you will need to have a [MongoDB Atlas](https://www.mongodb.com/) account. You can get one for free [here](https://www.mongodb.com/).  
Create a .env file in the root directory with the the following variables
```env
MONGO_USER=
MONGO_PASSWORD=
MONGO_CLUSTER_NAME=
MONGO_TABLE_NAME=
```
There is an example provided in the project

### Install Dependencies & Run the Client & Server

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```
