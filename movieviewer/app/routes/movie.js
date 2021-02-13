var movieSearch = require('../service/movie-by-title')

module.exports = [{
	method: 'GET',
	path: '/mock/{movieName}',
	handler: (request, h) => {
        var movie =  Promise.resolve(movieSearch.movietitle(request.params.movieName));
		var movieInfo = movie.then(function(m){
			return [{ title :  m.original_title, image :  m.poster_path , release :  m.release_date}];
		});
		console.log(movieInfo);
		return movieInfo;
    }
}];
