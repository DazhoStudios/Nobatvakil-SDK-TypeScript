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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.statesInfo.getStatesBySlug();

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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.statesInfo.getCitiesBySlug();

  console.log(data);
})();
```
