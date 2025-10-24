import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Character } from "../types";

interface CharacterContextType {
  characters: Character[];
}

export const CharacterContext = createContext<CharacterContextType>({
  characters: [],
});

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch("https://hp-api.onrender.com/api/characters");
      const data = await response.json();
      setCharacters(data.slice(0, 20)); 
    };

    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters }}>
      {children}
    </CharacterContext.Provider>
  );
};
