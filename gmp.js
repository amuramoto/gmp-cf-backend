const fetch = require('node-fetch');
const API_KEY = require('./key').API_KEY
const BASE_URL = 'https://maps.googleapis.com/maps/api'


function getPlaceDetails(options) {
	return new Promise((resolve, reject) => {
		if (!options.place_id) {
			reject('ERROR: options.place_id required');
		}
		resolve(fetch(`${BASE_URL}/place/details/json?key=${API_KEY}&placeid=${options.place_id}`));			
	});
}

function getDirections(options) {
	return new Promise((resolve, reject) => {
		
	});
}

function getPlacePhotos(options) {
	return new Promise((resolve, reject) => {
		
	});
}

function getOrigins(hit_me) {
	//todo get 1k lat-longs from nearby search in 45 mi radius

	//if hit_me == true , return cached 10 / 1000 results
	//if hit_me == false ,  return. 10 cached results

	let origins = [{
	
		}]
	return origins;

}

module.exports = {
	getPlaceDetails: getPlaceDetails,
	getDirections: getDirections,
	getOrigins: getOrigins,
	getPlacePhotos: getPlacePhotos
}