import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import Card from "../card/card";
import "./listing.scss";

function Listing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <Card key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <Card key={index} data={show} />;
      })
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  // console.log(movies);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h3>Movies</h3>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h3>Shows</h3>
        <div className="show-container">{renderShows}</div>
      </div>
    </div>
  );
}

export default Listing;
