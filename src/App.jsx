import CharactersList from "./pages/CharactersList/CharactersList";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import NavBar from "./components/NavBar/NavBar";
import CharactersDetails from "./pages/CharactersDetails/CharactersDetails";

function App() {
  return (
    <>
      <NavBar />
      <h1>Rick and Morty App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/characters/:id" element={<CharactersDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
