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
import { LawyerDashboardWalletInfoRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const lawyerDashboardWalletInfoRequest: LawyerDashboardWalletInfoRequest = {
    lawyerId: '1',
  };

  const data = await nobatvakilServerSdk.lawyerDashboardWallet.info(
    lawyerDashboardWalletInfoRequest,
  );

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
import { AddBalanceRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const addBalanceRequest: AddBalanceRequest = {
    lawyerId: '1',
    amount: '100000',
  };

  const data = await nobatvakilServerSdk.lawyerDashboardWallet.addBalance(addBalanceRequest);

  console.log(data);
})();
```
