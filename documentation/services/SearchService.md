# SearchService

A list of all methods in the `SearchService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description |
| :---------------------------- | :---------- |
| [searchHeader](#searchheader) |             |

## searchHeader

- HTTP Method: `POST`
- Endpoint: `/api/tools/get-search`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [SearchHeaderRequest](../models/SearchHeaderRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SearchHeaderRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const searchHeaderRequest: SearchHeaderRequest = {
    name: 'وکیل',
  };

  const data = await serverSdk.search.searchHeader(searchHeaderRequest);

  console.log(data);
})();
```
