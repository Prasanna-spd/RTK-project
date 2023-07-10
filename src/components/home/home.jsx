import React, { useEffect } from "react";
import Listing from "../listing/listing";
import { APIKEY } from "../../server/helper";
import movieAddress from "../../server/movieapi";

function Home() {
  useEffect(() => {
    const movieSearch = "Batman";
    const fetchMovies = async () => {
      try {
        const response = await movieAddress.get(
          `?apikey=${APIKEY}&s=${movieSearch}&type=movie`
        );
        console.log("response from", response);
      } catch (error) {
        console.log("Err", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <Listing />
    </div>
  );
}

export default Home;
