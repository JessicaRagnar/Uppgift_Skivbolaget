//Uppgift_Skivbolaget\project-root\app.js

// Importerar klasserna för att använda deras metoder och egenskaper
const Genre = require('./src/models/Genre');
const Artist = require('./src/models/Artist');
const Album = require('./src/models/Album');
const Song = require('./src/models/Song');
const RecordLabel = require('./src/models/RecordLabel');
const User = require('./src/models/User');

// Genrer
const rockGenre = new Genre(1, 'Rock');
const popGenre = new Genre(2, 'Pop');
const jazzGenre = new Genre(3, 'Jazz');
const countryGenre = new Genre(4, 'Country');

// Skivbolag
// En array för att lagra skivbolag
const recordLabels = [];

recordLabels.push(new RecordLabel(1, 'Spectrum Records', 'Music Road 123 45 Big City'));
recordLabels.push(new RecordLabel(2, 'Echelon Sounds', 'Harmonica Road 123 45 Big City'));
// Lägg till fler record labels här om det behövs

// Artister
const artist1 = new Artist(1, 'Artist 1', rockGenre, 'Biography for Artist 1');
const artist2 = new Artist(2, 'Artist 2', popGenre, 'Biography for Artist 2');
const artist3 = new Artist(3, 'Artist 3', jazzGenre, 'Biography for Artist 3');
const artist4 = new Artist(4, 'Artist 4', countryGenre, 'Biography for Artist 4');

// Album med låtar
const album1 = new Album(1, 'Album 1', artist1, rockGenre);
const album2 = new Album(2, 'Album 2', artist2, popGenre);
const album3 = new Album(3, 'Album 3', artist3, jazzGenre);
const album4 = new Album(4, 'Album 4', artist4, countryGenre);

const song1 = new Song(1, 'Song 1', 0);
const song2 = new Song(2, 'Song 2', 0);
const song3 = new Song(3, 'Song 3', 0);
const song4 = new Song(4, 'Song 4', 0);

album1.addSong(song1);
album2.addSong(song2);
album3.addSong(song3);
album4.addSong(song4);

// Album och koppling till skivbolag
recordLabels[0].addAlbum(album1);
recordLabels[1].addAlbum(album2);
// ... Lägg till fler album här om det behövs

// Användare och spelade låtar
const user1 = new User(1, 'User 1');
const user2 = new User(2, 'User 2');
const user3 = new User(3, 'User 3');
const user4 = new User(4, 'User 4');

user1.playSong(song1);
user2.playSong(song2);
user3.playSong(song3);
user4.playSong(song4);

// Visa information
console.log('Genres:');
rockGenre.displayInfo();
popGenre.displayInfo();
jazzGenre.displayInfo();
countryGenre.displayInfo();

// Visa information om varje skivbolag
recordLabels.forEach(label => {
    label.displayInfo();
});

console.log('Artists:');
artist1.displayInfo();
artist2.displayInfo();
artist3.displayInfo();
artist4.displayInfo();

console.log('Albums:');
album1.displayInfo();
album2.displayInfo();
album3.displayInfo();
album4.displayInfo();

console.log('Users:');
user1.displayInfo();
user2.displayInfo();
user3.displayInfo();
user4.displayInfo();
