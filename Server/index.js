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
	next();
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