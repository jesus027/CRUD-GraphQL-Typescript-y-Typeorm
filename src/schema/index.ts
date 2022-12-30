import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { GREETING } from './Queries/Greeting';
import { GET_ALL_DEVS, GET_DEV } from './Queries/Devs';
import { GET_ALL_PROJECTS, GET_PROJECT } from "./Queries/Projects";
import { GET_ALL_ESPECIALIDADES, GET_ESPECIALIDAD } from './Queries/Especialidad';
import { CREATE_USER, DELETE_DEV, UPDATE_DEV } from './Mutations/Devs';
import { CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROYECT } from "./Mutations/Project";
import { CREATE_ESPECIALIDAD, DELETE_ESPECIALIDAD, UPDATE_ESPECIALIDAD } from "./Mutations/Especialidad";

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GREETING,
        getAllDevs: GET_ALL_DEVS,
        getAllProjects: GET_ALL_PROJECTS,
        getAllEspecialidades: GET_ALL_ESPECIALIDADES,
        getDev: GET_DEV,
        getProject: GET_PROJECT,
        getEspecialidad: GET_ESPECIALIDAD,
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createDev: CREATE_USER,
        deleteDev: DELETE_DEV,
        updateDev: UPDATE_DEV,
        createProject: CREATE_PROJECT,
        deleteProject: DELETE_PROJECT,
        updateProyect: UPDATE_PROYECT,
        createEspecialidad: CREATE_ESPECIALIDAD,
        deleteEspecialidad: DELETE_ESPECIALIDAD,
        updateEspecialidad: UPDATE_ESPECIALIDAD,
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});