/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ (() => {

eval("\r\nvar songsNameFolder = [\"Dekhte Dekhte.mp3\", \"Aajao meri tamanna.mp3\", \"Aaj Ro Len De.mp3\", \"ALLA KE BANDE.mp3\", \"All Black.mp3\"];\r\nvar songName = document.getElementById(\"songName\");\r\nvar songSlider = document.getElementById(\"songSlider\");\r\n//for durartion of songs\r\nvar currentDuration = document.getElementById(\"currentDuration\");\r\nvar totalDuration = document.getElementById(\"totalDuration\");\r\nvar volumeSlider = document.getElementById(\"volumeSlider\");\r\nvar nextSongName = document.getElementById(\"nextSongName\");\r\nvar song = new Audio();\r\nvar currentSong = 0;\r\nfunction loadAllSongs() {\r\n    song.src = \"songs/\" + songsNameFolder[currentSong];\r\n    songName.textContent = songsNameFolder[currentSong];\r\n    if (currentSong < songsNameFolder.length - 1)\r\n        nextSongName.innerHTML = \"<b>Next Song: </b>\" + songsNameFolder[currentSong + 1];\r\n    else\r\n        nextSongName.innerHTML = \"<b>Last Song playing.. </b>\";\r\n    song.volume = Number(volumeSlider.value);\r\n    song.play();\r\n    setTimeout(showDuration, 1000);\r\n}\r\nsetInterval(updateSliderOfSong, 1000);\r\nfunction updateSliderOfSong() {\r\n    var currTime = Math.round(song.currentTime);\r\n    songSlider.value = String(currTime);\r\n    currentDuration.textContent = convertTime(currTime);\r\n}\r\nfunction convertTime(secs) {\r\n    var min = String(Math.floor(secs / 60));\r\n    var sec = String(secs % 60);\r\n    min = (Number(min) < 10) ? \"0\" + (min) : min;\r\n    sec = (Number(sec) < 10) ? \"0\" + sec : sec;\r\n    return (min + \":\" + sec);\r\n}\r\nfunction showDuration() {\r\n    var dura = String(Math.floor(song.duration));\r\n    songSlider.setAttribute(\"max\", dura);\r\n    totalDuration.textContent = convertTime(Number(dura));\r\n}\r\n//play pause songs\r\nvar playPauseButton = document.getElementById(\"playPause\");\r\nvar img = document.getElementById(\"playPause\");\r\nplayPauseButton.addEventListener(\"click\", function () {\r\n    if (song.paused) {\r\n        song.play();\r\n        img.src = \"images/pause.png\";\r\n        loadAllSongs();\r\n    }\r\n    else {\r\n        song.pause();\r\n        img.src = \"images/playpause.png\";\r\n    }\r\n});\r\n//next button\r\nvar nextPlay = document.getElementById(\"nextPlay\");\r\nnextPlay.addEventListener(\"click\", function (e) {\r\n    if (currentSong < songsNameFolder.length - 1) {\r\n        currentSong = currentSong + 1 % songsNameFolder.length;\r\n        img.src = \"images/pause.png\";\r\n        loadAllSongs();\r\n    }\r\n    else {\r\n        nextSongName.innerHTML = \"<b> Last Song Playing....</b>\";\r\n        console.log(\"this was last Song\");\r\n    }\r\n});\r\n//on clicking prev button\r\nvar prevPlay = document.getElementById(\"prevPlay\");\r\nprevPlay.addEventListener(\"click\", function (e) {\r\n    currentSong = currentSong - 1;\r\n    if (currentSong < 0) {\r\n        img.src = \"images/pause.png\";\r\n        currentSong = 0;\r\n        console.log(\"First Song Playing....No song is Available\");\r\n    }\r\n    else {\r\n        currentSong = currentSong;\r\n    }\r\n    loadAllSongs();\r\n});\r\nsongSlider.addEventListener(\"click\", function (e) {\r\n    song.currentTime = Number(songSlider.value);\r\n    currentDuration.textContent = convertTime(song.currentTime);\r\n});\r\nvar volumeManage = document.getElementById(\"volumeSlider\");\r\nvolumeManage.addEventListener(\"click\", function () {\r\n    song.volume = Number(volumeSlider.value);\r\n});\r\nvar muteUnmutebutton = document.getElementById(\"muteUnmute\");\r\nmuteUnmutebutton.addEventListener(\"click\", function (e) {\r\n    if (volumeSlider.value != String(0)) {\r\n        volumeSlider.value = String(0);\r\n        song.volume = Number(volumeSlider.value);\r\n    }\r\n    else {\r\n        volumeSlider.value = String(0.5);\r\n        song.volume = Number(volumeSlider.value);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://audioplayer/./ts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./ts/index.ts"]();
/******/ 	
/******/ })()
;