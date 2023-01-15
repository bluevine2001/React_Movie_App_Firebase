import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMovie />} />
      </Routes>
    </>
  );
}

export default App;
