import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const id = params.id;
  console.log({ id });

  const post = await prisma.post.delete({
    where: { id },
  });

  return NextResponse.json(post);
}
