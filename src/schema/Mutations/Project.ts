import { GraphQLString, GraphQLBoolean, GraphQLID, GraphQLInputObjectType } from 'graphql';
import { Projects } from '../../Entities/Projects';
import { MessageType } from "../Typedefs/Message";
import { ProjectType } from '../Typedefs/Project';

export const CREATE_PROJECT = {
    type: ProjectType,
    args: {
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        devs: {type: GraphQLString},
        roles: {type: GraphQLString},
    },
    async resolve(_: any, args: any) {
        const {name, description, devs, status, roles} = args

        const result = await Projects.insert({
            name:name,
            description:description,
            status:status,
            devs: devs,
            roles:roles,
        });

        return {...args, id: result.identifiers[0].id}
    },
};

export const DELETE_PROJECT = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, {id}: any) {
        const result = await Projects.delete(id)
        if (result.affected === 1) return true
        return false;
    },
};

export const UPDATE_PROYECT = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
        input: {
            type: new GraphQLInputObjectType({
                name: 'ProjectInput',
                fields: {
                    name: { type: GraphQLString },
                    description: { type: GraphQLString },
                    status: { type: GraphQLString },
                    devs: { type: GraphQLString },
                    roles: { type: GraphQLString },
                },
            })
        }
    },
    async resolve(_: any, {id, input}: any) {

        const proyectFound = await Projects.findOne({ where: { "id": id } });

        if ( !proyectFound ) return {
            success: false,
            message: "Proyecto No Encontrado",
        }
        
        const response = await Projects.update(
            {id}, 
            {name: input.name, description: input.description, status: input.status, roles: input.roles, devs: input.devs}
        );

        if (response.affected === 0 ) return false

        console.log(response);     

        return {
            success: true,
            message: "Proyecto Actualizado Correctamente"
        }    
    }
}