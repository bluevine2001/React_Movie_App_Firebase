import { getDb } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const collection_name = "movies";

export const findAll = async () => {
  const docs_refs = await getDocs(collection(getDb(), collection_name));

  const res = [];

  console.log(docs_refs);
  docs_refs.forEach((film) => {
    res.push({ id: film.id, ...film.data() });
  });

  return res;
};

export const findOne = async (id) => {
  const docRef = doc(getDb(), "movies", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const addOne = async (titre, categorie, annee) => {
  try {
    const docRef = await addDoc(collection(getDb(), collection_name), {
      nom: titre,
      catégorie: categorie,
      annee_sortie: annee,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateOne = async (id, titre, categorie, annee) => {
  try {
    const docRef = doc(getDb(), "movies", id);

    await updateDoc(docRef, {
      nom: titre,
      catégorie: categorie,
      annee_sortie: annee,
    });
    console.log("document was updated");
  } catch (e) {
    w;
    console.error("Error updating document: ", e);
  }
};

export const deleteOne = async (titre) => {
  try {
    const docRef = doc(db, "nom", titre);
    await deleteDoc(docRef);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
