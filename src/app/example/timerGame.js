// timerGame.js
'use strict';

function timerGame(callback, timeout) {
  timeout = timeout || 5000
  console.log('Ready....go!');
  setTimeout(() => {
    console.log('Times up -- stop!');
    callback && callback();
  }, timeout);
}

module.exports = timerGame;