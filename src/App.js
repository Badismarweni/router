import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './Add';
import MovieDetail from './MovieDetail'; 



function App() {
  const [movies, setMovies] = useState([
    {
      title: "Guardians of the Galaxy",
      description: "It explores Peter Quill's lineage and his relationship with his father, Ego the Living Planet.  The team faces new threats while continuing to navigate their relationships and dynamics.    The film further develops themes of family, friendship, and sacrifice, while maintaining the humor and action of the first installment.",
      posterURL: "https://i.blogs.es/debdc9/1629460557_098553_1629460592_portada_normal/1366_2000.jpeg",
      rating: 6.7,
    },
    {
      title: "Avengers: Endgame",
      description: "Avengers: Endgame is celebrated as a monumental achievement in filmmaking, delivering an epic conclusion to over a decade of interconnected storytelling in the Marvel Cinematic Universe.",
      posterURL: "https://cdn-uploads.gameblog.fr/img/news/487454_65436aa16854a.jpg",
      rating: 6.4,
    },
    {
      title: "The Godfather",
      description: "Overall,The Godfather is a timeless masterpiece that continues to captivate audiences with its rich storytelling, complex characters, and profound exploration of the human condition.",
      posterURL: "https://bgr.com/wp-content/uploads/2019/03/avengers-endgame-sign-2.jpg?quality=82&strip=all&w=1020&h=574&crop=1",
      rating: 9.2,
    },
    {
      title: "The Avengers",
      description: "Overall,The Avengers is celebrated as a groundbreaking achievement in the superhero genre, bringing together beloved characters from different comic book properties into a cohesive and thrilling cinematic experience.",
      posterURL: "https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/111981892",
      rating: 6.4,
    },
    {
      title: "Avengers: Infinity War",
      description: "Overall,Avengers: Infinity War is celebrated as a monumental achievement in filmmaking, delivering a thrilling and emotionally resonant superhero epic that left audiences eagerly anticipating the next chapter in the Marvel Cinematic Universe.",
      posterURL: "https://images.bauerhosting.com/legacy/media/61f3/e8d0/05e8/5530/559b/af43/infinity-war-poster-crop.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
      rating: 6.3,
    },
  ]);
  const [movieFiltered, setMovieFilter] = useState(movies);
  const filterMovie = ({ title, rate }) => {
    const filtered = movies.filter(
      (movie) =>
        (movie.title.toLowerCase().includes(title.toLowerCase())) && (movie.rating >= rate)
    );
    setMovieFilter(filtered);
  };
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setMovieFilter([...movies, newMovie]);
  };
  
  return (
    <div className="App">
    <h1>Movies</h1>
    <Routes>
          <Route path="/" element={<div><Filter onFilter={filterMovie} />
            <MovieList movies={movieFiltered} />
              <Add addMovie={addMovie}/>
           </div>}/>
          <Route path="/movie/:id" element={MovieDetail} />
    </Routes>
    </div>
  );
}

export default App;
