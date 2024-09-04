import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}
