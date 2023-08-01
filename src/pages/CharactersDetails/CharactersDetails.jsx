import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharactersDetails = () => {
  const [character, setCharacter] = useState();

  const { id } = useParams();

  // console.log(id)

  const getSingleCharacter = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => setCharacter(response.data));
  };

  useEffect(() => {
    getSingleCharacter();
  }, []);

  return (
    <div>
      {character ? (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </div>
      ) : <p>Loading Characters....</p>}
    </div>
  );
};

export default CharactersDetails;
