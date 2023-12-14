// Uppgift_Skivbolaget\project-root\src\models\User.js

class User {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.playedSongs = [];
    }
  
    playSongs(songs) {
      songs.forEach(song => {
        song.play();
        this.playedSongs.push(song);
      });
    }
  
    displayInfo() {
      console.log(`User: ${this.name}`);
      console.log('Played Songs:');
      this.playedSongs.forEach(song => {
        song.displayInfo();
      });
      console.log('-----------------------');
    }
  }
  
  module.exports = User;
  