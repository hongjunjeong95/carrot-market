import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse, userAgent } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { isBot } = userAgent(req);
  if (isBot) {
    return new Response("Plz don't be a bot. Be human.", { status: 403 });
  }
  // if (!req.cookies.has("carrotsession") && !req.url.includes("/enter")) {
  //   req.nextUrl.searchParams.set("from", req.nextUrl.pathname);
  //   req.nextUrl.pathname = "/enter";
  //   return NextResponse.redirect(req.nextUrl);
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};
