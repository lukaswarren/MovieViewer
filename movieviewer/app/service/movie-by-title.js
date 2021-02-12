const superagent = require('superagent');
module.exports = {
    movietitle:    function getMovieByTitle(title){
            return new Promise(function(resolve, reject){
                superagent.get('https://api.themoviedb.org/3/search/movie')
                .query({api_key: '217924914d84ddfc0b4606bda0560d6b', language : 'en-US', query : title})
                .then(response =>{
                    return response.body.results[0]
                })
                .then(result=> {
                    resolve(result)
                });
            });
        }
    }
