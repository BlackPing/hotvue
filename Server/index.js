const express = require('express');
const config = require('./Config/Server_info');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();

console.time('Server ON Time');

app.use('*', (req, res, next) => {
	if(req.baseUrl === '/') {
		console.log(req.baseUrl)
		console.log(req.body);
		console.log(req.query);
		console.log(req.headers["user-agent"]);
		res.header("Access-Control-Allow-Origin", "*");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept"
		);
	}
	next();
});

API_init = (path, url) => {
	fs.readdir(path, (err, fileList) => {
		if(err) {
			throw err;
		} else {
			if(fileList.length === 0) {
				return;
			} else {
				let API_URL;
				let RestAPI_URL;
				let Router_JS;
				for(let i = 0; i < fileList.length; i++) {
					API_URL = path.substring(path.lastIndexOf('/'), path.length);
					if(fileList[i].indexOf('.js') === -1) {
						API_init(`${path}/${fileList[i]}`, `${url}${API_URL}`);
					} else {
						RestAPI_URL = `${url}${API_URL}/${fileList[i].substring(0, fileList[i].indexOf('.js'))}`;
						Router_JS = `.${RestAPI_URL}.js`;
						console.log('app router ::', RestAPI_URL, ', file load ::', Router_JS);
						app.use(RestAPI_URL, require(Router_JS));
					}
				}

				// RestAPI Router
				return;
			}
		}
	})
}

console.log('################### REST API INIT ###################');
API_init('./Server/API', '');

app.use('/', express.static(path.join(__dirname, '../dist')));


app.listen(config.Server.port, config.Server.ip, () => {
	console.timeEnd('Server ON Time');
});

process.on('uncaughtException', function (err) {
	console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
	console.error(err.stack)
	
	console.log('치명적인 오류!');
    process.exit(1)
});
