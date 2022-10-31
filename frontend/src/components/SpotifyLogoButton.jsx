import React from "react";
import "./spotifyButton.css";

function SpotifyLogoButton() {
  return (
    <button type="button" className="spotifyIconBigger">
      <img
        alt="spotify-logo-button"
        // eslint-disable-next-line no-octal-escape
        src="src\assets\spotify-icons-logos\logos\01_RGB\02_PNG\Spotify_Logo_RGB_White.png"
        width={100}
      />
    </button>
  );
}
export default SpotifyLogoButton;
