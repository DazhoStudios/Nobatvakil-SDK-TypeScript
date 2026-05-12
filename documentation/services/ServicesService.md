# ServicesService

A list of all methods in the `ServicesService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [lists](#lists)   |             |
| [update](#update) |             |

## lists

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/services/list`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [ServicesListsRequest](../models/ServicesListsRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, ServicesListsRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const servicesListsRequest: ServicesListsRequest = {
    id: '2',
  };

  const data = await serverSdk.services.lists(servicesListsRequest);

  console.log(data);
})();
```

## update

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/services/update`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [ServicesUpdateRequest](../models/ServicesUpdateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, ServicesUpdateRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const servicesUpdateRequest: ServicesUpdateRequest = {
    id: '37',
    lawyerId: '11',
    name: 'test',
    slug: 'chat-room-1',
    typeId: '1',
    duration: '45',
    amount: '100000',
    countryId: '28',
    status: 'active',
  };

  const data = await serverSdk.services.update(servicesUpdateRequest);

  console.log(data);
})();
```
