// C:\path\till\ditt\projekt\src\models\Genre.js

class Genre {
  constructor(id, name) {
      this.id = id;
      this.name = name;
  }

  displayInfo() {
      console.log(`Genre: ${this.name}`);
      console.log('-----------------------');
  }
}

module.exports = Genre;
