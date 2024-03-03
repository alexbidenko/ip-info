export default eventHandler((event) => {
    const ipAddress = getRouterParam(event, 'ip');

    return getLocation(ipAddress);
});
