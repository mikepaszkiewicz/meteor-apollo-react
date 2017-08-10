import { Post } from './connectors'; //synonymous with importing a collection

// create the resolve functions for the available GraphQL queries
// resolvers.Query.posts is synonymous with writing a meteor method
export default resolvers = {
    Query: {
        //b/c data model is already defined in the connectors, we can pass up our args,
        //know exactly what to expect back, and perform application logic

        //not using the first parameter (_). It is a reference to parent object (instance of Query)
        posts(_, args){
            return Post.findAll({where: args});
        },
    }
};
