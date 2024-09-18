// https://vike.dev/data

//cross fetch allows for compatability between nodejs and browsers
import fetch from "cross-fetch";
import type { PageContextServer } from "vike/types";
import type { MovieDetails } from "../types.js";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  const response = await fetch(
    `https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`,
  );
  //using the 'as' keyword insures that typescript ignores the extra fields that may be present in the data.
  let movie = (await response.json()) as MovieDetails;
  // We remove data we don't need because the data is passed to
  // the client; we should minimize what is sent over the network.
  movie = minimize(movie);
  return movie;
};

function minimize(movie: MovieDetails): MovieDetails {
  const { id, title, release_date, director, producer } = movie;
  const minimizedMovie = { id, title, release_date, director, producer };
  return minimizedMovie;
}
