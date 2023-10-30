import { tareasServices } from "../service/taskService.js";

const crearNuevaLinea = (tarea, fecha, id) => {
    const linea = document.createElement('tr');
    const contenido = `
    <td class='td' data-td>
    ${tarea}
    </td>
    <td class='td'>
    ${fecha}
    </td>
    <td class='td'>
        <ul class='lista__tarea'>
            <li class='item__lista__tarea'>
                <a href='../screens/editarTarea.html?${id}' class='boton__editar'>Editar</a>
            </li>
            <li class='item__lista__tarea'>
                <button class='boton__eliminar' type='button' id='${id}'>Eliminar</button>
            </li>
        </ul>
    </td>
    `;

    linea.innerHTML = contenido;

    const btn = linea.querySelector('button');

    btn.addEventListener('click', () => {
        const id = btn.id;
        tareasServices.eliminarTarea(id).then((respuesta) => {
            // console.log(respuesta)
        }).catch(err => alert('error 1: ', err));
    });
    return linea;
}

const table = document.querySelector("[data-table]");

tareasServices.taskList().then((data) => {
    data.forEach(({tarea, fecha, id}) => {
        const nuevaLinea = crearNuevaLinea(tarea, fecha, id);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert('error 2:', error));
