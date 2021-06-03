const express = require('express');
const config = require('./Config/Server_info');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();

console.time('Server ON Time');

app.use('/', express.static(path.join(__dirname, '../dist')));

app.use('*', (req, res, next) => {
	console.log(req.body);
	console.log(req.query);
	console.log(req.headers["user-agent"]);
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use('/test', (req, res, next) => {
	const test = {a: 1234, b: 'string'};
	res.send(test);
});

app.listen(config.Server.port, config.Server.ip, () => {
    console.timeEnd('Server ON Time');
});

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
	console.error(err.stack)
	
	console.log('치명적인 오류!');
    process.exit(1)
});