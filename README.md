# liri-node-app

## Overview

Liri is a languaga interpretation app, similar to Siri. Instead of interpreting speech, Liri interprets language. In this app, the user will be able to pull the latest tweets from the account I created for this app, any song from spotify, any movie (from OMDB via Request), and can also choose the wildcard 'do-what-it-says' option--all through the command line.

## Installation

To install the application, first clone this repository:

	https://github.com/jnnfrsofia/liri-node-app.git

To install these npm packages run these commands one at a time.

	npm install twitter

	npm install spotify

	npm install request


## Run

Commands to run LIRI

Type any of these commands into your command line to retrieve data:

	node liri.js my-tweets

	node liri.js spotify-this-song (song name here)

	node liri.js movie-this (movie name here)

	node liri.js do-what-it-says
