import { GraphQLList, GraphQLID } from "graphql";
import { Especialidad } from "../../Entities/Especialidad";
import { EspecialidadType } from "../Typedefs/Especialidad";


export const GET_ALL_ESPECIALIDADES = {
    type: new GraphQLList(EspecialidadType),
    async resolve() {
        return await Especialidad.find();
    },
};

export const GET_ESPECIALIDAD = {
    type: EspecialidadType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, {id}: any) {
        return await Especialidad.findOne({ where: { "id": id } });
    },
};