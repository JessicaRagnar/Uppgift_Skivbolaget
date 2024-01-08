const express = require('express');
const path = require('path');
const appData = require('./app');  // Importera app.js

const app = express();
const port = process.env.PORT || 3000;

// Ange EJS som view engine
app.set('view engine', 'ejs');

// Ange sökvägen till dina vyer (mallsidor)
app.set('views', path.join(__dirname, 'views'));

// Sätt företagsnamnet på ett centralt ställe
const companyName = 'Galactic Sound Universe';

app.get('/', (req, res) => {
  // Render the homepage and pass companyName as a local variable
  res.render('index', { companyName });
});

// Route för undersidan (artist.html)
app.get('/artist', (req, res) => {
  // Om det finns specifik data för artists, skicka med den
  const allArtists = appData.userInteraction.getAllArtists(appData.artists);
  res.render('artists', { allArtists, companyName: res.locals.companyName });
});

// Route för att hämta alla artister som JSON
app.get('/artists', (req, res) => {
  const allArtists = appData.artists.map(artist => ({
    id: artist.id,
    name: artist.name,
    genre: artist.genre,
    bio: artist.bio,
  }));
  
  res.json(allArtists);
});

// Ange sökvägen för statiska filer som CSS och bilder
app.use(express.static(path.join(__dirname, 'public')));

// Skicka företagsnamnet som en lokal variabel till alla EJS-filer
app.use((req, res, next) => {
  res.locals.companyName = companyName;
  next();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
