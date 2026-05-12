# BoostService

A list of all methods in the `BoostService` service. Click on the method name to view detailed information about that method.

| Methods       | Description |
| :------------ | :---------- |
| [list](#list) |             |
| [pay](#pay)   |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/boost/list`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [BoostListRequest](../models/BoostListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BoostListRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const boostListRequest: BoostListRequest = {
    lawyerId: '1',
  };

  const data = await serverSdk.boost.list(boostListRequest);

  console.log(data);
})();
```

## pay

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/boost/pay`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [BoostPayRequest](../models/BoostPayRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BoostPayRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const boostPayRequest: BoostPayRequest = {
    lawyerId: '1',
    subId: '1',
    paymentMethod: 'wallet',
  };

  const data = await serverSdk.boost.pay(boostPayRequest);

  console.log(data);
})();
```
