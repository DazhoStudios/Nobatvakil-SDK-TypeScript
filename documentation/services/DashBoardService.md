# DashBoardService

A list of all methods in the `DashBoardService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description |
| :------------------------------------ | :---------- |
| [getPermisionList](#getpermisionlist) |             |

## getPermisionList

- HTTP Method: `POST`
- Endpoint: `/api/user/get-permissions`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.dashBoard.getPermisionList();

  console.log(data);
})();
```
