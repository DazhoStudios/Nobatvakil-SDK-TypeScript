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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.dashBoard.getPermisionList();

  console.log(data);
})();
```
