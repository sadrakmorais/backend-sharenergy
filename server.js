require('dotenv').config();
const express = require('express');
const server = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./src/router');
const { ppid } = require('process');

mongoose.Promise = global.Promise;

const dbConnection = `${process.env.MONGO_URL}`;

mongoose
	.connect(dbConnection, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('connected to database'))
	.catch((error) => console.log(`error connecting to Mongo: ${error}`));

const corsOptions = {
	origin: '*',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(cookieParser());
server.use(express.json());
server.use(routes);
