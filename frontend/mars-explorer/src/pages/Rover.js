import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "primeflex/primeflex.css";
import "../App.css";
import Background from "../components/Background";
import RoverForm from "../components/RoverForm";
import RoverGallery from "../components/RoverGallery";
import Navbar from "../components/Navbar";
import { cameras } from "../data/data";

/**
 * Rover component that displays a page for selecting a Mars rover, camera, and sol (Martian day).
 * It shows details about the selected rover and a gallery of photos taken by the rover.
 * Uses the `RoverForm` component to handle selection changes and the `RoverGallery` to display images.
 * 
 * This component retrieves the initial rover selection from the router location state and manages
 * the state for the selected rover, camera, and sol number.
 * 
 * @returns {JSX.Element} A component structure that includes a navbar, rover selection form,
 *          and a gallery of images captured by the selected Mars rover.
 */

function Rover() {
  const location = useLocation();
  const initialRover = location.state;
  const [selectedRover, setSelectedRover] = useState(initialRover);
  const [selectedCamera, setSelectedCamera] = useState(cameras[0].value);
  const [selectedSol, setSelectedSol] = useState(50);

  return (
    <div className="flex align-items-center grid h-screen w-full mt-4">
      <Background />
      <Navbar />

      <div className="flex flex-column align-items-center justify-content-center col-12  lg:col-6 h-full">
        <h1 className="rover-title text-center">
          {selectedRover?.name || "Select Rover"}
        </h1>
        <p className="rover-description p-2 mr-4 ml-4 text-center">
          {selectedRover?.description || ""}. <br />
          <br />
          Explore stunning photos captured by the{" "}
          {selectedRover?.name || "selected"} Mars rover by choosing the number
          of days (SOL) since its landing and selecting the camera type.
        </p>

        <RoverForm
          selectedRover={selectedRover}
          onRoverChange={setSelectedRover}
          selectedCamera={selectedCamera}
          onCameraChange={setSelectedCamera}
          selectedSol={selectedSol}
          onSolChange={setSelectedSol}
        />
      </div>

      <div className="flex align-items-center col-12 lg:col-6 ">
        <RoverGallery
          sol={100}
          cameraName="MAST"
          selectedRover={selectedRover}
          selectedCamera={selectedCamera}
          selectedSol={selectedSol}
        />
      </div>
    </div>
  );
}

export default Rover;
