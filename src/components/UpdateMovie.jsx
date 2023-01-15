import {
  findAll,
  findOne,
  addOne,
  updateOne,
  deleteOne,
} from "../services/films";
const UpdateMovie = (props) => {
  console.log(props);
  // récupérer l'id du document firestore, rechercher le doc, récuperer ses valeurs et les afficher
  const testhandler = async (props) => {
    console.log(props.docId);
    return findOne(props.docId);
  };
  return (
    <div className="editModal">
      <button onClick={testhandler}>click me</button>
    </div>
  );
};

export default UpdateMovie;
