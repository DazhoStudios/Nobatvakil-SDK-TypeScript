# LawyerDashboardCategoryService

A list of all methods in the `LawyerDashboardCategoryService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [lists](#lists)   |             |
| [create](#create) |             |
| [remove](#remove) |             |

## lists

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/category/list`

**Parameters**

| Name | Type                                                                                    | Required | Description       |
| :--- | :-------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerDashboardCategoryListsRequest](../models/LawyerDashboardCategoryListsRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerDashboardCategoryListsRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerDashboardCategoryListsRequest: LawyerDashboardCategoryListsRequest = {
    id: '79',
  };

  const data = await serverSdk.lawyerDashboardCategory.lists(lawyerDashboardCategoryListsRequest);

  console.log(data);
})();
```

## create

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/category/create`

**Parameters**

| Name | Type                                                                                      | Required | Description       |
| :--- | :---------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerDashboardCategoryCreateRequest](../models/LawyerDashboardCategoryCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerDashboardCategoryCreateRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerDashboardCategoryCreateRequest: LawyerDashboardCategoryCreateRequest = {
    id: '2',
    categoryId: '1',
  };

  const data = await serverSdk.lawyerDashboardCategory.create(lawyerDashboardCategoryCreateRequest);

  console.log(data);
})();
```

## remove

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/category/remove`

**Parameters**

| Name | Type                                                                                      | Required | Description       |
| :--- | :---------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerDashboardCategoryRemoveRequest](../models/LawyerDashboardCategoryRemoveRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerDashboardCategoryRemoveRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerDashboardCategoryRemoveRequest: LawyerDashboardCategoryRemoveRequest = {
    id: '1',
    categoryId: '1',
  };

  const data = await serverSdk.lawyerDashboardCategory.remove(lawyerDashboardCategoryRemoveRequest);

  console.log(data);
})();
```
