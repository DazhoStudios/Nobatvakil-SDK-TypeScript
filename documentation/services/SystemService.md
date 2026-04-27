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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.system.systemOnline();

  console.log(data);
})();
```
