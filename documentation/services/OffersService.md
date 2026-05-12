# OffersService

A list of all methods in the `OffersService` service. Click on the method name to view detailed information about that method.

| Methods                     | Description |
| :-------------------------- | :---------- |
| [listMyOffer](#listmyoffer) |             |

## listMyOffer

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/offers/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.offers.listMyOffer();

  console.log(data);
})();
```
