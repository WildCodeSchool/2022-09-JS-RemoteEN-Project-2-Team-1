/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from "react";
import TopGenres from "../components/TopGenres";
import SpotifyLogoButton from "../components/SpotifyLogoButton";
import Footer from "../components/footer";
import Player from "../components/Player";

import styles from "./genres.module.css";

const CLIENT_ID = "d6b767f2085441d5bd7a2c4b59b009a6";
const CLIENT_SECRET = "3db89dc2644044a3baa93a83ca6f7f6c";

// const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

function Rock() {
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useState("");
  const [popular, SetPopular] = useState("");

  useEffect(() => {
    // API Access Token
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        // eslint-disable-next-line prefer-template
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch(TOKEN_ENDPOINT, authParameters)
      .then((res) => res.json())
      // eslint-disable-next-line no-restricted-syntax
      .then((info) => setAccessToken(info.access_token))
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (accessToken == null) return;
    fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DWZryfp6NSvtz", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => SetPopular(result));
  }, [accessToken]);

  /*
  useEffect(() => {
    fetch("https://api.spotify.com/v1/recommendations?seed_genres=rock&limit=5&target_popularity=80", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((info) => console.log(info));
  }, [accessToken]);
*/

  /*
  useEffect(() => {
    fetch(
      "https://api.spotify.com/v1/search?type=track&q=year:2022%20genre:rock&limit=5",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    )
      .then((res) => res.json())
      .then((info) => console.log(info));
  }, [accessToken]);
  */

  return (
    <div className={styles.Rock}>
      <button type="button" onClick={() => {}}>
        Get Playlists
      </button>

      <header className={styles.headerGenres}>
        <section className={styles.genreMain}>
          <TopGenres />
          <div className={styles.genreTextAndImg}>
            <div className={styles.genreText}>
              <h1>Rock</h1>
              <p className={styles.pText}>
                A fan favourite in musical genres, rock originated in the
                40’s/50’s in North America, the land of “rock n’ roll”! Broadly
                mentioning, rock branches in blues, folk, R&B, country, metal,
                punk, and even fuses with jazz, funk or electronic music, just
                to mention a few. However, we can find a generalized common
                ground, with songs that bear rhythmic drums, a tenderizing
                electric guitar, a sturdy bass and a charismatic lead singer.
              </p>
            </div>
            <div className={styles.rockImg}>
              <img
                alt="electric-guitar"
                src="src\assets\genres-imgs\electricGuitar.png"
                width={350}
              />
            </div>
          </div>
        </section>
      </header>
      <section className={styles.mostPopular}>
        <h2>Most Popular</h2>
        {popular.tracks != null && popular.tracks.items != null ? (
          <>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[0].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[0].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[0].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <SpotifyLogoButton />
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[1].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[1].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[1].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <SpotifyLogoButton />
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[2].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[2].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[2].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <SpotifyLogoButton />
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[3].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[3].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[3].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <SpotifyLogoButton />
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[4].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[4].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[4].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <SpotifyLogoButton />
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[5].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[5].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[5].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <SpotifyLogoButton />
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[2].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[2].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[2].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <SpotifyLogoButton />
            </div>
            <button
              className={`${styles.shuffle} ${styles.pButtons}`}
              type="button"
              onClick={() => {
                // eslint-disable-next-line no-restricted-syntax
                console.log("I was clicked");
              }}
            >
              <img
                alt="spotify-icon-shuffle"
                // eslint-disable-next-line no-octal-escape
                src="src\assets\spotify-icons-logos\icons\01_RGB\02_PNG\Spotify_Icon_RGB_White.png"
                width={20}
              />
              SHUFFLE
            </button>
          </>
        ) : (
          <h2>Tracks loading...</h2>
        )}
      </section>
      <section className={styles.trending}>
        <h1>Trending Artists</h1>
        <div className={styles.trendingArtistsContainer}>
          <div className={styles.trendingArtistsDiv}>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\artistImage2.PNG"
            />
            <h2>Jacky Huang</h2>
            <img
              src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png"
              alt="spotify-icon"
              className={styles.spotifyIcon}
              width={28}
            />
          </div>
          <div className={styles.trendingArtistsDiv}>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\artistImage2.PNG"
            />
            <h2>Jacky Huang</h2>
            <img
              src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png"
              alt="spotify-icon"
              className={styles.spotifyIcon}
              width={28}
            />
          </div>
        </div>
      </section>
      <Footer />
      <Player accessToken={accessToken} />
    </div>
  );
}
export default Rock;
