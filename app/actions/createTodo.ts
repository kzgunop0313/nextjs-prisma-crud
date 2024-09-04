"use server";

import prisma from "@/lib/prismaClient";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  const todo = await prisma.todo.create({
    data: {
      title,
    },
  });
  console.log(todo);
}
