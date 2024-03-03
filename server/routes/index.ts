export default eventHandler((event) => {
  const ipAddress = getRequestIP(event, {xForwardedFor: true});

  return `Your ip is <code>${ipAddress}</code>.<br><br>Documentation - <a href="https://github.com/alexbidenko/ip-info" target="_blank" rel="noreferrer noopener">link</a>.`;
});
