# MovieViewer

To run the project in movieviewer (the backend)  run "node service.js"
In movie-viewer-client run "npm start"

# Project specs
This project uses the Hapi framework on the backend. To make the api calls it use a library called superagent. And finally its tested using jest. 
The front end of the project was created using create-react-app which provide basic styling and  out line.  Because its currently only single functionality it is all contained in the App.js file. 

For the back end all the code written by me lives in the app and test directories as well as service.js 

# About
This project takes the name of a movie written in a search bar and dynamically calls The Movie DB (https://www.themoviedb.org/) to query for that movie. I grab the official title, image link, and release date and display that back to the user. 