const Actor = require('./models/actorModel');

const resolvers = {
    Query: {
        actors: async () => {
            return await Actor.findAll();
        },
        actor: async (_, { id }) => {
            return await Actor.findById(id);
        },
    },
    Mutation: {
        createActor: async (_, { name, movie }) => {
            const newActor = await Actor.create({ name, movie });
            return newActor;
        },
        updateActor: async (_, { id, name, movie }) => {
            const updatedActor = await Actor.update(id, { name, movie });
            return updatedActor;
        },
        deleteActor: async (_, { id }) => {
            const deletedActor = await Actor.delete(id);
            return deletedActor;
        },
    },
};

module.exports = resolvers;