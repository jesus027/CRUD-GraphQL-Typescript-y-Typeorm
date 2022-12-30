import { GraphQLObjectType, GraphQLString, GraphQLID, } from 'graphql';

export const EspecialidadType = new GraphQLObjectType({
    name: "Especialidad",
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
    },
});