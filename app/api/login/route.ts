import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

async function authenticateUser(username: any, password: any) {
  const user =
    await sql`SELECT * FROM users WHERE username = ${username} AND password = ${password}`;
  if (user.rowCount === 0) {
    return false;
  }
  return true;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { username, password } = body;

  const auth = await authenticateUser(username, password);
  if (auth === false) {
    return NextResponse.json({ stat: "failed" });
  } else {
    return NextResponse.json({ stat: "success", token: "123456" });
  }
}
