

var songs = [
             "songs/Blank - Disfigure.mp3", 
             "songs/Cloud 9 - Itro & Tobu.mp3", 
             "songs/Cradles - Sub Urban.mp3", 
             "songs/Fade - Alan Walker.mp3", 
             "songs/Fearless pt.II - Lost Sky (feat. Chris Linton).mp3", 
             "songs/Feel Good - Syn Cole.mp3", 
             "songs/Force - Alan Walker.mp3", 
             "songs/Heroes Tonight - Janji (feat. Johnning).mp3", 
             "songs/Hope - Tobu.mp3", 
             "songs/Invincible - DEAF KEV.mp3", 
             "songs/Invisible - Julius Dreisig & Zeus X Crona.mp3", 
             "songs/Mortals - Warriyo (feat. Laura Brehm).mp3", 
             "songs/My Heart - Different Heaven & EH!DE.mp3", 
             "songs/On & On - Cartoon (feat. Daniel Levi).mp3", 
             "songs/Shine - Spektrem.mp3", 
             "songs/Sky High - Elektronomia.mp3", 
             "songs/Spectre - Alan Walker.mp3", 
             "songs/Superhero - Unknown Brain (feat. Chris Linton).mp3", 
             "songs/Symbolism - Electro-Light.mp3", 
             "songs/Why We Lose - Cartoon (feat. Coleman Trapp).mp3"
             ];


var songName = document.querySelector(".current_song_name");
var artistName = document.querySelector(".current_artist_name");
var fillBar = document.querySelector(".fill");
var seekBar = document.querySelector(".seek_bar");

var current_Time = document.querySelector(".current_time");
var total_Time = document.querySelector(".total_time");

var song = new Audio();
var CurrentSong = 0;

var playPause = document.querySelector(".play_pause_btn");
var playPauseImg = document.querySelector(".play_pause_btn img");



/* ********
~~~~~~~~~~
Song Play or Pause
~~~~~~~~~~
******** */


window.onload = playSong;



function playSong(){
    
    song.src = songs[CurrentSong];
    
    songsTitle = songs[CurrentSong].substring(6, songs[CurrentSong].indexOf(' -'));
    songsArtist = songs[CurrentSong].substring(songs[CurrentSong].indexOf('- '), songs[CurrentSong].indexOf('.mp3'));
    songsArtistTrimed = songsArtist.substring(2);
    
    songName.textContent = (songsTitle);
    artistName.textContent = (songsArtistTrimed);
    
    song.play();
    
}


function playOrPause(){
    
    if(song.paused){
        song.play();
        playPauseImg.setAttribute("src", "icons/pause.png");
    }
    else{
        song.pause();
        playPauseImg.setAttribute("src", "icons/play.png");
    }
    
}



/* ********
~~~~~~~~~~
Seek Bar and Timing updating
~~~~~~~~~~
******** */

song.addEventListener("timeupdate", () => {
    
    var position = song.currentTime / song.duration;
    
    
    fillBar.style.width = position * 100 + "%";
    
    convertTime(Math.round(song.currentTime));
    totalTimeFunc(Math.round(song.duration));
    
    if(song.ended){
        next();
    }
});


function convertTime(seconds){
    
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    current_Time.textContent = min + ":" + sec;
    
}


function totalTimeFunc(seconds){
    
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    total_Time.textContent = min + ":" + sec;
    
}


/* ********
~~~~~~~~~~
Go to Next and Previous Song Buttons
~~~~~~~~~~
******** */

function pausePng(){
    playPauseImg.setAttribute("src", "icons/pause.png");
}


function next(){
    
    CurrentSong++;
    if (CurrentSong > songs.length-1){
        CurrentSong = 0;
    }
    playSong();
    pausePng();
    
}


function prev(){
    
    CurrentSong--;
    if (CurrentSong < 0){
        CurrentSong = songs.length-1;
    }
    playSong();
    pausePng();
    
}



/* ********
~~~~~~~~~~
Tap on Seek Bar to Jump to that time
~~~~~~~~~~
******** */


seekBar.addEventListener("click", seek);

function seek(e){
    
    const seekTime = (e.offsetX / seekBar.offsetWidth) * song.duration;
    song.currentTime = seekTime;
    
    console.log(seekTime);
    console.log(song.currentTime);
    
}



/* ********
~~~~~~~~~~
Click on Song Name to Play
~~~~~~~~~~
******** */

const songName01 = document.querySelector(".song_01");
const songName02 = document.querySelector(".song_02");
const songName03 = document.querySelector(".song_03");
const songName04 = document.querySelector(".song_04");
const songName05 = document.querySelector(".song_05");

const songName06 = document.querySelector(".song_06");
const songName07 = document.querySelector(".song_07");
const songName08 = document.querySelector(".song_08");
const songName09 = document.querySelector(".song_09");
const songName10 = document.querySelector(".song_10");


const songName11 = document.querySelector(".song_11");
const songName12 = document.querySelector(".song_12");
const songName13 = document.querySelector(".song_13");
const songName14 = document.querySelector(".song_14");
const songName15 = document.querySelector(".song_15");

const songName16 = document.querySelector(".song_16");
const songName17 = document.querySelector(".song_17");
const songName18 = document.querySelector(".song_18");
const songName19 = document.querySelector(".song_19");
const songName20 = document.querySelector(".song_20");


var songNameArray = [
                     songName01,
                     songName02,
                     songName03,
                     songName04,
                     songName05,
                     songName06,
                     songName07,
                     songName08,
                     songName09,
                     songName10,
                     songName11,
                     songName12,
                     songName13,
                     songName14,
                     songName15,
                     songName16,
                     songName17,
                     songName18,
                     songName19,
                     songName20,
                     ];


for(let i = 0; i < songNameArray.length; i++){
    
    songNameArray[i].addEventListener("click", () => {
        
        if(CurrentSong !== i){
            
            CurrentSong = i;
            playSong();
            pausePng();
            
        }
        
    });
    
}



/* ********
~~~~~~~~~~
Modal
~~~~~~~~~~
******** */


var modelBtn = document.querySelector("#help_btn");
var modal = document.querySelector("#help_modal");
var closeBtn = document.querySelector(".close_btn span");

modelBtn.onclick = function() {
    modal.style.display = "block";
};

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};