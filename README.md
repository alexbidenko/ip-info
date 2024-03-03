# IP Info

Service for getting information about user IP from request and location (country code, region and city) from IP.

Available methods:

- Get user IP:

```shell
curl https://ip-info.admire.social/api/ip
```

Response:

```json
{"ip":"8.8.8.8"}
```

- Get user location:

```shell
curl https://ip-info.admire.social/api/location
```

Response:

```json
{"ip":"8.8.8.8","code":"US","country":"United States of America","region":"California","city":"Mountain View"}
```

- Get location by IP:

```shell
curl https://ip-info.admire.social/api/location/8.8.8.8
```

Response:

```json
{"ip":"8.8.8.8","code":"US","country":"United States of America","region":"California","city":"Mountain View"}
```

