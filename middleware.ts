import { clerkMiddleware } from '@clerk/nextjs/server';

const debugStatus = true;

// Make sure that the `/api/webhooks/(.*)` route is not protected here
export default clerkMiddleware(
  (auth, req) => {

    console.log('=========================');
    console.log('Request Headers');
    console.log('host:', req.headers.get('host'));
    console.log('x-forwarded-host', req.headers.get('x-forwarded-host'));
    console.log('x-forwarded-proto', req.headers.get('x-forwarded-proto'));
    console.log('x-forwarded-proto', req.headers.get('x-forwarded-port'));
    console.log('=========================');
  },
  { debug: debugStatus },
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};