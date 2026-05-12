# LawyerDashboardOrdersService

A list of all methods in the `LawyerDashboardOrdersService` service. Click on the method name to view detailed information about that method.

| Methods         | Description |
| :-------------- | :---------- |
| [info](#info)   |             |
| [lists](#lists) |             |

## info

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/orders/show`

**Parameters**

| Name | Type                                                                              | Required | Description       |
| :--- | :-------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerDashboardOrdersInfoRequest](../models/LawyerDashboardOrdersInfoRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerDashboardOrdersInfoRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerDashboardOrdersInfoRequest: LawyerDashboardOrdersInfoRequest = {
    id: '1',
    lawyerId: '1',
  };

  const data = await serverSdk.lawyerDashboardOrders.info(lawyerDashboardOrdersInfoRequest);

  console.log(data);
})();
```

## lists

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/orders/list`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerDashboardOrdersListsRequest](../models/LawyerDashboardOrdersListsRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerDashboardOrdersListsRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerDashboardOrdersListsRequest: LawyerDashboardOrdersListsRequest = {
    id: '19',
  };

  const data = await serverSdk.lawyerDashboardOrders.lists(lawyerDashboardOrdersListsRequest);

  console.log(data);
})();
```
