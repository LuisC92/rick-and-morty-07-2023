/* eslint-disable react/prop-types */
import React from "react";

const CharactersCard = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default CharactersCard;
