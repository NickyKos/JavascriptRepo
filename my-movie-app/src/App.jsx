import React from "react";
import Movie from "./Movie";

const App = () => {
  const movies = [
    { title: "Inception", director: "Christopher Nolan", year: 2010 },
    { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", year: 1999 },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014 },
  ];

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          director={movie.director}
          year={movie.year}
        />
      ))}
    </div>
  );
};

export default App;


