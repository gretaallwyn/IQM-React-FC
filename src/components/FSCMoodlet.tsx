import React, { useState } from "react";
import "./FSCMoodlet.css";

type MoodletState = "notRequired" | "required" | "current" | "completed";

interface MoodletProps {
  label: "F" | "S" | "C";
  wordLabel: string;
  displayMode?: "letter" | "word";
}

const getNextLeftClickState = (current: MoodletState): MoodletState => {
  switch (current) {
    case "required":
      return "current";
    case "current":
      return "completed";
    case "completed":
      return "current";
    default:
      return current;
  }
};

const Moodlet: React.FC<MoodletProps> = ({ label, wordLabel, displayMode = "letter" }) => {
  const [state, setState] = useState<MoodletState>("required");

  const handleLeftClick = () => {
    if (state === "notRequired") return;
    setState(getNextLeftClickState(state));
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (state === "notRequired") {
      setState("required");
    } else {
      setState("notRequired");
    }
  };

  const display = displayMode === "letter" ? label : wordLabel;

  return (
    <div
      className={`moodlet ${state}`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      title={`State: ${state}`}
    >
      {display}
    </div>
  );
};

export const FSCMoodlets: React.FC<{ displayMode?: "letter" | "word" }> = ({ displayMode = "letter" }) => {
  return (
    <div className="fsc-moodlet-container">
      <Moodlet label="F" wordLabel="Fuelling" displayMode={displayMode} />
      <Moodlet label="S" wordLabel="Servicing" displayMode={displayMode} />
      <Moodlet label="C" wordLabel="Cleaning" displayMode={displayMode} />
    </div>
  );
};
