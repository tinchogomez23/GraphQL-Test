const seedData = [
  { name: "Robert Downey Jr.", movie: "Iron Man" },
  { name: "Chris Evans", movie: "Captain America: The First Avenger" },
  { name: "Scarlett Johansson", movie: "Black Widow" },
  { name: "Chris Hemsworth", movie: "Thor" },
  { name: "Tom Holland", movie: "Spider-Man: Homecoming" },
  { name: "Mark Ruffalo", movie: "Avengers: Endgame" },
  { name: "Chris Evans", movie: "Avengers: Endgame" },
  { name: "Robert Downey Jr.", movie: "Avengers: Endgame" },
  { name: "Samuel L. Jackson", movie: "Avengers: Endgame" },
  { name: "Benedict Cumberbatch", movie: "Doctor Strange" },
  { name: "Tom Holland", movie: "Spider-Man: No Way Home" },
];

const seedDatabase = async (db) => {
  for (const actor of seedData) {
    await db.collection("actors").insertOne(actor);
  }
};

module.exports = seedDatabase;