# Actors GraphQL API

Pequeña API CRUD en Node.js + Apollo (GraphQL) para una base de datos simple de actores y películas. Datos en memoria (archivo: `src/models/actorModel.js`) — se pueden editar o reemplazar por una DB real.

Requisitos
- Node.js (>= 14)
- npm

Instalación
```bash
cd "c:\Users\tinch\OneDrive\Documentos\TADW\Clase GraphQL\actors-graphql-server"
npm install
```

Ejecutar
```bash
npm start
# o
node src/server.js
```

URL GraphQL
- Playground / endpoint: http://localhost:4000/graphql

Operaciones disponibles
- Queries
  - actors: lista todos los actores
  - actor(id: ID!): obtiene actor por id
- Mutations
  - createActor(name: String!, movie: String!): crea un actor
  - updateActor(id: ID!, name: String, movie: String): actualiza por id
  - deleteActor(id: ID!): elimina por id

Datos iniciales
- El dataset inicial está en `src/models/actorModel.js`. Editarlo para cambiar o agregar registros.

Ejemplos (GraphQL)
```graphql
# listar
query {
  actors {
    id
    name
    movie
  }
}

# crear
mutation {
  createActor(name: "Nuevo Actor", movie: "Nueva Película") {
    id
    name
    movie
  }
}

# actualizar
mutation {
  updateActor(id: "1", name: "Nombre Nuevo") {
    id
    name
    movie
  }
}

# eliminar
mutation {
  deleteActor(id: "1") {
    id
    name
    movie
  }
}
```

Notas útiles
- El proyecto incluye `src/db/database.js` (Sequelize + SQLite). Actualmente la lógica de la API usa el modelo en memoria (`src/models/actorModel.js`).  
- Añadir `.gitignore` con `node_modules/` y `database.sqlite` recomendado.
- Para desarrollo automatizado, instalar `nodemon` como devDependency si se desea.

Licencia
- Proyecto de ejemplo (sin licencia especificada).
