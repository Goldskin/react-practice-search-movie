import React from 'react';
import ReactDOM from 'react-dom';
import MovieResume from './MovieResume';

it('renders without crashing', () => {
  const movie = {
    "Title": "Rogue One: A Star Wars Story",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "16 Dec 2016",
    "Runtime": "133 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Gareth Edwards",
    "Writer": "Chris Weitz (screenplay by), Tony Gilroy (screenplay by), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)",
    "Actors": "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
    "Plot": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 23 wins & 78 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
    "Ratings": [{
      "Source": "Internet Movie Database",
      "Value": "7.8/10"
    }, {
      "Source": "Rotten Tomatoes",
      "Value": "85%"
    }, {
      "Source": "Metacritic",
      "Value": "65/100"
    }],
    "Metascore": "65",
    "imdbRating": "7.8",
    "imdbVotes": "434,900",
    "imdbID": "tt3748528",
    "Type": "movie",
    "DVD": "04 Apr 2017",
    "BoxOffice": "&pound;532,171,696",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.starwars.com/",
    "Response": "True"
  }
  const div = document.createElement('div');
  ReactDOM.render( <MovieResume movie={movie} />, div);
  ReactDOM.unmountComponentAtNode(div);
});