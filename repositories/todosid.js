import { randomUUID } from 'node:crypto'

export const toDos = []
//////sirve para insertar los datos//////de la vida

export function listatoDo(){
  return toDos;
}

export   function insert (title) {

    const todo = {
		id: randomUUID(),
		title,
		completed: false
	}
	toDos.push(todo)
    return todo;
}

export function encontrar (id) {
  return  toDos.find(todo => todo.id === id) ?? null;
}

export function update (id, valtodos) {
  const todo = toDos.find(todo => todo.id === id)
   if (!todo)
    {
      return null;
    }

    todo.title = valtodos.title ?? todo.title;
    todo.completed = valtodos.completed ?? todo.completed;
    return todo;
}



export function deletelistas(id) {
    const index = toDos.findIndex((m) => m.id === id);
  
    if (index === -1) {
      return false;
    }
  
    toDos.splice(index, 1);
    return true;
}
//export default router