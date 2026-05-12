# CategoryService

A list of all methods in the `CategoryService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description |
| :------------------------------ | :---------- |
| [getCategories](#getcategories) |             |

## getCategories

- HTTP Method: `POST`
- Endpoint: `/api/tools/categories`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.category.getCategories();

  console.log(data);
})();
```
