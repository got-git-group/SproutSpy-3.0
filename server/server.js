const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const verifyToken = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, ...rest}) => { 
    let isAuthenticated = false;
    try {
      const authHeader = req.headers.authorization || '';
      if (authHeader) {
        const token = authHeader.split(' ')[1];
        const payload = await verifyToken(token);
        isAuthenticated = payload && payload.sub ? true : false;
      }
    } catch (error) {
      console.error(error);
      console.error(req.headers.authorization);
    }

    return { ...rest, req, auth: { isAuthenticated}}
  }
});
// middleware - ADD AUTH HERE?
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};
  
// Call the async function to start the server
startApolloServer(typeDefs, resolvers);