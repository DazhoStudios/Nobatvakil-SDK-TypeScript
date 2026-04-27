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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.wallet.list();

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
import { NobatvakilServerSdk, WalletAddRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const walletAddRequest: WalletAddRequest = {
    amount: '10000',
  };

  const data = await nobatvakilServerSdk.wallet.add(walletAddRequest);

  console.log(data);
})();
```
