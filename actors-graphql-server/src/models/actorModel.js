let actors = [
    {id: "1", name: "Robert Downey Jr.", movie: "Iron Man" },
    {id: "2", name: "Chris Evans", movie: "Captain America: The First Avenger" },
    {id: "3", name: "Scarlett Johansson", movie: "Black Widow" },
    {id: "4", name: "Chris Hemsworth", movie: "Thor" },
    {id: "5", name: "Tom Holland", movie: "Spider-Man: Homecoming" },
    {id: "6", name: "Mark Ruffalo", movie: "Avengers: Endgame" },
    {id: "7", name: "Benedict Cumberbatch", movie: "Doctor Strange" },
    {id: "8", name: "Chris Evans", movie: "Avengers: Endgame" },
    {id: "9", name: "Tom Hiddleston", movie: "Thor" },
    {id: "10", name: "Samuel L. Jackson", movie: "Avengers: Endgame" },
];

let nextId = actors.length + 1;

const findAll = async () => actors.slice();

const findById = async (id) => actors.find(a => a.id === id) || null;

const create = async ({ name, movie }) => {
  const actor = { id: String(nextId++), name, movie };
  actors.push(actor);
  return actor;
};

const update = async (id, { name, movie }) => {
  const idx = actors.findIndex(a => a.id === id);
  if (idx === -1) return null;
  if (name !== undefined) actors[idx].name = name;
  if (movie !== undefined) actors[idx].movie = movie;
  return actors[idx];
};

// id-based delete for resolvers
const deleteById = async (id) => {
    const idx = actors.findIndex(a => a.id === id);
    if (idx === -1) return null;
    return actors.splice(idx, 1)[0];
};

// funciones antiguas name-based (se mantienen para compatibilidad)
const getAllActors = () => {
    return actors.slice();
};

const getActorByName = (name) => {
    return actors.filter(actor => actor.name === name);
};

const addActor = (actor) => {
    actor.id = actor.id || String(nextId++);
    actors.push(actor);
    return actor;
};

const updateActor = (name, updatedActor) => {
    const index = actors.findIndex(actor => actor.name === name);
    if (index !== -1) {
        actors[index] = { ...actors[index], ...updatedActor };
        return actors[index];
    }
    return null;
};

const deleteActor = (name) => {
    const index = actors.findIndex(actor => actor.name === name);
    if (index !== -1) {
        return actors.splice(index, 1)[0];
    }
    return null;
};

module.exports = {
    // APIs que usan los resolvers actuales (id-based)
    findAll,
    findById,
    create,
    update,
    delete: deleteById,
    // APIs antiguas name-based (si acaso las usa otra parte)
    getAllActors,
    getActorByName,
    addActor,
    updateActor,
    deleteActor,
};