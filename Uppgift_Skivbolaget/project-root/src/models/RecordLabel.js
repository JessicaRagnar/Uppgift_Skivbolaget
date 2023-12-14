//Uppgift_Skivbolaget\project-root\src\models\RecordLabel.js

class RecordLabel {
    constructor(id, name, headofficeAddress) {
        this.id = id;
        this.name = name;
        this.headofficeAddress = headofficeAddress;
        this.albums = [];
    }

    displayInfo() {
        console.log(`Record Label: ${this.name}`);
        console.log(`Head Office Address: ${this.headofficeAddress}`);
        console.log('-----------------------');
    }

    addAlbum(album) {
        this.albums.push(album);
    }
}

module.exports = RecordLabel;
