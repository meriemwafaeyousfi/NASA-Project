import React from "react";
import Rover from "./RoverButton";


/**
 * A component that renders a list of Rover buttons.
 *
 * @param {function} handleRoverClick - A function to be called when a rover is clicked.
 * @param {array} rovers - An array of rover objects.
 * @return {ReactElement}
 */
const RoverList = ({ handleRoverClick, rovers }) => {
  return (
    <div>
      {rovers.map((rover, index) => (
         
        <Rover
          index={index}
          key={rover.id}
          name={rover.name}
          onClick={() => handleRoverClick(rover)}
        />
      ))}
    </div>
  );
};

export default RoverList;
