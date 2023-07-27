import CharactersCard from "../CharactersCard/CharactersCard";
import axios from "axios"
// https://rickandmortyapi.com/api/character
const CharactersList = () => {

    const getCharacters = () =>{
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => console.log(response.data.results))
    }

  return (
    <div>
      CharactersList
      <button onClick={getCharacters}>Call API</button>
      <CharactersCard />
    </div>
  );
};

export default CharactersList;
