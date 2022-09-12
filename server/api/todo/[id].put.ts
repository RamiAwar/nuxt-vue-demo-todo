import {db} from '@/server/db';
import {findTodoById} from './shared';

export default defineEventHandler((e) => {
    // Toggle todo completed status if exists
    const id = e.context.params.id;

    // Find element
    const {todo, index} = findTodoById(id);

    // Update element
    const update = {
        ...todo,
        completed: !todo.completed,
    };

    db.todos[index] = update;
    return update; 
})