export default eventHandler((event) => {
  const ipAddress = getRequestIP(event, {xForwardedFor: true});

  return `Your ip is <code>${ipAddress}</code>.`;
});
