# SeoPagesService

A list of all methods in the `SeoPagesService` service. Click on the method name to view detailed information about that method.

| Methods                     | Description |
| :-------------------------- | :---------- |
| [getSeoPages](#getseopages) |             |

## getSeoPages

- HTTP Method: `POST`
- Endpoint: `/api/tools/get-seo-page/family-in-karaj`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.seoPages.getSeoPages();

  console.log(data);
})();
```
