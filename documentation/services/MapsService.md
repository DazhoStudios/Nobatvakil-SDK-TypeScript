# MapsService

A list of all methods in the `MapsService` service. Click on the method name to view detailed information about that method.

| Methods       | Description |
| :------------ | :---------- |
| [list](#list) |             |
| [info](#info) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/maps/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.maps.list();

  console.log(data);
})();
```

## info

- HTTP Method: `POST`
- Endpoint: `/api/maps/info`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [MapsInfoRequest](../models/MapsInfoRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { MapsInfoRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const mapsInfoRequest: MapsInfoRequest = {
    id: '1',
  };

  const data = await nobatvakilServerSdk.maps.info(mapsInfoRequest);

  console.log(data);
})();
```
