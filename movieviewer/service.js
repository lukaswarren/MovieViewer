'use strict';

const Hapi = require('@hapi/hapi');

const server = Hapi.server({
	host: 'localhost',
	port: 8000
});

var routes = require('./app/routes');
server.route(routes);

async function start() {
	try {
		await server.start();
	} catch (err) {
		console.log(err);
		process.exit(1);
	}

	console.log('Server running at:', server.info.uri);
}

start();