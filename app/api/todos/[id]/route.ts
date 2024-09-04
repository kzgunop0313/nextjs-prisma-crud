import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(todo);
}
