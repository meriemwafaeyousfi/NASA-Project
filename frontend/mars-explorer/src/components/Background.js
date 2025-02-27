import "primeflex/primeflex.css";
import "../App.css";

/**
 * Background component that provides a styled container with star and character elements.
 * It centers its children both vertically and horizontally on the screen.
 *
 * @param {Object} props - The properties for the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the container.
 * @returns {JSX.Element} A styled div containing stars and character elements.
 */

function Background({children}) {
  return (
        <div
          className="flex align-items-center justify-content-center h-screen absolute z-0"
        >
         {children}
          <div id="stars" className="stars"></div>
          <div id="stars2" className="stars"></div>
          <div id="stars3" className="stars"></div>
          <div id="character" className="character"></div>
       
    </div> 
  );
}

export default Background;
