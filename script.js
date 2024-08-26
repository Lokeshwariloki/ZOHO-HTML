const songs = [
    { name: "Andha Arabic Kadaloram", src: "songs/song1.mp3" },
    { name: "Idhazhin oru oram", src: "songs/song2.mp3" },
    { name: "Hayyoda", src: "songs/song3.mp3" },
    { name: "Hey Inga Paaru", src: "songs/song4.mp3" },
    { name: "Neeyum Naanum Sernthe Sellum", src: "songs/song5.mp3" },
    { name: "Nenjorama Oru Kadhal", src: "songs/song6.mp3" },
    { name: "Kannazhaga", src: "songs/song7.mp3" }
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const songList = document.getElementById("songList");

// Load the first song on page load
loadSong(songs[currentSongIndex]);

// Function to load a song
function loadSong(song) {
    audio.src = song.src;
    audio.play();
}

// Display the list of songs with play buttons
songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.classList.add("song-item");

    const songName = document.createElement("span");
    songName.classList.add("song-name");
    songName.textContent = song.name;

    const playButton = document.createElement("button");
    playButton.classList.add("play-button");
    playButton.textContent = "Play";
    playButton.addEventListener("click", () => {
        currentSongIndex = index;
        loadSong(song);
    });

    li.appendChild(songName);
    li.appendChild(playButton);
    songList.appendChild(li);
});

