/* eslint-disable react/prop-types */

const CharactersCard = ({ character }) => {
  return (
    <div>
        <div>
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
        </div>
    </div>
  );
};

export default CharactersCard;
