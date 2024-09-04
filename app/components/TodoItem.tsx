import { Todo } from "../types/types";

export default function TodoItem({ todo }: { todo: Todo }) {
  return <div className="w-12 border-spacing-1">{todo.title}</div>;
}
