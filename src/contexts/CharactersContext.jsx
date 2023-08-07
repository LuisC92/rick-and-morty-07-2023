/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";


const CharactersContext = createContext()

export default CharactersContext


export function CharactersContextProvider({children}){
    
    const [characters, setCharacters] = useState()

    const [searchValue, setSearchValue] = useState("");

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

      useEffect(()=>{
        getCharacters()
      },[])

      useEffect(() => {
        searchCharacters();
      }, [searchValue]);


    return(
        <CharactersContext.Provider value={{characters, searchValue, setSearchValue }}>
            {children}
        </CharactersContext.Provider>
    )
}