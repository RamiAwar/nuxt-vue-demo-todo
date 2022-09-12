import {db} from '@/server/db';
import {v4 as uuidv4} from 'uuid';

export default defineEventHandler(() => {
   return db.todos;
 })