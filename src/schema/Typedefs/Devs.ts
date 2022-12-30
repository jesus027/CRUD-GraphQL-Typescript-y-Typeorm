import { GraphQLObjectType, GraphQLString, GraphQLID, } from 'graphql';

export const DevType = new GraphQLObjectType({
    name: "Devs",
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        projects: {type: GraphQLString},
        roles: {type: GraphQLString},
    }
})