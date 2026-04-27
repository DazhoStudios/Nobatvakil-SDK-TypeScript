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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.config.list();

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
import { NobatvakilServerSdk, OneRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const oneRequest: OneRequest = {
    name: 'enamad_code',
  };

  const data = await nobatvakilServerSdk.config.one(oneRequest);

  console.log(data);
})();
```
