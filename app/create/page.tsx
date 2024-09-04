import { createTodo } from "../actions/createTodo";

export default function CreatePage() {
  return (
    <div>
      <form action={createTodo}>
        <input
          type="text"
          name="title"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
