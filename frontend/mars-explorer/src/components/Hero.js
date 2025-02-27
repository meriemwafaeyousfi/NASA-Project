import "primeflex/primeflex.css";
import "../App.css";

/**
 * A Hero component that displays a heading and a short descriptive paragraph.
 * The content describes Mars in a poetic way, inviting users to explore the
 * planet.
 */
function Hero() {
  return (
    <div className="pl-6">
      <h1 className="title">EXPLORE MARS</h1>
      <p className="description">
        Mars, the enchanting Red Planet, gleams like a fiery gem in the night
        sky. Its coppery landscapes, sculpted by ancient winds and towering
        volcanoes, tell tales of mystery and adventure. With its whispering pink
        skies and shimmering polar ice, Mars invites dreamers to explore its
        alien beauty and unlock the secrets hidden beneath its crimson dust. 

      </p>
    </div>
  );
}

export default Hero;
