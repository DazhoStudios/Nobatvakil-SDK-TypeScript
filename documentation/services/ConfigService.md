# ConfigService

A list of all methods in the `ConfigService` service. Click on the method name to view detailed information about that method.

| Methods       | Description |
| :------------ | :---------- |
| [list](#list) |             |
| [one](#one)   |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/tools/get-config-list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.config.list();

  console.log(data);
})();
```

## one

- HTTP Method: `POST`
- Endpoint: `/api/tools/get-config`

**Parameters**

| Name | Type                                  | Required | Description       |
| :--- | :------------------------------------ | :------- | :---------------- |
| body | [OneRequest](../models/OneRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { OneRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const oneRequest: OneRequest = {
    name: 'enamad_code',
  };

  const data = await serverSdk.config.one(oneRequest);

  console.log(data);
})();
```
