var movieSearch = require('../app/service/movie-by-title');
const superagent = require('superagent');

jest.mock('superagent');


test('test Sandlot', ()=>{
    superagent.get.mockResolvedValue({
        data : [
            {
                "page": 1,
                "results": [
                  {
                    "adult": false,
                    "backdrop_path": "/m0p2zjOjCZxMzyuKnWEyYvQqvb5.jpg",
                    "genre_ids": [
                      35,
                      10751
                    ],
                    "id": 11528,
                    "original_language": "en",
                    "original_title": "The Sandlot",
                    "overview": "In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team, resulting in many adventures.",
                    "popularity": 16.273,
                    "poster_path": "/dQkE6saKpkBxKsuGG2bU3CXQwMX.jpg",
                    "release_date": "1993-04-07",
                    "title": "The Sandlot",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 715
                  },
                  {
                    "adult": false,
                    "backdrop_path": "/xWQ6A4HvknjHlFw4R9FyQDFg9ma.jpg",
                    "genre_ids": [
                      35,
                      10751
                    ],
                    "id": 18500,
                    "original_language": "en",
                    "original_title": "The Sandlot 2",
                    "overview": "A decade has passed in the small town where the original Sandlot gang banded together during the summer of ’62 to play baseball and battle the Beast. Now comes the sequel, a campy romp back to the dugout where nine new kids descend on the diamond only to discover that a descendant of the Beast lives in Mr. Mertle’s backyard--a monster of mythical proportions known as \"The Great Fear.\"",
                    "popularity": 14.075,
                    "poster_path": "/xLc3jTAKAOCg7lBWp9vzyAJNLay.jpg",
                    "release_date": "2005-05-03",
                    "title": "The Sandlot 2",
                    "video": false,
                    "vote_average": 5.7,
                    "vote_count": 104
                  },
                  {
                    "adult": false,
                    "backdrop_path": "/zbPFv31XEmLLfFRxO6W3LqTnM9s.jpg",
                    "genre_ids": [
                      10751
                    ],
                    "id": 21138,
                    "original_language": "en",
                    "original_title": "The Sandlot: Heading Home",
                    "overview": "A successful professional baseball player gets his ego in check via an unreality check when he travels back in time to his boyhood sandlot ball-playing days.",
                    "popularity": 8.14,
                    "poster_path": "/zK38pUotFcEhVhau22Og02OWQ8O.jpg",
                    "release_date": "2007-05-01",
                    "title": "The Sandlot: Heading Home",
                    "video": false,
                    "vote_average": 5.8,
                    "vote_count": 46
                  },
                  {
                    "adult": false,
                    "backdrop_path": null,
                    "genre_ids": [
                      99
                    ],
                    "id": 455680,
                    "original_language": "en",
                    "original_title": "The Sandlot Journey",
                    "overview": "The \"Sandlot\" is one of those mystical, magical places in childhood, a place where dreams begin and boys and girls learn the art of working together to accomplish a single goal.. to have fun... That fun has been taken away from the game and fewer and fewer kids are choosing to not participate in youth athletics. You only get so much time to spend with your kids. You need to make sure that when it's all said and done, you have no regrets. With the help of George Brett, Ned Yost, Cat Osterman, Joe Simpson ( Fox Sports Atlanta and the Atlanta Braves) and many others this soft subtile approach takes you on a journey through the sandlot and shows you what it takes to bring the fun back to the games your kids have chosen to play! As George Brett says, 'When you realize that your child is not going to be a big leaguer you will have a lot more fun!'",
                    "popularity": 0.6,
                    "poster_path": null,
                    "release_date": "2015-09-01",
                    "title": "The Sandlot Journey",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                  }
                ],
                "total_pages": 1,
                "total_results": 4
              }
        ]
    });

    var answer = '{"adult":false,"backdrop_path":"/m0p2zjOjCZxMzyuKnWEyYvQqvb5.jpg","genre_ids":[35,10751],"id":11528,"original_language":"en","original_title":"The Sandlot","overview":"In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team, resulting in many adventures.","popularity":16.273,"poster_path":"/dQkE6saKpkBxKsuGG2bU3CXQwMX.jpg","release_date":"1993-04-07","title":"The Sandlot","video":false,"vote_average":7.5,"vote_count":715}'

    var result = movieSearch.movietitle('Sandlot');
    result.then(function(json){
        expect(json).toBe(answer);
    });
    
});

test('test empty', ()=> {
    superagent.get.mockResolvedValue({
        data : [
            {"errors":["query must be provided"]}
        ]
    });
    var answer = '{"errors":["query must be provided"]}';
    var result = movieSearch.movietitle('');
    result.then(function(json){
        expect(json).toBe(answer);
    });
})