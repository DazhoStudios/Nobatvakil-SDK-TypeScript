# CountService

A list of all methods in the `CountService` service. Click on the method name to view detailed information about that method.

| Methods                 | Description |
| :---------------------- | :---------- |
| [countList](#countlist) |             |

## countList

- HTTP Method: `POST`
- Endpoint: `/api/tools/count`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.count.countList();

  console.log(data);
})();
```
