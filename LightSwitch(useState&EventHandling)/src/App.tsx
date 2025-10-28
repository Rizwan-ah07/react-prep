import { useState } from "react";

const LightSwitch = () => {

  const [lightOn, setLightOn] = useState(true);

  const toggleLight = () => {
    setLightOn ((prev) => !prev);
  };

  return (
    <div>
      <h1>{lightOn ? "Saad is gay" : "he's straight? nah he gay afffffff"} </h1>
      <button onClick={toggleLight}>Toggle light</button>
    </div>
  )
};

function App() {
  return (
    <div>
      <LightSwitch />
    </div>
  );
}

export default App;
