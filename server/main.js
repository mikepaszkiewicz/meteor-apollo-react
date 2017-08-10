import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '/imports/api/schema';
import resolvers from '/imports/api/resolvers';

//At scale: import pattern with a lot of typeDefs and resolver?

//Basically passing our schemas and methods to graphql-tools
//before we start the server
const schema = makeExecutableSchema({ typeDefs, resolvers, });

//fire up the server's API endpoint to be able to accept requests
//default is localhost:XXXX/graphql - ALL requests go to this endpoint
//resolver calls instead of REST endpoint style.
createApolloServer({ schema });
