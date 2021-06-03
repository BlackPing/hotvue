const fs = require('fs');

const init_func = {
	API_init: (path, url) => {
		fs.readdir(path, (err, fileList) => {
			if(err) {
				throw err;
			} else {
				if(fileList.length === 0) {
					return;
				} else {
					console.log(fileList);
					let API_URL;
					let RestAPI_URL;
					let Router_JS;
					for(let i = 0; i < fileList.length; i++) {
						API_URL = path.substring(path.lastIndexOf('/'), path.length);
						if(fileList[i].indexOf('.js') === -1) {
							init_func.API_init(`${path}/${fileList[i]}`, `${url}${API_URL}`);
						} else {
							RestAPI_URL = `${url}${API_URL}/${fileList[i].substring(0, fileList[i].indexOf('.js'))}`;
							Router_JS = `.${RestAPI_URL}.js`;
							console.log(RestAPI_URL, Router_JS);
							app.use(RestAPI_URL, require(Router_JS));
						}
					}
	
					// RestAPI Router
					return;
				}
			}
		})
	}
}

module.exports = init_func;