# SignaturesService

A list of all methods in the `SignaturesService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [list](#list)     |             |
| [create](#create) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/signatrue/list`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [SignaturesListRequest](../models/SignaturesListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, SignaturesListRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const signaturesListRequest: SignaturesListRequest = {
    id: '2',
  };

  const data = await serverSdk.signatures.list(signaturesListRequest);

  console.log(data);
})();
```

## create

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/signatrue/create`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [SignaturesCreateRequest](../models/SignaturesCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, SignaturesCreateRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const signaturesCreateRequest: SignaturesCreateRequest = {
    title: 'امضای آقای مقدم',
    image: new ArrayBuffer(0),
  };

  const data = await serverSdk.signatures.create(signaturesCreateRequest);

  console.log(data);
})();
```
