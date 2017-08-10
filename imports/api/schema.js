//define and default export the relational schema
//Post, etc are database agnostic objects / documents / etc.
//can come from mongo, sql, a rest API, etc...source doesn't matter.

//posts is the only query supported by this schema definition:
// - it will accept a single, optional parameter: views.

//This query returns an array of Posts:
// - Each Post has 3 fields: an id, the content, and number of views.

//Think of Query as all the find() and findOne()'s you'd do at the first part of a meteor method,
// - except, they always return defined fields in the shape you expect.
// - after you call this query in your resolvers.js, you do the business logic stuff instead of mixing the two
// - typechecking also happens here?

//At Scale:
// - Out of control type definitions...can't add comments
// - Add type

export default typeDefs = [`
type Post {
  id: Int
  content: String
  views: Int
}
type Query {
  posts(views: Int): [Post]
}
schema {
  query: Query
}
`];

//Reading from the bottom up is easiest way to get an idea of what's going on.
// - This JUST tells us what the data will look like, not how to retrieve it.
