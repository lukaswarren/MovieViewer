var movieSearch = require('../service/movie-by-title')

module.exports = [{
	method: 'GET',
	path: '/movie/{movieName}',
	handler: (request, h) => {
        var movie =  movieSearch.movietitle(request.params.movieName);
		var movieInfo = movie.then(function(m){
			return [{ title :  m.original_title, image :  m.poster_path , release :  m.release_date}];
		});
		return movieInfo;
    }
}];
