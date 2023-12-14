//Uppgift_Skivbolaget\project-root\src\models\Song.js

class Song {
    constructor(id, title, playCount) {
        this.id = id;
        this.title = title;
        this.playCount = playCount;
    }

    play() {
        this.playCount++;
    }

    getPlayCount() {
        return this.playCount;
    }

    displayInfo() {
        console.log(`Song: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
        console.log('-----------------------');
    }
}

module.exports = Song;
