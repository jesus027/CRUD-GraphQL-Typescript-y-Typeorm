import { GraphQLString, GraphQLBoolean, GraphQLID, GraphQLInputObjectType } from 'graphql';
import { Devs } from '../../Entities/Devs';
import { MessageType } from "../Typedefs/Message";
import { DevType } from '../Typedefs/Devs';

export const CREATE_USER = {
    type: DevType,
    args: {
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        projects: {type: GraphQLString},
        roles: {type: GraphQLString},
    },
    async resolve(_: any, args: any) {
        const {name, email, projects, roles} = args

        const result = await Devs.insert({
            name:name,
            email:email,
            projects:projects,
            roles:roles,
        });

        return {...args, id: result.identifiers[0].id}
    },

};

export const DELETE_DEV = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, {id}: any) {
        const result = await Devs.delete(id)
        if (result.affected === 1) return true
        return false;
    },
};

export const UPDATE_DEV = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
        input: {
            type: new GraphQLInputObjectType({
                name: 'DevInput',
                fields: {
                    name: { type: GraphQLString },
                    email: { type: GraphQLString },
                    projects: { type: GraphQLString },
                    roles: { type: GraphQLString },
                },
            })
        }
    },
    async resolve(_: any, {id, input}: any) {

        const devFound = await Devs.findOne({ where: { "id": id } });

        if ( !devFound ) return {
            success: false,
            message: "Developer No Encontrado",
        }
        
        const response = await Devs.update(
            {id}, 
            {name: input.name, email: input.email, roles: input.roles, projects: input.projects,}
        );

        if (response.affected === 0 ) return false

        console.log(response);     

        return {
            success: true,
            message: "Developer Actualizado Correctamente"
        }    
    }
}