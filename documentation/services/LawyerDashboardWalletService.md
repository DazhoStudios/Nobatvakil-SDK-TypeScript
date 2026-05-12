# LawyerDashboardWalletService

A list of all methods in the `LawyerDashboardWalletService` service. Click on the method name to view detailed information about that method.

| Methods                   | Description |
| :------------------------ | :---------- |
| [info](#info)             |             |
| [addBalance](#addbalance) |             |

## info

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/wallet/info`

**Parameters**

| Name | Type                                                                              | Required | Description       |
| :--- | :-------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerDashboardWalletInfoRequest](../models/LawyerDashboardWalletInfoRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerDashboardWalletInfoRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerDashboardWalletInfoRequest: LawyerDashboardWalletInfoRequest = {
    lawyerId: '1',
  };

  const data = await serverSdk.lawyerDashboardWallet.info(lawyerDashboardWalletInfoRequest);

  console.log(data);
})();
```

## addBalance

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/wallet/add_balance`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [AddBalanceRequest](../models/AddBalanceRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { AddBalanceRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const addBalanceRequest: AddBalanceRequest = {
    lawyerId: '1',
    amount: '100000',
  };

  const data = await serverSdk.lawyerDashboardWallet.addBalance(addBalanceRequest);

  console.log(data);
})();
```
