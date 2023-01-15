// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
  if (!db) {
    const firebaseConfig = {
      apiKey: "AIzaSyCj6muHZFPhU-Z3LVvnUIe8CPdMZ5iuAr0",
      authDomain: "test-9b7cc.firebaseapp.com",
      projectId: "test-9b7cc",
      storageBucket: "test-9b7cc.appspot.com",
      messagingSenderId: "792627555360",
      appId: "1:792627555360:web:5fefe2eb34bdef7d166045",
      measurementId: "G-09ZJSRJQB2",
    };

    const app = initializeApp(firebaseConfig);

    db = getFirestore(app);
  }
  return db;
};
