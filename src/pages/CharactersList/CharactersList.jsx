/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import CharactersCard from "../../components/CharactersCard/CharactersCard";
import SearchBar from "../../components/SearchBar/SearchBar";
// import axios from "axios";
import CharactersContext from "../../contexts/CharactersContext";
// https://rickandmortyapi.com/api/character
const CharactersList = () => {
  // const [characters, setCharacters] = useState([]);
  const { characters, searchValue, setSearchValue } =
    useContext(CharactersContext);

  // const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  // const getCharacters = () => {
  //   axios
  //     .get("https://rickandmortyapi.com/api/character")
  //     .then((response) => setCharacters(response.data.results));
  // };

  // const searchCharacters = () => {
  //   axios
  //     .get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
  //     .then((response) => setCharacters(response.data.results));
  // };

  // useEffect(() => {
  //   // axios
  //   //   .get("https://rickandmortyapi.com/api/character")
  //   //   .then((response) => setCharacters(response.data.results));
  //   getCharacters();
  // }, []);

  // useEffect(() => {
  //   searchCharacters();
  // }, [searchValue]);

  // console.log(characters);
  return (
    <div>
      <div className="header-container">
      <h1>Characters List</h1>
        <SearchBar handleChange={handleChange} searchValue={searchValue} />
      </div>
      {/* <button onClick={getCharacters}>Call API</button> */}
      {/* <CharactersCard characters={characters} /> */}
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center mt-5 mb-5">
        {characters ? (
          characters.map((character) => (
            <CharactersCard key={character.id} character={character} />
          ))
        ) : (
          <h1>..Loading..</h1>
        )}
      </div>
    </div>
  );
};

export default CharactersList;
