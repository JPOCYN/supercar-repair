import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl
        
        // Public routes
        if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
          return true
        }
        
        // Protected routes require authentication
        if (pathname.startsWith("/browse") || 
            pathname.startsWith("/pricing") || 
            pathname.startsWith("/account") || 
            pathname.startsWith("/manual") ||
            pathname.startsWith("/admin")) {
          return !!token
        }
        
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
