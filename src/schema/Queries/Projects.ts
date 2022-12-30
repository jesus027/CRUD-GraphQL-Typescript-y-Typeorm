import { GraphQLList, GraphQLID } from "graphql";
import { Projects } from "../../Entities/Projects";
import { ProjectType } from "../Typedefs/Project";


export const GET_ALL_PROJECTS = {
    type: new GraphQLList(ProjectType),
    async resolve() {
        return await Projects.find();
    },
};

export const GET_PROJECT = {
    type: ProjectType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, {id}: any) {
        return await Projects.findOne({ where: { "id": id } });
    },
};