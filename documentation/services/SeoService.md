# SeoService

A list of all methods in the `SeoService` service. Click on the method name to view detailed information about that method.

| Methods             | Description |
| :------------------ | :---------- |
| [listSeo](#listseo) |             |

## listSeo

- HTTP Method: `POST`
- Endpoint: `/api/tools/get-seo-tags`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.seo.listSeo();

  console.log(data);
})();
```
