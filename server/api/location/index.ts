export default eventHandler((event) => {
    const ipAddress = getRequestIP(event, {xForwardedFor: true});

    return getLocation(ipAddress);
});
