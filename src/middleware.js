import { NextResponse } from "next/server";

export default function middleware(request) {
  return;
    // if(request.nexturl.pathname!="/login"){
        NextResponse.redirect(new URL("/login", request.url));
    // }
}

export const config = {
  matcher: ["/about/:path*", "/studentlist/:path*"]
};
