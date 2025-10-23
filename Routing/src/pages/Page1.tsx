import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Character } from "../types";

const Page1 = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() =>{
      const fetchCharacters = async () => {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const data = await response.json();
        setCharacters(data.slice(0, 10));
      }

      fetchCharacters();
    }, []);

  return (
    <div>
      <h1>Harry Potter Characters</h1>
        <ul>
          {characters.map((character) => (
            <li key={character.name}>
              <Link to={`/page/${encodeURIComponent(character.name)}`}>
                {character.name}
              </Link>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Page1;
