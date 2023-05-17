const fetch = require('node-fetch');

let options = {
  	method: 'GET',
  	headers: {
    	'Authorization': `Bearer ${process.env.apik}`
  	}
}

fetch('https://api.pawan.krd/info', options)
  	.then(response => response.json())
  	.then(json => {
        delete json.info.name
    	  delete json.info.created
    	  console.log(json)
  	}).catch(err => console.log(err))
