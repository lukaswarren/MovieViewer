module.exports = [{
	method: 'GET',
	path: '/mock',
	handler: (request, h) => {
		return {data};
	}
}];

const data = [
	{ id: 1, name: 'Alex', age: 21 },
	{ id: 2, name: 'Alice', age: 23 }
];