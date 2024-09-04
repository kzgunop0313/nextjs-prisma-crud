import prisma from "@/lib/prismaClient";

async function getTodo(id: string) {
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });
  return todo;
}

export default async function TodoPage({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);
  return <div>{todo?.title}</div>;
}
