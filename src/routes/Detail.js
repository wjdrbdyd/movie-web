import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>{movie.title} </h1>
          <p>
            <span>평점: {movie.rating} </span>
            <span>상영시간:{movie.runtime} 분</span>
          </p>
          <p>
            {movie.year}{" "}
            {movie.genres && movie.genres.map((g) => <span>{g} </span>)}
            {`🤍${movie.like_count}`}
          </p>
          <p>{movie.description_intro}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
