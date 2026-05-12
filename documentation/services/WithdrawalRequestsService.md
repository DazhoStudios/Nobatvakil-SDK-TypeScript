# WithdrawalRequestsService

A list of all methods in the `WithdrawalRequestsService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [create](#create) |             |
| [list](#list)     |             |

## create

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/wallet/withdrawal/create`

**Parameters**

| Name | Type                                                                            | Required | Description       |
| :--- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [WithdrawalRequestsCreateRequest](../models/WithdrawalRequestsCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, WithdrawalRequestsCreateRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const withdrawalRequestsCreateRequest: WithdrawalRequestsCreateRequest = {
    lawyerId: '79',
    cardId: '13',
  };

  const data = await serverSdk.withdrawalRequests.create(withdrawalRequestsCreateRequest);

  console.log(data);
})();
```

## list

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/wallet/withdrawal/list`

**Parameters**

| Name | Type                                                                        | Required | Description       |
| :--- | :-------------------------------------------------------------------------- | :------- | :---------------- |
| body | [WithdrawalRequestsListRequest](../models/WithdrawalRequestsListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, WithdrawalRequestsListRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const withdrawalRequestsListRequest: WithdrawalRequestsListRequest = {
    lawyerId: '1',
  };

  const data = await serverSdk.withdrawalRequests.list(withdrawalRequestsListRequest);

  console.log(data);
})();
```
