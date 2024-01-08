// artist.js
var companyName = 'Galactic Sound Universe';

async function fetchArtists() {
    const response = await fetch('/artists');
    const artists = await response.json();

    const artistList = document.getElementById('artist-list');
    const artistBio = document.getElementById('artist-bio');

    artists.forEach(artist => {
        const listItem = document.createElement('li');
        const artistImage = document.createElement('img');
        const artistName = document.createElement('div');

        artistImage.src = `/images/${artist.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
        artistImage.alt = artist.name;

        artistImage.style.maxWidth = '100%';
        artistImage.style.maxHeight = '200px';

        listItem.classList.add('artist-item');

        artistName.textContent = artist.name;
        artistName.classList.add('artist-name');

        listItem.addEventListener('mouseover', () => {
            artistBio.textContent = artist.bio;
        });

        listItem.addEventListener('mouseout', () => {
            artistBio.textContent = '';
        });

        listItem.appendChild(artistImage);
        listItem.appendChild(artistName);
        artistList.appendChild(listItem);
    });
}

fetchArtists();

document.getElementById('company-name').innerText = companyName;
