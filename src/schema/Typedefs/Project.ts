import { GraphQLObjectType, GraphQLString, GraphQLID, } from 'graphql';

export const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        devs: {type: GraphQLString},
        roles: {type: GraphQLString},
    },
});