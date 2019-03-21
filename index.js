const GMP = require('./gmp');

let options = {
	place_id: 'ChIJdanGrEGuEmsRBz2ENKbB5AE'
}


async function doSomething () {
	let foo = await GMP.getPlaceDetails(options);
	return foo;
	
}

let bar = doSomething();

console.log(bar);