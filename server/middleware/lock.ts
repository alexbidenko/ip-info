export default defineEventHandler((event) => {
    if (getRequestURL(event).pathname.startsWith('/assets')) {
        return createError({statusCode: 403});
    }
});
