import { GraphQLString, GraphQLBoolean, GraphQLID, GraphQLInputObjectType } from 'graphql';
import { Especialidad } from '../../Entities/Especialidad';
import { MessageType } from "../Typedefs/Message";
import { EspecialidadType } from '../Typedefs/Especialidad';

export const CREATE_ESPECIALIDAD = {
    type: EspecialidadType,
    args: {
        name: {type: GraphQLString},
    },
    async resolve(_: any, args: any) {
        const {name} = args

        const result = await Especialidad.insert({
            name:name,
        });

        return {...args, id: result.identifiers[0].id}
    }
};

export const DELETE_ESPECIALIDAD = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, {id}: any) {
        const result = await Especialidad.delete(id)
        if (result.affected === 1) return true
        return false;
    },
};

export const UPDATE_ESPECIALIDAD = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
        input: {
            type: new GraphQLInputObjectType({
                name: 'EspecialidadInput',
                fields: {
                    name: { type: GraphQLString },
                },
            })
        }
    },
    async resolve(_: any, {id, input}: any) {

        const especialFound = await Especialidad.findOne({ where: { "id": id } });

        if ( !especialFound ) return {
            success: false,
            message: "Especialidad No Encontrada",
        }
        
        const response = await Especialidad.update(
            {id}, 
            {name: input.name}
        );

        if (response.affected === 0 ) return false

        console.log(response);     

        return {
            success: true,
            message: "Especialidad Actualizada Correctamente"
        }    
    }
}