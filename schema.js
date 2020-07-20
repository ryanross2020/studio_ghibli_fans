const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = require('graphql');

//Data
// const fans = [
//   {
//     id: '1',
//     first_name: 'Ryan',
//     last_name: 'Ross',
//     username: 'hawken110',
//     email: 'ryanross@ryan.com',
//     age: 34,
//     favorite_film: 'My Neighbor Totoro',
//     favorite_character: 'Totoro',
//     hobbies: 'cooking',
//     favorite_food: 'dessert',
//     notes: 'Have a good day!',
//   },
//   {
//     id: '2',
//     first_name: 'Viola',
//     last_name: 'Ripani',
//     username: 'grams33',
//     email: 'grams@ryan.com',
//     age: 87,
//     favorite_film: "Howl's Moving Castle",
//     favorite_character: 'Sofi',
//     hobbies: 'coloring',
//     favorite_food: 'bread',
//     notes: 'Wanna color with me?',
//   },
//   {
//     id: '3',
//     first_name: 'Joe',
//     last_name: 'Weber',
//     username: 'joseW77',
//     email: 'joe@ryan.com',
//     age: 43,
//     favorite_film: 'Spirited Away',
//     favorite_character: 'Susuwatari',
//     hobbies: 'graphic art',
//     favorite_food: 'dr. pepper',
//     notes: 'I like to play games!',
//   },
// ];

//Fan Type
const FanType = new GraphQLObjectType({
  name: 'Fan',
  fields: () => ({
    id: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
    favorite_film: { type: GraphQLString },
    favorite_character: { type: GraphQLString },
    hobbies: { type: GraphQLString },
    favorite_food: { type: GraphQLString },
    notes: { type: GraphQLString },
  }),
});

//

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
    fan: {
      type: FanType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        // for (let i = 0; i < fans.length; i++) {
        //   if (fans[i].id == args.id) {
        //     return fans[i];
        //   }
        // }
        return axios
          .get('http://localhost:3000/fans/' + args.id)
          .then((res) => res.data);
      },
    },
    fans: {
      type: new GraphQLList(FanType),
      resolve(parentValue, args) {
        // return fans;
        return axios.get('http://localhost:3000/fans').then((res) => res.data);
      },
    },
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

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addFan: {
      type: FanType,
      args: {
        first_name: { type: new GraphQLNonNull(GraphQLString) },
        last_name: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        favorite_film: { type: new GraphQLNonNull(GraphQLString) },
        favorite_character: { type: new GraphQLNonNull(GraphQLString) },
        hobbies: { type: new GraphQLNonNull(GraphQLString) },
        favorite_food: { type: new GraphQLNonNull(GraphQLString) },
        notes: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return axios
          .post('http://localhost:3000/fans', {
            first_name: args.first_name,
            last_name: args.last_name,
            username: args.username,
            email: args.email,
            age: args.age,
            favorite_film: args.favorite_film,
            favorite_character: args.favorite_character,
            hobbies: args.hobbies,
            favorite_food: args.favorite_food,
            notes: args.notes,
          })
          .then((res) => res.data);
      },
    },
    deleteFan: {
      type: FanType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return axios
          .delete('http://localhost:3000/fans/' + args.id)
          .then((res) => res.data);
      },
    },
    editFan: {
      type: FanType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt },
        favorite_film: { type: GraphQLString },
        favorite_character: { type: GraphQLString },
        hobbies: { type: GraphQLString },
        favorite_food: { type: GraphQLString },
        notes: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios
          .patch('http://localhost:3000/fans/' + args.id, args)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
