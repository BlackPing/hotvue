const https = require('https');
const http = require('http');
const express = require('express');
const config = require('./Config/Server_info');
const path = require('path');
const helmet = require('helmet');
const fs = require('fs');
const crypto = require('crypto');

const app = express();

app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
app.use((req, res, next) => { 
    res.header('X-XSS-Protection', 1);
    res.header('Cache-Control', 'no-store');
    res.header('Pragma', 'no-cache');
	
	if(config.Server.ssl) {
		if (req.secure) {
			next();
		} else {
			res.redirect('https://' + req.headers.host + req.url);
		}
	} else {
		res.header("Access-Control-Allow-Origin", "*");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept"
		);
		next();
	}
});

console.time('Server ON Time');

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
console.log('root path: ' + path.join(__dirname, '../dist'))
app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
	fs.readFile(path.join(__dirname, '../dist/index.html'), 'utf-8', (err, data) => {
		if(err) {
			res.send(err);
		} else {
			res.send(data);
		}
	});
});

// app.use('*', (req, res, next) => {
// 	if(req.baseUrl === '/') {
// 		console.log(req.baseUrl)
// 		console.log(req.body);
// 		console.log(req.query);
// 		console.log(req.headers["user-agent"]);
// 		res.header("Access-Control-Allow-Origin", "*");
// 		res.header(
// 			"Access-Control-Allow-Headers",
// 			"Origin, X-Requested-With, Content-Type, Accept"
// 		);
// 	}
// 	next();
// });

sslServer = () => {
	http.createServer(app).listen(config.Server.port);
	https.createServer(config.Server.cert_option, app).listen(443);
	console.log('ip: ', config.Server.ip, 'port', config.Server.port)
	console.log('SSL Let\’s Encrypt');
	console.timeEnd('Server ON Time');
}

config.Server.ssl ? sslServer() :
app.listen(config.Server.port, config.Server.ip, () => {
	console.log('ip: ', config.Server.ip, 'port', config.Server.port)
	console.timeEnd('Server ON Time');
})

process.on('uncaughtException', function (err) {
	console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
	console.error(err.stack)
	
	console.log('치명적인 오류!');
    process.exit(1)
});
