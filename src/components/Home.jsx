import { useEffect, useReducer } from "react";
import { findAll } from "../services/films";
import MovieItem from "./MovieItem";

const Home = () => {
  const myReducer = (state, action) => {
    switch (action.type) {
      case "ADD_MOVIES":
        console.log("action: ", action);
        return [...action.payload];
      default:
        console.log("default state: ", state);
        return state;
    }
  };
  const [stateMovieList, dispatchMovieList] = useReducer(myReducer, []);

  async function GetAllMovieHandler() {
    const res = await findAll();
    console.log(res);
    dispatchMovieList({ type: "ADD_MOVIES", payload: res });
    dispatchMovieList({ type: "default" });
  }

  useEffect(() => {
    GetAllMovieHandler();
  }, []);
  return (
    <>
      {stateMovieList.length > 0 &&
        stateMovieList.map((film) => (
          <MovieItem
            key={film.id}
            title={film.nom}
            categorie={film.catégorie}
            poster={film.poster}
            annee={film.annee_sortie}
            docId={film.id}
          />
        ))}
    </>
  );
};

export default Home;
