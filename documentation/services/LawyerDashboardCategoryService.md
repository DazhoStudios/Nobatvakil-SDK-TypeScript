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
import { LawyerDashboardCategoryListsRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const lawyerDashboardCategoryListsRequest: LawyerDashboardCategoryListsRequest = {
    id: '2',
  };

  const data = await nobatvakilServerSdk.lawyerDashboardCategory.lists(
    lawyerDashboardCategoryListsRequest,
  );

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
import { LawyerDashboardCategoryCreateRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const lawyerDashboardCategoryCreateRequest: LawyerDashboardCategoryCreateRequest = {
    id: '2',
    categoryId: '1',
  };

  const data = await nobatvakilServerSdk.lawyerDashboardCategory.create(
    lawyerDashboardCategoryCreateRequest,
  );

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
import { LawyerDashboardCategoryRemoveRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const lawyerDashboardCategoryRemoveRequest: LawyerDashboardCategoryRemoveRequest = {
    id: '1',
    categoryId: '1',
  };

  const data = await nobatvakilServerSdk.lawyerDashboardCategory.remove(
    lawyerDashboardCategoryRemoveRequest,
  );

  console.log(data);
})();
```
