import {useState} from "react"
import CharactersCard from "../CharactersCard/CharactersCard";
import axios from "axios"
// https://rickandmortyapi.com/api/character
const CharactersList = () => {

    const [characters, setCharacters] = useState([])

    const getCharacters = () =>{
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => setCharacters(response.data.results))
    }

    console.log(characters)
  return (
    <div>
      CharactersList
      <button onClick={getCharacters}>Call API</button>
      <CharactersCard characters={characters} />
    </div>
  );
};

export default CharactersList;
