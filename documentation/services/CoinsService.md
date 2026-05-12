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
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.coins.listHistory();

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
import { ServerSdk, TradeMarketRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const tradeMarketRequest: TradeMarketRequest = {
    coin: '1',
  };

  const data = await serverSdk.coins.tradeMarket(tradeMarketRequest);

  console.log(data);
})();
```
