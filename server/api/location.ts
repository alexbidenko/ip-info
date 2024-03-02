import {IP2Location} from 'ip2location-nodejs';
import {resolve} from 'path';

export default eventHandler((event) => {
    const ipAddress = getRequestIP(event, {xForwardedFor: true});

    const ip2location = new IP2Location();

    ip2location.open(resolve('./public/assets/IP_DB.BIN'));

    const info = ip2location.getAll(ipAddress);

    ip2location.close();

    return {
        ip: ipAddress,
        code: info.countryShort,
        country: info.countryLong,
        region: info.region,
        city: info.city,
    };
});
