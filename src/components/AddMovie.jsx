import { useState } from "react";
import { addOne } from "../services/films";
//import styles from "./AddMovie.module.css";
const AddMovie = () => {
  const [addMovieTitle, setAddMovieTitle] = useState("");
  const [addMovieCat, setAddMovieCat] = useState();
  const [addMovieYear, setAddMovieYear] = useState();

  async function addMovieHandler() {
    const year = new Date(addMovieYear).getFullYear();
    await addOne(addMovieTitle, addMovieCat, year);
  }

  return (
    <div className="card mt-1 p-3 is-justify-content-center">
      <input
        className="input is-link mb-2"
        type="text"
        placeholder="Titre du film"
        onChange={(e) => setAddMovieTitle(e.target.value)}
      />
      <input
        className="input is-link mb-2"
        type="text"
        placeholder="Catégorie du film"
        onChange={(e) => setAddMovieCat(e.target.value)}
      />
      <input
        className="input is-link mb-2"
        type="text"
        placeholder="URL Poster du Film"
        onChange={(e) => setAddMovieYear(e.target.value)}
      />
      <input
        className="input is-link mb-2"
        type="date"
        placeholder="Année de sortie du film"
        onChange={(e) => setAddMovieYear(e.target.value)}
      />
      <button className="button is-link" onClick={addMovieHandler}>
        Ajouter un film
      </button>
    </div>
  );
};

export default AddMovie;
