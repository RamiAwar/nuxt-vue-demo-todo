import {db} from '@/server/db';
import {createError, sendError} from "h3";

export const findTodoById = (id: string) => {
    let index;
    const todo = db.todos.find((todo, i) => {
        if (todo.id === id) {
            index = i;
            return true;
        }
        return false;
    });
    if (!todo) {
        throw createError({
            statusCode: 404,
            name: 'NotFoundError',
            message: 'Todo not found',
            statusMessage: "Not Found",
        })
    };
    return {todo, index};
}