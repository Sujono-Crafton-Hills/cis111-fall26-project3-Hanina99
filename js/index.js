
// Array containing popular King Gnu songs
const songs = [
   {
      name: "Hakujitsu",
      image: "images/hakujitsu.jpg"
   },
   {
      name: "SPECIALZ",
      image: "images/specialz.png"
   },
   {
      name: "Ichizu",
      image: "images/ichizu.jpg"
   },
   {
      name: "Teenager Forever",
      image: "images/teenager_forever.jpg"
   },
   {
      name: "Prayer X",
      image: "images/prayer_x.jpg"
   },
   {
      name: "Sakayume",
      image: "images/ichizu.jpg"
   },
   {
      name: "Hitman",
      image: "images/hitman.png"
   },
   {
      name: "Sanmon Shosetsu",
      image: "images/sanmon_shosetsu.jpg"
   },
   {
      name: "Umbrella",
      image: "images/umbrella.jpg"
   },
   {
      name: "McDonald Romance",
      image: "images/mcdonald_romance.jpg"
   },
   {
      name: "Don't Stop the Clocks",
      image: "images/hitman.png"
   },
   {
      name: "Flash!!!",
      image: "images/flash.jpg"
   },
   {
      name: "BOY",
      image: "images/boy.jpg"
   }
];

// Get the HTML elements we need
const recommendButton = document.getElementById("recommend-button");
const recommendation = document.getElementById("song-recommendation");
const songList = document.getElementById("song-list");
const albumCover = document.getElementById("album-cover"); 

// Function that displays all songs on the webpage
function displaySongs() {

   // Loop through the songs array
   for (let i = 0; i < songs.length; i++) {
      const listItem = document.createElement("li");

      listItem.textContent = songs[i].name;

      songList.appendChild(listItem);
   }
}

// Function that randomly recommends a song
function recommendSong() {
   const randomIndex = Math.floor(Math.random() * songs.length);
   const selectedSong = songs[randomIndex];

   if (selectedSong) {
      recommendation.textContent = selectedSong.name;

      albumCover.src = selectedSong.image;
      albumCover.alt = "Album cover for " + selectedSong.name;
      albumCover.style.display = "block";
   } else {
      recommendation.textContent = "No song found.";
      albumCover.style.display = "none";
   }
}

// Display the song list when the page loads
displaySongs();

// Listen for a button click
recommendButton.addEventListener("click", recommendSong);

