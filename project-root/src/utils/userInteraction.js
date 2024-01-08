// Pathway: Uppgift_Skivbolaget\project-root\src\utils\userInteraction.js

const Genre = require('../models/Genre');
const Artist = require('../models/Artist');
const Album = require('../models/Album');
const Song = require('../models/Song');
const RecordLabel = require('../models/RecordLabel');
const User = require('../models/User');

function getAllArtists(artists) {
    const allArtists = artists.map(artist => ({
        id: artist.id,
        name: artist.name,
        genre: artist.genre ? artist.genre.name : 'No Genre',
        description: artist.description,
    }));

    console.log('All artists:', allArtists); // Move the console.log here

    return allArtists;
}
// Visa artister inom en viss genre
function displayArtistsInGenre(genreName, genres, artists) {
    console.log('Starting displayArtistsInGenre function...');
    const genre = genres.find(genre => genre.name === genreName);
    console.log('Found genre:', genre);

    if (genre) {
        const artistsInGenre = artists.filter(artist => artist.genre && artist.genre.name === genreName);
        console.log('Artists in genre:', artistsInGenre);

        artistsInGenre.forEach(artist => artist.displayInfo());
    } else {
        console.log('Genre not found.');
    }
}

// Visa album och låtar för en artist
function displayAlbumsAndSongsForArtist(artistName, artists) {
    const artist = artists.find(artist => artist.name === artistName);
    if (artist) {
        artist.albums.forEach(album => {
            album.displayInfo();
            album.songs.forEach(song => song.displayInfo());
        });
    } else {
        console.log('Artist not found.');
    }
}

// Låt användaren spela låtar
function playSongs() {
    // Implementera logik för att låta användaren välja och spela låtar
}

// Implementera felhantering
function handleInvalidInput() {
    console.log('Invalid input. Please try again.');
}

module.exports = {
    displayArtistsInGenre,
    displayAlbumsAndSongsForArtist,
    playSongs,
    handleInvalidInput,
    getAllArtists,
};
