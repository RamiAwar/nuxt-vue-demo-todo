import { Todo } from "@/models/todo";

interface DB {
  todos: Todo[];
}

export const db: DB = {
  todos: [
    {
      id: "1",
      completed: false,
      title: "Groceries",
      body: "Buy milk, eggs, and bread",
    },
  ],
};
