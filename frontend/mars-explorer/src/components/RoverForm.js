import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import "primeflex/primeflex.css";
import { rovers, cameras, solRanges } from "../data/data";

/**
 * RoverForm component for selecting a Mars rover, camera, and sol (Martian day).
 * 
 * This component allows users to:
 * - Select a Mars rover from the available options.
 * - Adjust the sol (day) on Mars using a slider based on the selected rover's sol range.
 * - Choose a camera type for capturing images.
 * 
 * Props:
 * @param {Object} selectedRover - The rover currently selected.
 * @param {function} onRoverChange - Callback function to handle rover selection changes.
 * @param {string} selectedCamera - The camera type currently selected.
 * @param {function} onCameraChange - Callback function to handle camera selection changes.
 * @param {number} selectedSol - The sol (day) currently selected.
 * @param {function} onSolChange - Callback function to handle sol changes.
 * 
 * @returns {JSX.Element} A form allowing for rover, sol, and camera selection.
 */

export default function RoverForm({
  selectedRover,
  onRoverChange,
  selectedCamera,
  onCameraChange,
  selectedSol,
  onSolChange
}) {
  const [minSol, setMinSol] = useState(selectedRover ?solRanges[selectedRover.name.toLowerCase()].min : 0);
  const [maxSol, setMaxSol] = useState(selectedRover ?solRanges[selectedRover.name.toLowerCase()].max: 100)


  const justifyTemplate = (option) => {
    return <span className="p-2">{option.value}</span>;
  };

  const handleSelection = (rover) => {
    onRoverChange(rover);
    setMinSol(solRanges[rover.name.toLowerCase()].min);
    setMaxSol(solRanges[rover.name.toLowerCase()].max);
    onSolChange(Math.floor(solRanges[rover.name.toLowerCase()].max / 3)); 
  };

  return (
    <div className="formgrid grid">
      {/* Rover Selection */}
      <div className="flex flex-row justify-content-center w-full gap-4 p-2">
        {rovers.map((r, index) => (
          <Button
            key={index}
            label={r.name}
            icon={`pi ${
              r.name === "Curiosity"
                ? "pi-globe"
                : r.name === "Opportunity"
                ? "pi-sun"
                : "pi-star"
            }`}
            className={`p-button-rounded ${
              selectedRover && selectedRover.name === r.name
                ? "p-button-warning"
                : "p-button-outlined"
            }`}
            onClick={() => handleSelection(r)}
            style={{ padding: "1rem", minWidth: "130px", borderRadius: "30px" }}
          />
        ))}
      </div>

      {/* SOL Selection */}
      <div className="flex flex-row align-items-center justify-content-center p-2 w-full">
        <h3 className="w-full text-center w-2">SOL - {selectedSol}</h3>
        <Slider
          className="w-8"
          min={minSol} max={maxSol}
          value={selectedSol}
          onSlideEnd={(e) => onSolChange(e.value)}
        />
      </div>

      {/* Camera Selection */}
      <div className="flex flex-column w-full p-2">
       <h3 className="w-full text-center mb-4">
       Choose the camera type
        </h3>  
        <SelectButton
          className="field flex flex-wrap justify-content-center align-items-center"
          value={selectedCamera}
          onChange={(e) => {
            onCameraChange(e.value);
          }}
          itemTemplate={justifyTemplate}
          optionLabel="value"
          options={cameras}
        />
      </div>
    </div>
  );
}
