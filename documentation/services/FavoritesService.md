# FavoritesService

A list of all methods in the `FavoritesService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [list](#list)     |             |
| [add](#add)       |             |
| [remove](#remove) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/favorites/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.favorites.list();

  console.log(data);
})();
```

## add

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/favorites/add`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [FavoritesAddRequest](../models/FavoritesAddRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { FavoritesAddRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const favoritesAddRequest: FavoritesAddRequest = {
    id: '10',
  };

  const data = await nobatvakilServerSdk.favorites.add(favoritesAddRequest);

  console.log(data);
})();
```

## remove

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/favorites/remove`

**Parameters**

| Name | Type                                                          | Required | Description       |
| :--- | :------------------------------------------------------------ | :------- | :---------------- |
| body | [FavoritesRemoveRequest](../models/FavoritesRemoveRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { FavoritesRemoveRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const favoritesRemoveRequest: FavoritesRemoveRequest = {
    id: '10',
  };

  const data = await nobatvakilServerSdk.favorites.remove(favoritesRemoveRequest);

  console.log(data);
})();
```
