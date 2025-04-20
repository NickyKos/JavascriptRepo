import React, { useState } from "react";

const Movie = ({ title, director, year }) => {
  const [watched, setWatched] = useState(false);

  const toggleWatched = () => {
    setWatched(!watched);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Status:</strong> {watched ? "Watched" : "Not Watched"}</p>
      <button onClick={toggleWatched}>Toggle Watched</button>
    </div>
  );
};

export default Movie;
