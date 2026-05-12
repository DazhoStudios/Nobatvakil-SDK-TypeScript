# WalletService

A list of all methods in the `WalletService` service. Click on the method name to view detailed information about that method.

| Methods       | Description |
| :------------ | :---------- |
| [list](#list) |             |
| [add](#add)   |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/wallet/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.wallet.list();

  console.log(data);
})();
```

## add

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/wallet/add`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [WalletAddRequest](../models/WalletAddRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, WalletAddRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const walletAddRequest: WalletAddRequest = {
    amount: '10000',
  };

  const data = await serverSdk.wallet.add(walletAddRequest);

  console.log(data);
})();
```
