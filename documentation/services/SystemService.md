# SystemService

A list of all methods in the `SystemService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description |
| :---------------------------- | :---------- |
| [systemOnline](#systemonline) |             |

## systemOnline

- HTTP Method: `GET`
- Endpoint: `/up`

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
