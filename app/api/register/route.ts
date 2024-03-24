import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

async function addUser(
  username: any,
  name: any,
  number: any,
  email: any,
  password: any,
) {
  const random = 44;
    await sql`INSERT INTO users (id, username, name, number, email, password) VALUES ('${random}', '${username}', '${name}', '${number}', '${email}', '${password})';`;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { username, name, number, email, password } = body;

  await addUser(username, name, number, email, password);
  return NextResponse.redirect("/login");
}
