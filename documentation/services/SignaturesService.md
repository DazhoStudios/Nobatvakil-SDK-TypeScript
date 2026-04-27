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
import { NobatvakilServerSdk, SignaturesListRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const signaturesListRequest: SignaturesListRequest = {
    id: '2',
  };

  const data = await nobatvakilServerSdk.signatures.list(signaturesListRequest);

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
import { NobatvakilServerSdk, SignaturesCreateRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const signaturesCreateRequest: SignaturesCreateRequest = {
    title: 'امضای آقای مقدم',
    image: new ArrayBuffer(0),
  };

  const data = await nobatvakilServerSdk.signatures.create(signaturesCreateRequest);

  console.log(data);
})();
```
