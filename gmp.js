const fetch = require('node-fetch');
const API_KEY = require('./key').API_KEY
const BASE_URL = 'https://maps.googleapis.com/maps/api'

function gmp_http() {

	function getPlaceDetails(options) {
		return fetch(`${BASE_URL}/place/details/json?key=${API_KEY}&placeid=${place_id}`);
	}

}


module.exports = {
	GMP: gmp_http
}
