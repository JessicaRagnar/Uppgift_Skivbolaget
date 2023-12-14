//Uppgift_Skivbolaget\project-root\src\models\Album.js

class Album {
    constructor(id, title, artist, genre) {
        // Konstruktor för Album-klassen

        this.id = id;  
        // Unik identifierare för albumet
        this.title = title; 
        // Titel på album
        this.artist = artist; 
        // Artist som är kopplad till album
        this.genre = genre; 
        // Genre för album
        this.songs = [];  
        // Lista över låtar som tillhör albumet
    }

    displayInfo() {
    // Metod för att visa information om album
    
        console.log(`Album: ${this.title}`);
        console.log(`Artist: ${this.artist.name}`);
        console.log(`Genre: ${this.genre.name}`);
        console.log('Songs:');
        this.songs.forEach(song => {
            song.displayInfo();
        });
        console.log('-----------------------');
    }
    // Metod för att lägga till en låt i album
    addSong(song) {
        this.songs.push(song);
    }
}

module.exports = Album;
