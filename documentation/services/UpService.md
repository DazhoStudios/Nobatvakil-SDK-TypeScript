# UpService

A list of all methods in the `UpService` service. Click on the method name to view detailed information about that method.

| Methods             | Description |
| :------------------ | :---------- |
| [checkUp](#checkup) |             |

## checkUp

- HTTP Method: `GET`
- Endpoint: `/up`

**Parameters**

| Name | Type                                          | Required | Description       |
| :--- | :-------------------------------------------- | :------- | :---------------- |
| body | [CheckUpRequest](../models/CheckUpRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.system.systemOnline();

  console.log(data);
})();
```
