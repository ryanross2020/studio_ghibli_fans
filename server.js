//DEPENDENCIES
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

//LISTENER
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
