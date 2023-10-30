//fetch APIs

//Lista de tareas
const taskList = () => fetch("http://localhost:3000/tareas").then(respuesta => respuesta.json());



export const tareasServices = {
    taskList,
};