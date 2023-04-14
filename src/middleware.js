import { NextResponse,NextRequest } from "next/server";
import { decrypt } from "./functions/crypto";
import { isTokenExpired } from "./functions/auth";

export function middleware(NextRequest) {
    if (NextRequest.nextUrl.pathname.startsWith('/auth')) {
      if (NextRequest.cookies.has('JSSESSIONID')) {
        let accessToken;
        try {
          accessToken = JSON.parse(decrypt(NextRequest.cookies.get('JSSESSIONID').value)).access;
        } catch (err) {
          console.log(accessToken);
          return NextResponse.next();
        }
  
        const isExpired = isTokenExpired(accessToken);
  
        if (isExpired === false) {
          return NextResponse.redirect('http://localhost:3000', NextRequest.url);
        }
      }
    } else if (NextRequest.nextUrl.pathname.startsWith('/manager')) {
        
      if (!NextRequest.cookies.has('JSSESSIONID')) {
        return NextResponse.redirect('http://localhost:3000/auth/login', NextRequest.url);
      }

      
    }
  
    return NextResponse.next();
}
  

export const config = {
    matcher: '/auth/:path*'
}