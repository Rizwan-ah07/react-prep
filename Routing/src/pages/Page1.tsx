import { useContext } from "react";
import { Link } from "react-router-dom";
import { CharacterContext } from "./CharacterContext";

const Page1 = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <div>
      <h1>Harry Potter Characters</h1>

      {characters.length === 0 ? (
        <p>Loading characters...</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.name}>
              <Link to={`/page/${encodeURIComponent(character.name)}`}>
                {character.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page1;
