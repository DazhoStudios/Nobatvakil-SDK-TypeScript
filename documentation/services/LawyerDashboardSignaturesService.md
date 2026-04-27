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
import { LawyerDashboardSignaturesListRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const lawyerDashboardSignaturesListRequest: LawyerDashboardSignaturesListRequest = {
    id: '2',
  };

  const data = await nobatvakilServerSdk.lawyerDashboardSignatures.list(
    lawyerDashboardSignaturesListRequest,
  );

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
import { LawyerDashboardSignaturesCreateRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const lawyerDashboardSignaturesCreateRequest: LawyerDashboardSignaturesCreateRequest = {
    lawyerId: '2',
    title: 'امضای اصلی',
    image: new ArrayBuffer(0),
  };

  const data = await nobatvakilServerSdk.lawyerDashboardSignatures.create(
    lawyerDashboardSignaturesCreateRequest,
  );

  console.log(data);
})();
```
