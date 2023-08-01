/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CharactersCard = ({ character }) => {
  return (
    <Link to={`/characters/${character.id}`}>
      <div className="card">
        <div>
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default CharactersCard;
