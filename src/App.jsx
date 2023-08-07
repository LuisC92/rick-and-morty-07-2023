import CharactersList from "./pages/CharactersList/CharactersList";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import NavBar from "./components/NavBar/NavBar";
import CharactersDetails from "./pages/CharactersDetails/CharactersDetails";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      {/* <h1>Rick and Morty App</h1> */}
      <div className="container-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters-list" element={<CharactersList />} />
          <Route path="/characters/:id" element={<CharactersDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
