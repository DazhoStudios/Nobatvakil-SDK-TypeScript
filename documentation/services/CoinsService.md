# CoinsService

A list of all methods in the `CoinsService` service. Click on the method name to view detailed information about that method.

| Methods                     | Description |
| :-------------------------- | :---------- |
| [listHistory](#listhistory) |             |
| [tradeMarket](#trademarket) |             |

## listHistory

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/coins/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.coins.listHistory();

  console.log(data);
})();
```

## tradeMarket

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/coins/trade`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [TradeMarketRequest](../models/TradeMarketRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, TradeMarketRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const tradeMarketRequest: TradeMarketRequest = {
    coin: '1',
  };

  const data = await nobatvakilServerSdk.coins.tradeMarket(tradeMarketRequest);

  console.log(data);
})();
```
