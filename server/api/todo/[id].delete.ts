import {db} from '@/server/db';
import {findTodoById} from './shared';

export default defineEventHandler((e) => {
    // Delete todo if exists
    const id = e.context.params.id;

    // Find element
    const {todo, index} = findTodoById(id);

    // Delete element
    db.todos.splice(index, 1);
    return true; 
})