# StatesInfoService

A list of all methods in the `StatesInfoService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description |
| :---------------------------------- | :---------- |
| [getStatesBySlug](#getstatesbyslug) |             |
| [getCitiesBySlug](#getcitiesbyslug) |             |

## getStatesBySlug

- HTTP Method: `POST`
- Endpoint: `/api/tools/get-state/alborz`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.statesInfo.getStatesBySlug();

  console.log(data);
})();
```

## getCitiesBySlug

- HTTP Method: `POST`
- Endpoint: `/api/tools/get-City/1`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.statesInfo.getCitiesBySlug();

  console.log(data);
})();
```
