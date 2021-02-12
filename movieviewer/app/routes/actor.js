var movieSearch = require('../service/movie-by-title')

module.exports = [{
	method: 'GET',
	path: '/mock/{movieName}',
	handler: (request, h) => {
        return movieSearch.movietitle(request.params.movieName)
    }
}];
