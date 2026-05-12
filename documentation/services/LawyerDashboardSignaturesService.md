# LawyerDashboardSignaturesService

A list of all methods in the `LawyerDashboardSignaturesService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [list](#list)     |             |
| [create](#create) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/signatrue/list`

**Parameters**

| Name | Type                                                                                      | Required | Description       |
| :--- | :---------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerDashboardSignaturesListRequest](../models/LawyerDashboardSignaturesListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerDashboardSignaturesListRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerDashboardSignaturesListRequest: LawyerDashboardSignaturesListRequest = {
    id: '2',
  };

  const data = await serverSdk.lawyerDashboardSignatures.list(lawyerDashboardSignaturesListRequest);

  console.log(data);
})();
```

## create

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/signatrue/create`

**Parameters**

| Name | Type                                                                                          | Required | Description       |
| :--- | :-------------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerDashboardSignaturesCreateRequest](../models/LawyerDashboardSignaturesCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerDashboardSignaturesCreateRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerDashboardSignaturesCreateRequest: LawyerDashboardSignaturesCreateRequest = {
    lawyerId: '2',
    title: 'امضای اصلی',
    image: new ArrayBuffer(0),
  };

  const data = await serverSdk.lawyerDashboardSignatures.create(
    lawyerDashboardSignaturesCreateRequest,
  );

  console.log(data);
})();
```
