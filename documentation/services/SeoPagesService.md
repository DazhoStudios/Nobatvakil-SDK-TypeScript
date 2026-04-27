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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.seoPages.getSeoPages();

  console.log(data);
})();
```
