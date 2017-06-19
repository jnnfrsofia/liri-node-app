//load required node modules

var Twitter = require('twitter')
var spotify = require('spotify')
var request = require('request')
var fs = require('fs')

//load twitter keys

var keys = require('./keys.js')
var twitterKeys = keys.twitterKeys

//var for liri command

var userInput = process.argv[2]

//var for which song or movie the user enters as their parameter

var songOrMovieArray = process.argv.slice(3);
var songOrMovie = songOrMovieArray.join(" ");
console.log(songOrMovie);

//FUNCTIONS FOR POSSIBLE LIRI COMMANDS

//retrieve the last 20 tweets from my twitter feed when the user enters 'my-tweets'
function myTweets() {

    //initialize the new twitter client

    var client = new Twitter(twitterKeys);

    //set twitter handle to mine
    var params = { screen_name: 'riggins_rigs', count: 20 };

    //retrieve last 20 tweets

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            var data = []; //empty array to hold data
            for (var i = 0; i < tweets.length; i++) {
                data.push({
                    'created at: ': tweets[i].created_at,
                    'Tweets: ': tweets[i].text,
                });
            }
            console.log(data);

        }


    });

}

//display the following info when the user entrs 'spotify-this-song'
//song name
//artist
//album
//preview URL

function spotifySong(song) {






}


//display the movie info when the user enters 'movie-this'

function movieInfo(movie) {
    // if no movie is provided, LIRI defaults to 'Mr. Nobody'
    if (movie === undefined) {
    movie = 'Mr Nobody';
  }

  else {
  	movie = songOrMovie;
  }

  var urlHit = "http://www.omdbapi.com/?t=" + movie+ "&y=&plot=full&tomatoes=true&r=json";

  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = [];
      var jsonData = JSON.parse(body);

      data.push({
      'Title: ' : jsonData.Title,
      'Year: ' : jsonData.Year,
      'Rated: ' : jsonData.Rated,
      'IMDB Rating: ' : jsonData.imdbRating,
      'Country: ' : jsonData.Country,
      'Language: ' : jsonData.Language,
      'Plot: ' : jsonData.Plot,
      'Actors: ' : jsonData.Actors,
      'Rotten Tomatoes Rating: ' : jsonData.tomatoRating,
      'Rotton Tomatoes URL: ' : jsonData.tomatoURL,
  });
      console.log(data);
}
    });

}


//display the 'random' song that is in the random.txt file

function doWhatItSays() {

    // display the text in the random.txt file
    fs.readFile('./random.txt', 'utf8', function(error, data) {
       console.log(data)
        });
   
}




//logic for if, else if, and else statements that will determine 
//which LIRI command the user entered and run the corresponding
//function

if (userInput === 'my-tweets') {
    myTweets()
} else if (userInput === 'spotify-this-song') {
    spotifySong(songOrMovie)
} else if (userInput === 'movie-this') {
    movieInfo(songOrMovie)
} else if (userInput === 'do-what-it-says') {
    doWhatItSays()
}
