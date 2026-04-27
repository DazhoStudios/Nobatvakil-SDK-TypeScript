# CardsService

A list of all methods in the `CardsService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [list](#list)     |             |
| [create](#create) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/wallet/cards/list`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [CardsListRequest](../models/CardsListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CardsListRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const cardsListRequest: CardsListRequest = {
    lawyerId: '1',
  };

  const data = await nobatvakilServerSdk.cards.list(cardsListRequest);

  console.log(data);
})();
```

## create

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/wallet/cards/create`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [CardsCreateRequest](../models/CardsCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CardsCreateRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const cardsCreateRequest: CardsCreateRequest = {
    lawyerId: '1',
    shebaNumber: '6022365465456454654654654',
  };

  const data = await nobatvakilServerSdk.cards.create(cardsCreateRequest);

  console.log(data);
})();
```
