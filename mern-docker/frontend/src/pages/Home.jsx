import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/movie`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="container">
      <h1 className="heading">Explore</h1>
      <p className="sub_heading">List of movies to watch</p>

      <ul className="movie_list">
        {movie.length > 0 &&
          movie.map((movie) => (
            <li key={movie._id} className="movie_card">
              <div className="movie_info">
                <h4>{movie.title}</h4>
                <p>{movie.description}</p>
              </div>

              <div className="movie_link">
                <Link to={movie.link} target="_blank" className="link">
                  Watch
                </Link>
              </div>
            </li>
          ))}
      </ul>

      {movie.length === 0 && (
        <p className="no_result">Oops, No movies available</p>
      )}
    </main>
  );
}

export default Home;
