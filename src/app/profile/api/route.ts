import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = await headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  return new Response("<h3>Response from profile route..</h3>", {
    headers: { "Content-Type": "text/html" },
  });
}
