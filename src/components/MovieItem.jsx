import { useState } from "react";
import { findOne, updateOne } from "../services/films";

const MovieItem = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newName, setNewName] = useState("");
  const [newCat, setNewCat] = useState("false");
  const [newPoster, setNewPoster] = useState("false");
  const [newYear, setNewYear] = useState("false");
  const [doc, setDoc] = useState([]);

  const openModal = async () => {
    setIsEditable(true);
    const docInfos = await findOne(props.docId);
    console.log(docInfos);
    setDoc(docInfos);
    setNewName(docInfos.nom);
    setNewCat(docInfos.catégorie);
    setNewPoster(docInfos.poster);
    setNewYear(docInfos.annee_sortie);
  };
  const closeModal = () => {
    setIsEditable(false);
  };
  const logDoc = () => {
    console.log(doc);
  };
  const updateDoc = async () => {
    return await updateOne(props.docId, newName, newCat, newPoster, newYear);
  };
  return (
    <div className="card p-3">
      <h1>{props.title}</h1>
      <p>Catégorie : {props.categorie}</p>
      <p>Année : {props.annee}</p>
      <img src={props.poster} />
      <button onClick={openModal}>Modifier</button>
      {isEditable && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal-content">
            <div className="card">
              <h3>Modifier un Film</h3>
              <input
                className="input mb-1"
                type={"text"}
                defaultValue={doc.nom}
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              />
              <input
                className="input mb-1"
                type={"text"}
                defaultValue={doc.catégorie}
                onChange={(e) => {
                  setNewCat(e.target.value);
                }}
              />
              <input
                className="input mb-1"
                type={"text"}
                defaultValue={doc.poster}
                onChange={(e) => {
                  setNewPoster(e.target.value);
                }}
              />
              <input
                className="input mb-1"
                type={"text"}
                defaultValue={doc.annee_sortie}
                onChange={(e) => {
                  setNewYear(e.target.value);
                }}
              />
              <button className="button is-primary" onClick={updateDoc}>
                {" "}
                enregistrer
              </button>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={closeModal}
          ></button>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
