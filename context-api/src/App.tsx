import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";



function App() {

  const {theme, toggle} = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#121212",
        color: theme === "light" ? "#121212" : "#ffffff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.5s ease",
      }}
    >
      <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
}


export default App
