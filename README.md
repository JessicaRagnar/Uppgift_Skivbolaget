Structur for project Skivbolaget
<br><br>
project-root<br>
|-- src<br>
|   |-- models<br>
|   |   |-- Artist.js<br>
|   |   |-- Album.js<br>
|   |   |-- Genre.js<br>
|   |   |-- User.js<br>
|-- pages<br>
|   |-- index.html
|   |-- artists.html
|-- public<br>
|   |-- css<br>
|   |   |-- style.css<br>
|   |-- images<br>
|   |   |-- image.jpg<br>
|   |-- js<br>
|   |   |-- artists.js<br>
|-- app.js<br>
|--server.js<br>
<br>

Översikt av klasser<br>
Album:<br>
Används för att skapa album och kopplar varje album till en specifik artist och genre.<br>
Innehåller en lista över låtar som tillhör albumet.<br>
<br>
Jag har valt att kommentera extra noga i filen Album.js för att förklara logiken bakom koden, logiken är sedan densamma i samtliga filer i models-mappen.<br>
<br>
Artist:<br>
Används för att skapa artister och kopplar varje artist till en specifik genre.<br>
Används också för att skapa album och kopplar varje album till en artist.<br>
<br>
Genre:<br>
Används för att skapa genrer för artister och album.<br>
<br>
RecordLabel:<br>
Används för att skapa skivbolag och kopplar varje skivbolag till ett eller flera album.<br>
<br>
Song:<br>
Används för att skapa låtar.<br>
Varje låt kopplas till ett album.<br>
<br>
User:<br>
Används för att skapa användare och håller reda på vilka låtar användarna har spelat.<br>
<br>
Översikt över hur klasserna är sammankopplade:<br>
<br>
Album används av RecordLabel.<br>
Artist används av Album.<br>
Genre används av Artist och Album.<br>
Song används av Album.<br>
User använder Song.<br>
<br>


2023-12-12 - 2023-12-14: Skapat klasser, fyllt på med data, skapat struktur på mapp och fått det grundläggande att synas när node app.js körs.
2024-01-04 - Skapar en webbapplikation med Express, gör index.html och artists.html.

Att arbeta vidare med:
Implementera möjligheten att lägga till nya genrer, skivbolag, artister, album och låtar i systemet.
Vid körning av scriptet ska man kunna välja en genre och visa artister inom den genren.
Vid körning av scriptet ska man kunnan välja en artist, visa dess album och låtar och låt användaren spela låtarna.
Implementera felhantering för ogiltiga inmatningar från användaren.
Gör en webbapplikation med Express av din lösning. Gör 'sidor' och routes för ett låtbibliotek och möjlighet att spela låtar.
Använd Spotifys API (om du har konto) för att skapa låtar, album etc med data ifrån Spotify.
Implementera arv (inheritance) i din lösning. Exempelvis en superklass för en artist och subklasser för artister inom olika kategorier med specifika egenskapar. T ex artister inom film, musik, teater etc.