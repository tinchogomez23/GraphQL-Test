# Actors GraphQL Server

This project is a simple Node.js server that provides a CRUD API for managing a database of actors and the movies they have acted in. The API is built using GraphQL and Apollo Server.

## Project Structure

```
actors-graphql-server
├── src
│   ├── index.js          # Entry point of the application
│   ├── server.js         # Server configuration and setup
│   ├── schema.js         # GraphQL schema definition
│   ├── resolvers.js      # Resolver functions for GraphQL queries and mutations
│   ├── models
│   │   └── actorModel.js # Actor model for database interaction
│   └── db
│       ├── database.js   # Database connection and configuration
│       └── seed.js       # Seed data for the database
├── package.json          # npm configuration file
├── .gitignore            # Files and directories to ignore by Git
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd actors-graphql-server
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the database seed script:**
   This will populate the database with initial actor data.
   ```
   node src/db/seed.js
   ```

4. **Start the server:**
   ```
   npm start
   ```

5. **Access the GraphQL API:**
   Open your browser and navigate to `http://localhost:4000/graphql` to interact with the API using GraphQL Playground.

## API Details

### Queries

- **getActors:** Retrieve a list of all actors.
- **getActor(id: ID!):** Retrieve a specific actor by ID.

### Mutations

- **addActor(name: String!, movie: String!):** Add a new actor with the specified name and movie.
- **updateActor(id: ID!, name: String, movie: String):** Update an existing actor's details.
- **deleteActor(id: ID!):** Remove an actor from the database.

## License

This project is licensed under the MIT License.