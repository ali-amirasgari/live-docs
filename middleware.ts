import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // authorizedParties: ['https://ali-live-docs.liara.run/']
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
