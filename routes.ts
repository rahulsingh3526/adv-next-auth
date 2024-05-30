// all routes that are accdessible to public the don't requiere authentication
export const publicRoutes = ["/"];

export const authRoutes = ["auth/login", "/auth/register"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
