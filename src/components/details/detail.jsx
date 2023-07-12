import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./detail.scss";

function Detail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const dataSelected = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  // console.log(dataSelected);

  return (
    <div className="movie-section">
      {Object.keys(dataSelected).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{dataSelected.Title}</div>
            <div className="movie-rating">
              <span>IMDB Rating :{dataSelected.imdbRating}</span>
              <span>IMDB Votes :{dataSelected.imdbVotes}</span>
              <span>Runtime : {dataSelected.Runtime}</span>
              <span>Year: {dataSelected.Year}</span>
            </div>
            <div className="movie-plot">{dataSelected.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{dataSelected.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{dataSelected.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{dataSelected.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{dataSelected.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{dataSelected.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={dataSelected.Poster} alt={dataSelected.Title} />
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
