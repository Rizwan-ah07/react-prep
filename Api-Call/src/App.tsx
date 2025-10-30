import { useEffect, useState } from "react";
import "./App.css";

interface Verse {
  text: string;
  number: number;
  numberInSurah: number;
  surah: {
    number: number;
    englishName: string;
    name: string; 
  };
}

function App() {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [arabicVerse, setArabicVerse] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const fetchVerse = async () => {
    setLoading(true);

    // 1️⃣ Get random English verse
    const response = await fetch(
      `https://api.alquran.cloud/v1/ayah/random/en.asad?nocache=${Math.random()}`
    );
    const data = await response.json();
    const englishVerse: Verse = data.data;

    setVerse(englishVerse);

    // 2️⃣ Fetch Arabic using the same verse number
    const arabicResponse = await fetch(
      `https://api.alquran.cloud/v1/ayah/${englishVerse.number}/ar`
    );
    const arabicData = await arabicResponse.json();
    setArabicVerse(arabicData.data.text);

    setLoading(false);
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        verse && (
          <div>
            <h2
              style={{
                fontSize: "1.7em",
                direction: "rtl",
                fontFamily: "Scheherazade New, serif",
                marginBottom: "0.5em",
              }}
            >
              {arabicVerse}
            </h2>

            <p style={{ fontSize: "1.1em", marginBottom: "0.5em" }}>{verse.text}</p>

            <p>
              Surah {verse.surah.name} ({verse.surah.englishName}) — Surah #
              {verse.surah.number}, Ayah {verse.numberInSurah}
            </p>

            <button onClick={fetchVerse}>New Verse</button>
          </div>
        )
      )}
    </div>
  );
}

export default App;
