# CRUD-GraphQL-Typescript-y-Typeorm

para correr el servidor ejecutar el siguiente comando:

npm run dev

Para consultar los datos de la tabla developer se utilizan los siguientes comandos:

*para crear un desarrollador se hace lo siguiente:

mutation{
  createDev(
    name: ""
    email: ""
    roles: ""
    projects: ""
  ){
    id
    name
    email
    roles
    projects
  }
}

mutation{
  updateDev(
    id: 3
    input: {
      name:""
      email: ""
      projects:""
      roles: ""
    }
  ){
    success
    message
  }
}

mutation{
  deleteDev(id: 100)
}

• Nota: para Crear, Eliminar y Actualizar los proyectos y roles ejecutar lo siguiente:

mutation{
  createProject(
    name: ""
    description: ""
    status: ""
    devs: ""
    roles: ""
  ){
    id
    name
    description
    status
    devs
    roles
  }
}

mutation{
  deleteProject(id: 100)
}

mutation{
  updateProyect(
    id: 3
    input: {
      name:""
      description: ""
      status: ""
      devs:""
      roles: ""
    }
  ){
    success
    message
  }
}

mutation{
  createEspecialidad(
    name: ""
  ){
    id
    name
  }
}

mutation{
  updateEspecialdad(
    id: 3
    input: {
      name:""
    }
  ){
    success
    message
  }
}

mutation{
  deleteEspecialidad(id: 100)
}

# para las consultas se hace lo siguiente:

*para consultar uno o todos los desarrolladores:

{
  getDev(id: 6){
    id
    name
    projects
    roles
    email
  }
}

{
  getAllDevs{
    id
    name
    email
    projects
    roles
  }
}

*para los proyectos y especialidasdes hacer lo mismo:

{
  getProject(id: 3){
    id
    name
    description
    status
    devs
    roles
  }
}

{
  getAllProjects{
    id
    name
    description
    status
    devs
    roles
  }
}

{
  getEspecialidad(id: 7){
    id
    name
  }
}

{
  getAllEspecialidades{
    id
    name
  }
}

        
        
        
        
       
