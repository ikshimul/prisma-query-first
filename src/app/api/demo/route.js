import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  const prisma = new PrismaClient();
  const device = await prisma.device.create({
    data: {
      name: "Apple",
      type: "Mobile",
    },
  });
  return NextResponse.json({ mes: "success", data: device });
}
