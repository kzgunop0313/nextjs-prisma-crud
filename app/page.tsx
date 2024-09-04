import { Todo } from "./types/types";
import TodoItem from "./components/TodoItem";

async function getTodos() {
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
  });
  const todos: Todo[] = await response.json();
  return todos;
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="flex p-24">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </main>
  );
}
