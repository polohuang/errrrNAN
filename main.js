let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');
document.getElementsByClassName("playpause-track")[0].addEventListener("click", playpauseTrack);
document.getElementsByClassName("next-track")[0].addEventListener("click", nextTrack);
document.getElementsByClassName("prev-track")[0].addEventListener("click", prevTrack);
document.getElementsByClassName("seek_slider")[0].addEventListener("click", seekTo);
document.getElementsByClassName("volume_slider")[0].addEventListener("click", setVolume);

function randomBgColor() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  randomBgColor();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

window.onload = function() {
  // Shuffle track list
  track_list.sort(() => Math.random() - 0.5);
  // Pick top 30 songs
  track_list = track_list.slice(0, 30);
  // Load the first track in the tracklist
  loadTrack(track_index);
}

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

let track_list = [
    {
        "artist": "Alec Benjamin",
        "name": "Let Me Down Slowly",
        "path": "tracks/Alec Benjamin-Let Me Down Slowly.mp3"
    },
    {
        "artist": "Alok, Martin Jensen, Jason Derulo",
        "name": "Don't Cry For Me",
        "path": "tracks/Alok, Martin Jensen, Jason Derulo-Don't Cry For Me.mp3"
    },
    {
        "artist": "Anne Marie",
        "name": "To Be Young",
        "path": "tracks/Anne Marie-To Be Young.mp3"
    },
    {
        "artist": "Anne-Marie & James Arthur",
        "name": "Rewrite The Stars",
        "path": "tracks/Anne-Marie & James Arthur-Rewrite The Stars.mp3"
    },
    {
        "artist": "Anne-Marie",
        "name": "2002",
        "path": "tracks/Anne-Marie-2002.mp3"
    },
    {
        "artist": "Anne-Marie",
        "name": "BIRTHDAY",
        "path": "tracks/Anne-Marie-BIRTHDAY.mp3"
    },
    {
        "artist": "Anne-Marie",
        "name": "Ciao Adios",
        "path": "tracks/Anne-Marie-Ciao Adios.mp3"
    },
    {
        "artist": "Ariana Grande",
        "name": "Positions",
        "path": "tracks/Ariana Grande-Positions.mp3"
    },
    {
        "artist": "Ariana Grande",
        "name": "Test drive",
        "path": "tracks/Ariana Grande-Test drive.mp3"
    },
    {
        "artist": "Ava Max",
        "name": "Kings & Queens",
        "path": "tracks/Ava Max-Kings & Queens.mp3"
    },
    {
        "artist": "Ava Max",
        "name": "My Head & My Heart",
        "path": "tracks/Ava Max-My Head & My Heart.mp3"
    },
    {
        "artist": "Becky Hill, Sigala",
        "name": "Heaven On My Mind",
        "path": "tracks/Becky Hill, Sigala-Heaven On My Mind.mp3"
    },
    {
        "artist": "BTS",
        "name": "Dynamite",
        "path": "tracks/BTS-Dynamite.mp3"
    },
    {
        "artist": "Charlie Puth",
        "name": "Attention",
        "path": "tracks/Charlie Puth-Attention.mp3"
    },
    {
        "artist": "Charlie Puth",
        "name": "Girlfriend",
        "path": "tracks/Charlie Puth-Girlfriend.mp3"
    },
    {
        "artist": "Charlie Puth",
        "name": "How Long",
        "path": "tracks/Charlie Puth-How Long.mp3"
    },
    {
        "artist": "Charlie Puth",
        "name": "One Call Away",
        "path": "tracks/Charlie Puth-One Call Away.mp3"
    },
    {
        "artist": "Charlie Puth",
        "name": "The Way I Am",
        "path": "tracks/Charlie Puth-The Way I Am.mp3"
    },
    {
        "artist": "Charlie Puth",
        "name": "We Don't Talk Anymore",
        "path": "tracks/Charlie Puth-We Don't Talk Anymore.mp3"
    },
    {
        "artist": "Cian Ducrot",
        "name": "Not Usually Like This",
        "path": "tracks/Cian Ducrot-Not Usually Like This.mp3"
    },
    {
        "artist": "Clean Bandit and Mabel",
        "name": "Tick Tock",
        "path": "tracks/Clean Bandit and Mabel-Tick Tock.mp3"
    },
    {
        "artist": "Clean Bandit",
        "name": "Rockabye",
        "path": "tracks/Clean Bandit-Rockabye.mp3"
    },
    {
        "artist": "Clean Bandit",
        "name": "Solo",
        "path": "tracks/Clean Bandit-Solo.mp3"
    },
    {
        "artist": "Dua Lipa",
        "name": "Hallucinate",
        "path": "tracks/Dua Lipa-Hallucinate.mp3"
    },
    {
        "artist": "Ed Sheeran & Justin Bieber",
        "name": "I Don't Care",
        "path": "tracks/Ed Sheeran & Justin Bieber-I Don't Care.mp3"
    },
    {
        "artist": "Ed Sheeran",
        "name": "Perfect",
        "path": "tracks/Ed Sheeran-Perfect.mp3"
    },
    {
        "artist": "Ed Sheeran",
        "name": "South of the Border",
        "path": "tracks/Ed Sheeran-South of the Border.mp3"
    },
    {
        "artist": "Ed Sheeran",
        "name": "Shape of You",
        "path": "tracks/Ed Sheeran-Shape of You.mp3"
    },
    {
        "artist": "Ed Sheeran",
        "name": "Photograph",
        "path": "tracks/Ed Sheeran-Photograph.mp3"
    },
    {
        "artist": "Ed Sheeran",
        "name": "Galway Girl",
        "path": "tracks/Ed Sheeran-Galway Girl.mp3"
    },
    {
        "artist": "Ed Sheeran",
        "name": "I See Fire",
        "path": "tracks/Ed Sheeran-I See Fire.mp3"
    },
    {
        "artist": "Ed Sheeran",
        "name": "Thinking Out Load",
        "path": "tracks/Ed Sheeran-Thinking Out Load.mp3"
    },
    {
        "artist": "Ed Sheeran",
        "name": "Supermarket Flowers",
        "path": "tracks/Ed Sheeran-Supermarket Flowers.mp3"
    },
    {
        "artist": "Ella Henderson",
        "name": "Take Care Of You",
        "path": "tracks/Ella Henderson-Take Care Of You.mp3"
    },
    {
        "artist": "HRVY",
        "name": "Me Because Of You",
        "path": "tracks/HRVY-Me Because Of You.mp3"
    },
    {
        "artist": "Jason Derulo",
        "name": "Savage Love",
        "path": "tracks/Jason Derulo-Savage Love.mp3"
    },
    {
        "artist": "JC Stewart",
        "name": "Break My Heart",
        "path": "tracks/JC Stewart-Break My Heart.mp3"
    },
    {
        "artist": "Joel Corry x MNEK",
        "name": "Head & Heart",
        "path": "tracks/Joel Corry x MNEK-Head & Heart.mp3"
    },
    {
        "artist": "Justin Bieber",
        "name": "Anyone",
        "path": "tracks/Justin Bieber-Anyone.mp3"
    },
    {
        "artist": "Katy Perry",
        "name": "Smile",
        "path": "tracks/Katy Perry-Smile.mp3"
    },
    {
        "artist": "Lady Gaga, Ariana Grande",
        "name": "Rain On Me",
        "path": "tracks/Lady Gaga, Ariana Grande-Rain On Me.mp3"
    },
    {
        "artist": "Lauv",
        "name": "fxxk, i'm lonely",
        "path": "tracks/Lauv-fxxk, i'm lonely.mp3"
    },
    {
        "artist": "Little Mix",
        "name": "Break Up Song",
        "path": "tracks/Little Mix-Break Up Song.mp3"
    },
    {
        "artist": "Little Mix",
        "name": "Holiday",
        "path": "tracks/Little Mix-Holiday.mp3"
    },
    {
        "artist": "Little Mix",
        "name": "Sweet Melody",
        "path": "tracks/Little Mix-Sweet Melody.mp3"
    },
    {
        "artist": "Maroon 5",
        "name": "Memories",
        "path": "tracks/Maroon 5-Memories.mp3"
    },
    {
        "artist": "Maroon 5",
        "name": "Nobody's Love",
        "path": "tracks/Maroon 5-Nobody's Love.mp3"
    },
    {
        "artist": "Marshmello & Anne-Marie",
        "name": "FRIENDS",
        "path": "tracks/Marshmello & Anne-Marie-FRIENDS.mp3"
    },
    {
        "artist": "Miley Cyrus",
        "name": "Midnight Sky",
        "path": "tracks/Miley Cyrus-Midnight Sky.mp3"
    },
    {
        "artist": "Olivia Rodrigo",
        "name": "drivers license",
        "path": "tracks/Olivia Rodrigo-drivers license.mp3"
    },
    {
        "artist": "Sam Smith",
        "name": "My Oasis",
        "path": "tracks/Sam Smith-My Oasis.mp3"
    },
    {
        "artist": "Shawn Mendes & Hailee Steinfeld",
        "name": "Stitches",
        "path": "tracks/Shawn Mendes & Hailee Steinfeld-Stitches.mp3"
    },
    {
        "artist": "Shawn Mendes",
        "name": "There's Nothing Holding Me Back",
        "path": "tracks/Shawn Mendes-There's Nothing Holding Me Back.mp3"
    },
    {
        "artist": "Shawn Mendes, Camila Cabello",
        "name": "Señorita",
        "path": "tracks/Shawn Mendes, Camila Cabello-Señorita.mp3"
    },
    {
        "artist": "Shawn Mendes, Camila Cabello",
        "name": "Señorita",
        "path": "tracks/Shawn Mendes, Camila Cabello-Señorita.mp3"
    },
    {
        "artist": "Skylar Grey",
        "name": "Everything I need",
        "path": "tracks/Skylar Grey-Everything I need.mp3"
    },
    {
        "artist": "Tate McRae",
        "name": "Slower",
        "path": "tracks/Tate McRae-Slower.mp3"
    },
    {
        "artist": "Taylor Swift",
        "name": "Cardigan",
        "path": "tracks/Taylor Swift-Cardigan.mp3"
    },
    {
        "artist": "The Weeknd",
        "name": "Save Your Tears",
        "path": "tracks/The Weeknd-Save Your Tears.mp3"
    },
    {
        "artist": "Zedd & Jasmine Thompson",
        "name": "Funny",
        "path": "tracks/Zedd & Jasmine Thompson-Funny.mp3"
    }
];
