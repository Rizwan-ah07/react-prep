import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Character } from "../types";

const PageDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacter = async() => {
      const response = await fetch("https://hp-api.onrender.com/api/characters");
      const data = await response.json();

      const found = data.find(
        (c: Character) => c.name === decodeURIComponent(id || "")
      )



      if (found) {
        setCharacter(found);
      } else{
        setCharacter(null);
      }
    };

    fetchCharacter();
  }, [id])



  if (character === undefined) {
    return <p>Loading...</p>;
  }

  if (character === null) {
    return (
      <div>
        <p>Character not found 😕</p>
        <button onClick={() => navigate("/page1")}>⬅ Back to list</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate("/page1")}>⬅ Back to list</button>
      <h1>{character.name}</h1>
      <p>Actor: {character.actor}</p>
      <p>House: {character.house}</p>
      <p>Ancestry: {character.ancestry}</p>
      <p>Patronus: {character.patronus}</p>
      {character.image && <img src={character.image} alt={character.name} width="200" />}
    </div>
  );
};
export default PageDetail;
