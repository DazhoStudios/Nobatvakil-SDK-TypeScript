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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.offers.listMyOffer();

  console.log(data);
})();
```
