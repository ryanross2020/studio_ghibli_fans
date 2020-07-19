const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');

// People Type
const PeoplesType = new GraphQLObjectType({
  name: 'Peoples',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    age: { type: GraphQLString },
    eye_color: { type: GraphQLString },
    hair_color: { type: GraphQLString },
    films: { type: FilmsType },
  }),
});

// Films Type
const FilmsType = new GraphQLObjectType({
  name: 'Films',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    director: { type: GraphQLString },
    producer: { type: GraphQLString },
    release_date: { type: GraphQLString },
    rt_score: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    peoples: {
      type: new GraphQLList(PeoplesType),
      resolve(parent, args) {
        return axios
          .get('https://ghibliapi.herokuapp.com/people')
          .then((res) => res.data);
      },
    },
    people: {
      type: PeoplesType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return axios
          .get(`https://ghibliapi.herokuapp.com/people/${args.id}`)
          .then((res) => res.data);
      },
    },
    films: {
      type: new GraphQLList(FilmsType),
      resolve(parent, args) {
        return axios
          .get('https://ghibliapi.herokuapp.com/films')
          .then((res) => res.data);
      },
    },
    film: {
      type: FilmsType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return axios
          .get(`https://ghibliapi.herokuapp.com/films/${args.id}`)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
