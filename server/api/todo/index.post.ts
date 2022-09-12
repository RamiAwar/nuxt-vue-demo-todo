import {db} from '@/server/db';
import {v4 as uuidv4} from 'uuid';
import { Todo } from '@/models/todo';

export default defineEventHandler(async (e) => {
    const body = await useBody(e);
    
    if (!body.title) throw createError({statusCode: 400, message: "Missing title", statusMessage: "Bad Request", stack: ""});
    if (!body.body) throw createError({statusCode: 400, message: "Missing body", statusMessage: "Bad Request", stack: ""});

    const todo: Todo = {
        id: uuidv4(),
        title: body.title,
        body: body.body,
        completed: false,
    }
    
    db.todos.push(todo);
    return todo;
 })