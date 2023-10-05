import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  const prisma = new PrismaClient();
  const category = await prisma.categories.create({
    data: {
      name: "Mobile",
      displayName: "Mobile",
    },
  });
  return NextResponse.json({ mes: "success", data: category });
}
