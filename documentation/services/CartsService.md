# CartsService

A list of all methods in the `CartsService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [list](#list)     |             |
| [remove](#remove) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/carts/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.carts.list();

  console.log(data);
})();
```

## remove

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/carts/remove`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [CartsRemoveRequest](../models/CartsRemoveRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CartsRemoveRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const cartsRemoveRequest: CartsRemoveRequest = {
    id: '1',
  };

  const data = await nobatvakilServerSdk.carts.remove(cartsRemoveRequest);

  console.log(data);
})();
```
