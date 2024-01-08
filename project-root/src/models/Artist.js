//Uppgift_Skivbolaget\project-root\src\models\Artist.js

class Artist {
    constructor(id, name, genre, bio) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.bio = bio;
        this.albums = [];
    }

    displayInfo() {
        console.log(`Artist: ${this.name}`);
        console.log(`Genre: ${this.genre.name}`);
        console.log(`Bio: ${this.bio}`);
        console.log('-----------------------');
    }

    addAlbum(album) {
        this.albums.push(album);
    }
}

module.exports = Artist;
