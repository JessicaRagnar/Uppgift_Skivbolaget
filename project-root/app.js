//Uppgift_Skivbolaget\project-root\app.js

const Genre = require('./src/models/Genre');
const Artist = require('./src/models/Artist');
const Album = require('./src/models/Album');
const Song = require('./src/models/Song');
const RecordLabel = require('./src/models/RecordLabel');
const User = require('./src/models/User');

// Genrer
const genres = [
    new Genre(1, 'Rock'),
    new Genre(2, 'Pop'),
    new Genre(3, 'Jazz'),
    new Genre(4, 'Country'),
    new Genre(5, 'Electronic')
    // Lägg till fler genrer här om det behövs
];

// Skivbolag
const recordLabels = [
    new RecordLabel(1, 'Spectrum Records', 'Music Road 123 45 Big City'),
    new RecordLabel(2, 'Echelon Sounds', 'Harmonica Road 123 45 Big City'),
    new RecordLabel(3, 'BeatBox Records', 'Rhythm Street 123 45 Big City')
    // Lägg till fler record labels här om det behövs
];

// Artister
const artists = [
    new Artist(1, 'Rockin\' Ricky', genres[0], 'Rockin\' Ricky is the undisputed king of air guitar. With fingers that move at the speed of sound, he\'ll make you believe his guitar is on fire!'),
    new Artist(2, 'Pop Princess Polly', genres[1], 'Polly, the Pop Princess, is here to bring glitter and joy to your world. With infectious melodies and dance moves that defy gravity, she\'s on a mission to make the whole world sing along.'),
    new Artist(3, 'Jazzy Jive Jimmy', genres[2], 'Jazzy Jive Jimmy, the saxophone sensation, will transport you to a world of smooth tunes and sultry rhythms. His saxophone solos are so enchanting; they might just make you want to dance in the moonlight.'),
    new Artist(4, 'Country Crooner Cindy', genres[3], 'Cindy, the Country Crooner, spins tales of heartbreak, love, and life on the open road. With a voice as warm as a southern breeze, she\'ll make you want to grab your cowboy boots and two-step under the stars.'),
    new Artist(5, 'Electro Ellie', genres[4], 'Electro Ellie, the queen of electronic vibes, creates sonic landscapes that transport you to another dimension.')
    // Lägg till fler artister här om det behövs
];

// Album med låtar
const albums = [
    new Album(1, 'Thunderstruck Dreams', artists[0], genres[0]),
    new Album(2, 'Starlight Serenade', artists[1], genres[1]),
    new Album(3, 'Smooth Velvet Nights', artists[2], genres[2]),
    new Album(4, 'Dusty Trails and Open Skies', artists[3], genres[3]),
    new Album(5, 'Electric Dreams', artists[4], genres[4])
    // Lägg till fler album här om det behövs
];

// Låtar
const songs = [
    new Song(1, 'Rebel Road', 0),
    new Song(2, 'Dancing in the Moonlight', 0),
    new Song(3, 'Moonlit Jazzscape', 0),
    new Song(4, 'Whiskey Sunrise', 0),
    new Song(5, 'Electric Storm', 0),
    new Song(6, 'Pop Paradise', 0),
    new Song(7, 'Smooth Saxophone Solitude', 0),
    new Song(8, 'Country Sunset', 0),
    new Song(9, 'Digital Dreams', 0)
    // Lägg till fler låtar här om det behövs
];

// Lägg till låtarna i albumen
albums[0].addSong(songs[0]);
albums[1].addSong(songs[1]);
albums[2].addSong(songs[2]);
albums[3].addSong(songs[3]);
albums[0].addSong(songs[4]);
albums[1].addSong(songs[5]);
albums[2].addSong(songs[6]);
albums[3].addSong(songs[7]);
albums[4].addSong(songs[8]);
// Lägg till fler låtar till album här om det behövs

// Koppla album till skivbolag
recordLabels[0].addAlbum(albums[0]);
recordLabels[0].addAlbum(albums[1]);
recordLabels[1].addAlbum(albums[2]);
recordLabels[1].addAlbum(albums[3]);
recordLabels[2].addAlbum(albums[4]);
// Lägg till fler album här om det behövs

// Användare och spelade låtar
const users = [
    new User(1, 'MusicMaven'),
    new User(2, 'HarmonyHero'),
    new User(3, 'GrooveGuru'),
    new User(4, 'BeatBard')
    // Lägg till fler användare här om det behövs
];

// Lägg till användarnas spelade låtar
users[0].playSongs([songs[0], songs[4], songs[8]]);
users[1].playSongs([songs[1], songs[5], songs[8]]);
users[2].playSongs([songs[2], songs[6], songs[8]]);
users[3].playSongs([songs[3], songs[7], songs[8]]);
// Lägg till fler låtar för användare här om det behövs

// Visa information
console.log('Genres:');
genres.forEach(genre => {
    genre.displayInfo();
});

console.log('Record Labels:');
recordLabels.forEach(label => {
    label.displayInfo();
});

console.log('Artists:');
artists.forEach(artist => {
    artist.displayInfo();
});

console.log('Albums:');
albums.forEach(album => {
    album.displayInfo();
});

console.log('Users:');
users.forEach(user => {
    user.displayInfo();
});
