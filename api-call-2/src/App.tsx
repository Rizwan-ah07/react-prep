
import { useEffect, useState } from 'react'
import './App.css'

interface Verse{
  text: string;
  number: number;
  surah: {
    name: string;
    number: number;
    englishName: string;
  }
}
function App() {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchVerse = async() => {

    setLoading(true);
    const response = await fetch('https://api.alquran.cloud/v1/ayah/random/en.asad');
    const data = await response.json();
    const enVerse: Verse = data.data;

    setVerse(enVerse);

    setLoading(false);
  }
  useEffect(() => {
    fetchVerse()
  }, [])

  return (
    <div>
      <h1>Random Quran Verse</h1>
      {loading ? <p>Loading...</p> : verse && <p>{verse.text}</p>}
    </div>
  );
}


export default App
