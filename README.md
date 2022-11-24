## Concept

<h1>musiQue</h1>

![MusiQue_black](https://user-images.githubusercontent.com/107939073/203590809-b285f344-cc4b-4444-ba75-dcd87fe1c149.png)

**MusiQue presents you a new opportunity to explore the world of music.**
**Find out more about your favorite genres, discover new songs, and check the recommendations by our team of curators!**

![Spotify_Logo_RGB_Green](https://user-images.githubusercontent.com/107939073/203594223-5675c21a-81d6-41fc-91ff-b879e5743b4e.png)

This second project aimed to provide a challenge focused on **React.js** usage, emphasizing API implementation. From music lovers to music lovers, our team decided to go through the official Spotify API. 

According to selected genres, displayed on a button container (that we aim to add more in the future), you can discover the most songs (weekly updated) and trending artists for that genre, which provides an excellent chance to discover new music! Also, with a single buttons, you can trigger a preview song and display a pause/play method. Also, popular section can be shuffled with a button click (which pauses any song being previewed) to find out even more tracks! Once in the mobile version, the trending artist's container has more recommendations that are "unhidden" with a click of a button.

Our **musiQue** website provides a space where you can discover the trending songs from the top World chart (weekly updated) and top tracks from specific countries. Both have a play button on the pieces that include a preview song, so in case you want to fully listen to that track, you can use the dedicated button to redirect yourself to the **Spotify** artists/song page. In the trending charts and world music sections, you can shuffle the contents, so you'll always get new information by simply clicking a button. 

The curated part of the project is mainly connected to the recommended section, where our team highlights one or more songs that stand out, whether because of the lyrics, melody, or just some state of mind from that specific track. There is also a preview player to match the text with the song in question.

![logo192](https://user-images.githubusercontent.com/107939073/203571724-9a5eb1e8-24b2-4668-8f90-6ce850a7cafb.png)

Besides the regular tasks of building a website, with all the intricate shenanigans (especially **CSS** related), the Spotify API proved an enjoyable but challenging journey that we are all proud of.

The website structure relied on dividing the essential containers into separate .jsx components. The main sections are "called" on the main **App.JSX** file in an intrinsic method to save code and present a "clean" workflow. The buttons are called through this component workflow method. The genres pages are a single file that displays the information according to a prop/destructuring method. 

The first challenge from the **Spotify API** was acquiring an access token, bearing in mind the useAuth obligations from this API. Through the access token, it's possible to "fetch" the necessary info to populate our website with tasty music and all its information, such as artists' names, followers, albums, track names, track previews, and external URLs.

![Rectangle3](https://user-images.githubusercontent.com/107939073/203572933-18e7b234-5ff7-4b90-a6ee-ba55d8f9ab0d.jpeg)

For future implementations, we want to add a user-to-user interaction, such as a comment section and a login, so that the users can customize the info displayed through the API. Random recommendations according to user behavior, including preferred sections, artists' detailed information, and music news, are all ideas we have already discussed. 
There are also aesthetic details we still want to solve, but so far, we are pretty satisfied with the result :)

Contributors: 

João Mota: https://github.com/joaoefmota

Isamu Schlothauer: https://github.com/isaschlothauer

Iryna Kukuruza: https://github.com/Kukuruzka1

Diogo Guilherme: https://github.com/DiogoG8

Elif Gömleksiz: https://github.com/elifPeriza

