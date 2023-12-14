//Uppgift_Skivbolaget\project-root\src\models\Album.js

class Album {
    constructor(id, title, artist, genre) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.songs = [];
    }

    displayInfo() {
        console.log(`Album: ${this.title}`);
        console.log(`Artist: ${this.artist.name}`);
        console.log(`Genre: ${this.genre.name}`);
        console.log('Songs:');
        this.songs.forEach(song => {
            song.displayInfo();
        });
        console.log('-----------------------');
    }

    addSong(song) {
        this.songs.push(song);
    }
}

module.exports = Album;
