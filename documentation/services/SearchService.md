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
import { NobatvakilServerSdk, SearchHeaderRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const searchHeaderRequest: SearchHeaderRequest = {
    name: 'وکیل',
  };

  const data = await nobatvakilServerSdk.search.searchHeader(searchHeaderRequest);

  console.log(data);
})();
```
