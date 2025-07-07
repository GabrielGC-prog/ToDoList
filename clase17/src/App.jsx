import { useState } from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { AddToDo } from "./components/AddTodo";
import { Filter } from "./components/filter";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "ESTUDIAR MAS REACT", completed: false },
    { id: 2, text: "Hacer un todo list", completed: false },
    { id: 3, text: "ESTUDIAR MAS REACT", completed: true },
  ]);

  const [mostrarActivas, setMostrarActivas] = useState(false);

  const deleteTask = (idElegido) => {
    setTasks(tasks.filter((task) => task.id !== idElegido));
  };

  const toggleCompletado = (idElegido) => {
    setTasks(
      tasks.map((task) =>
        task.id === idElegido ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const filterTasks = mostrarActivas
    ? tasks.filter((unatask) => !unatask.completed)
    : tasks;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>TO-DO List</h1>
      <AddToDo onAdd={addTask} />
      <Filter
        mostrarActivas={mostrarActivas}
        setMostrarActivas={setMostrarActivas}
      />
      <ToDoList
        tasks={filterTasks}
        onDelete={deleteTask}
        onCompleted={toggleCompletado}
      />
    </>
  );
}

export default App;

/*
Pasos para un TODO-LIST con react (Componentes principales)

* 1. App: componente principal y va a manejar el estado de las
tareas.
* 2. ToDo List: componente que va a mostrar la lista de tareas.
* 3. ToDo Item: componente que va a mostrar cada tarea individual.
* 4. AddToDo: componente que va a manejar el formulario para
agregar nuevas tareas

*FUNCIONALIDADES QUE NOS PIDEN:
* - Agregar una tarea
* - Marcar una tarea como completada
* - Eliminar una tarea

* PASOS:
* 1. Crear el componente App que muestre una lista de tareas.
* 2. Convertir la lista en estado y permitir cambiar el estado de
completado de una tarea.
* 3. Añadir un boton de eliminar que elimine una tarea.

Como empezar

* en el array tareas defino la estructura de cada tarea:
*{
* id: 1,
* title: "Aprender React",
* completed: false
*}

* Creo el ToDo Item que recibe una tarea y una funcion, muestro la
tarea y uso la funcion para cambiar su estado y eliminarla

* Creo el ToDo list que recibe un array de tareas y una funcion.
Mapea las tareas

* Creo el AddToDo que recibe una funcion para agregar una tarea.
Muestro un formulario con un input y un boton. AL enviar el
formulario la tarea se agrega al array de tareas en el estado de
App.
*/
