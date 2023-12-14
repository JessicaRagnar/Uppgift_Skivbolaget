Structur for project Skivbolaget
<br><br>
project-root<br>
|-- src<br>
|   |-- models<br>
|   |   |-- Artist.js<br>
|   |   |-- Album.js<br>
|   |   |-- Genre.js<br>
|   |   |-- User.js<br>
|-- app.js<br>
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


2023-12-12 - 2023-12-14: Skapat klasser, struktur på mapp och fått det grundläggande att synas när node app.js körs.
