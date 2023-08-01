/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import CharactersCard from "../CharactersCard/CharactersCard";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
// https://rickandmortyapi.com/api/character
const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const getCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => setCharacters(response.data.results));
  };

  const searchCharacters = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
      .then((response) => setCharacters(response.data.results));
  };

  useEffect(() => {
    // axios
    //   .get("https://rickandmortyapi.com/api/character")
    //   .then((response) => setCharacters(response.data.results));
    getCharacters();
  }, []);

  useEffect(() => {
    searchCharacters();
  }, [searchValue]);

  // console.log(characters);
  return (
    <div>
      CharactersList
      <SearchBar handleChange={handleChange} searchValue={searchValue} />
      {/* <button onClick={getCharacters}>Call API</button> */}
      {/* <CharactersCard characters={characters} /> */}
      {characters.map((character) => (
        <CharactersCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharactersList;
