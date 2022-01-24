import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
const Movie = ({ id, coverImg, title, year, summary, genres }) => {
  const [more, setMore] = useState(false);
  const moreClick = () => setMore((prev) => !prev);
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>
          {summary.length > 235 && !more ? (
            <>
              {summary.slice(0, 235)}
              <span className={styles.sm__12} onClick={moreClick}>
                {"...more"}
              </span>
            </>
          ) : more ? (
            <>
              {summary} &nbsp;
              <span
                className={[styles.sm__12, styles.fc__red].join(" ")}
                onClick={moreClick}
              >
                closed
              </span>
            </>
          ) : (
            summary
          )}
        </p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
