import TasbeehProvider from "./TasbeehContext";
import TasbeehCounter from "./TasbeehCounter";
import { useContext } from "react";
import { TasbeehContext } from "./TasbeehContext";
import './App.css';

const TasbeehTotal = () => {
  const { total } = useContext(TasbeehContext);
  return (
    <h2 style={{ marginBottom: "20px" }}>
      🕌 Total Tasbeeh Count: <span style={{ color: "#4CAF50" }}>{total}</span>
    </h2>
  );
};

function App() {
  return (
    <TasbeehProvider>
      <div style={{ textAlign: "center" }}>
        <h1>Tasbeeh Tracker</h1>
        <TasbeehTotal />
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <TasbeehCounter name="SubhanAllah" />
          <TasbeehCounter name="Alhamdulillah" />
          <TasbeehCounter name="Allahu Akbar" />
        </div>
      </div>
    </TasbeehProvider>
  );
}

export default App
