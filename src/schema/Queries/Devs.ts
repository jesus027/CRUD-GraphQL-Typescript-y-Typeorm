import { GraphQLList, GraphQLID } from 'graphql';
import { Devs } from '../../Entities/Devs';
import { DevType } from '../Typedefs/Devs';

export const GET_ALL_DEVS = {
    type: new GraphQLList(DevType),
    async resolve() {
        return await Devs.find();
    },
};

export const GET_DEV = {
    type: DevType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, {id}: any) {
        return await Devs.findOne({ where: { "id": id } });
    },
};