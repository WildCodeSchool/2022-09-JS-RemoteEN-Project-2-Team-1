import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import genreImgRock from "./assets/genres-imgs/electricGuitar.png";
import genreImgJazz from "./assets/genres-imgs/3.jpg";
import genreImgReggae from "./assets/genres-imgs/2.jpg";
import genreImgMetal from "./assets/genres-imgs/metal.jpg";
import genreImgPunk from "./assets/genres-imgs/punk.jpg";
import genreImgCountry from "./assets/genres-imgs/5.jpg";
import genreImgClassic from "./assets/genres-imgs/classic1.jpg";
import genreImgIndie from "./assets/genres-imgs/indie.jpg";
import genreImgHipHop from "./assets/genres-imgs/1.jpg";
import genreImgRnB from "./assets/genres-imgs/rb.jpg";
import genreImgBlues from "./assets/genres-imgs/blues.jpg";
import genreImgElectro from "./assets/genres-imgs/4.jpg";

import WorldMusic from "./components/WorldMusic";
import Header from "./components/header";
import GenreSection from "./components/genre";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";
import Recommended from "./components/Recommended";
import TrendingArtists from "./components/trendingArtists";

import GenrePage from "./pages/GenrePage";

const genreInfo = [
  {
    title: "ROCK",
    mainText:
      "A fan favourite in musical genres, rock originated in the 40’s/50’s in North America, the land of “rock n’ roll”! Broadly mentioning, rock branches in blues, folk, R&B, country, metal, punk, and even fuses with jazz, funk or electronic music, just to mention a few. However, we can find a generalized common ground, with songs that bear rhythmic drums, a tenderizing electric guitar, a sturdy bass and a charismatic lead singer.",
    path: "/rock/*",
    image: genreImgRock,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DWZryfp6NSvtz",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:rock",
    alt: "electric guitar",
    id: "1",
  },
  {
    title: "JAZZ",
    mainText:
      "This musical art has a heavy emphasis in the black communities from the South of the United States, dated from the early 1900’s. Jazz is full of polyrhythms and syncopation, with a special mention to the swing ragtime that’s so typical here. It’s not uncommon to find improvisation, with the famous legendary solos with the trumpet, drums, saxophone, or guitar, that eternalize names. It fuses with many other genres, like jazz-rock, although we find some cultural variations like the Latin jazz, from countries like Cuba (mixing with salsa) and Brazil (with the likes of bossa nova).",
    path: "/jazz/*",
    image: genreImgJazz,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DX7YCknf2jT6s",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:jazz",
    alt: "trumpet player",
    id: "2",
  },
  {
    title: "REGGAE",
    mainText:
      "The origins are in Jamaica, late 60’s, and it’s all about music as it is almost a lifestyle, with the likes of the Rastafari. The lyrics are about the society, with often incorporate a recurrence to a political commentary. In a reggae song we find an offbeat rhythm, specially accompanied with a vivid synergy from a drum and bass. It incorporates elements from blues, jazz and even folk! But one thing is most likely present: the chill, slower paced tempo, that transcended frontiers..",
    path: "/reggae/*",
    image: genreImgReggae,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DX7GUbRHVEX42",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:reggae",
    alt: "battery playing",
    id: "3",
  },
  {
    title: "METAL",
    mainText:
      "Short for heavy-metal, can be considered a subgenre to rock thanks to it’s highly distorted guitar, that helps to produce an explosive sound. It appeared in the late 60’s, popularized by massive cult legions, attacked by these “aggressive” styling. Metal evolved to more other forms of play, ironically spawning subgenres in the likes of trash metal or death metal, but niche styles also appear such as speed metal, industrial metal, nu-metal (some funk and hip hop), and folk metal.",
    path: "/metal/*",
    image: genreImgMetal,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DX5J7FIl4q56G",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:metal",
    alt: "black guitar",
    id: "4",
  },
  {
    title: "PUNK",
    mainText:
      "Heavily rooted in the rock genre, found its way in music through what’s called the “progressive rock” played by an increased movement of garage band. It has a crude sound, usually thanks to low-cost equipment, that fits perfectly with the general way of playing with an anti-mainstream mannerism, also present in the lyrics. This deconstructive genre, ironically, hit mainstream with softer forms, in the likes of folk punk and pop punk, for example.",
    path: "/punk/*",
    image: genreImgPunk,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DX0KpeLFwA3tO",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:punk",
    alt: "jumping guy",
    id: "5",
  },
  {
    title: "COUNTRY",
    mainText:
      "This is also a broad genre, but essentially, we can connect it to the music produced with a countryside vibe, highlighting a hard string guitar and emphasising voice, depicting the hardship of life. It is an influence for many styles, such as blues, rock and the indie universe, specially for the way it fuses instruments and genres. Nowadays, it has found a way into the pop scenario.",
    path: "/country/*",
    image: genreImgCountry,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DX1lVhptIYRda",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:country",
    alt: "acoutstic guitar",
    id: "6",
  },
  {
    title: "CLASSICAL",
    mainText:
      "To define a “classical” genre, we can attribute the musical production that began a bit more than one thousand years old till our present times, produced mainly in the Western hemisphere. It’s a heavily structured music, for the so called “classic” instruments, such as piano, violin, acoustic guitar, French horn, transversal flute, counter bass, between many others. Artists produce musical pieces for solo concerts and/or orchestral arrangements.",
    path: "/classic/*",
    image: genreImgClassic,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DWV0gynK7G6pD",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:classical",
    alt: "stage",
    id: "7",
  },
  {
    title: "INDIE",
    mainText:
      "The name comes from “independent”, which is the best way to describe this genre: not bound to a type, for the cheer simplicity that is producing music. Started in the 80’s, with a kind of a rebel attitude facing the music industry, artists were responsible for all the process that is conceptualize music. It’s a nomenclature connected greatly with the folk scenario, but also rock, and even dance. As such, it’s common to find bands/artists on a solo journey, with no record label, which seems to be the differentiative factor, even nowadays.",
    path: "/indie/*",
    image: genreImgIndie,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DXdbXrPNafg9d",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:indie",
    alt: "guitar playing",
    id: "8",
  },
  {
    title: "HIP-HOP",
    mainText:
      "Started in the 70’s, in the streets of New York, typically when DJ’s sampled songs in discos for audiences to dance. It’s often connected to “rap” (short for rhythm and poetry), developed mainly by the afro/latino communities. This genre is famous for the fast rhythmic way of versing, that usually accompanies an also highly rhythmic bit. It is deeply connected with other artistic movements, such as breakdance and graffiti.",
    path: "/hiphop/*",
    image: genreImgHipHop,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DX4SrOBCjlfVi",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:hip-pop",
    alt: "microphone",
    id: "9",
  },
  {
    title: "R&B",
    mainText:
      "The genre states for “Rhythm & Blues”, although since it appeared, in the 1940’s, that it mutated completely. Started from an heavy influence from the Afro American community, it had influences over the past years from rock, jazz, blues, gospel, soul music and funk! Nowadays, it is a term connoted to the pop scenario, for global artists with tens of millions of listeners..",
    path: "/r&b/*",
    image: genreImgRnB,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DX4SBhb3fqCJd",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:r&b",
    alt: "singer",
    id: "10",
  },
  {
    title: "ELECTRONIC",
    mainText:
      "Can be simply described as any music with an heavy emphasis in electronic instruments, although it also has a saying in how the music sounds as well. Nowadays, pretty much the majority of genres depends on electric instruments, so here electronic music is related with the focus of the record. In terms of scope, can differentiate from experimental music (such as the musique concrete), to even dance music (like house). Here, a computer can be considered an electronic instrument!",
    path: "/electro/*",
    image: genreImgElectro,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DXaPK7HyVedIT",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:electronic",
    alt: "DJ set",
    id: "11",
  },
  {
    title: "BLUES",
    mainText:
      "The name comes from the “blue notes”, which are the third, fifth and seventh degrees in a major scale, that have a minor tonality that fits the mood of this musical genres. The origins come from chants and praise songs from former African slaves. It evolved to a more westernised music style, popularized in the 60’s/70’s, that served as an inspiration to jazz, R&M and rock. The lyrics often tell a complete story, about life, from the greatest of things to the bad things. It’s a conner stone in music.",
    path: "/blues/*",
    image: genreImgBlues,
    link: "https://api.spotify.com/v1/playlists/37i9dQZF1DXb3MZdETGqKB",
    Tlink:
      "https://api.spotify.com/v1/search?type=artist&q=year:2022%20genre:blues",
    alt: "battery set",
    id: "12",
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={
            <div>
              <Header />
              <GenreSection />
              <TrendingArtists />
              <Recommended />
              <WorldMusic />
              <AboutUs />
              <Footer />
            </div>
          }
        />
        {genreInfo.map((info) => (
          <Route
            element={
              <GenrePage
                title={info.title}
                mainText={info.mainText}
                image={info.image}
                link={info.link}
                Tlink={info.Tlink}
                alt={info.alt}
              />
            }
            path={info.path}
            key={info.id}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
