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
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.maps.list();

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
import { MapsInfoRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const mapsInfoRequest: MapsInfoRequest = {
    id: '1',
  };

  const data = await serverSdk.maps.info(mapsInfoRequest);

  console.log(data);
})();
```
