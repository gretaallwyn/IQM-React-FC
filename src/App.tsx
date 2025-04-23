import React, {useState} from "react";
import {FSCMoodlets} from "./components/FSCMoodlet";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  const [mode, setMode] = useState<"letter" | "word">("letter");

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>FSC Moodlet Demo</h2>

      <DropdownMenu
        label="Display Mode"
        options={["letter", "word"]}
        onSelect={(value) => setMode(value as "letter" | "word")}
      />

      <FSCMoodlets displayMode={mode} />
    </div>
  );
}

export default App;