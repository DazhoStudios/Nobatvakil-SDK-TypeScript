# UserDashBoardOrdersCommentsService

A list of all methods in the `UserDashBoardOrdersCommentsService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [create](#create) |             |

## create

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/orders/comments/craete`

**Parameters**

| Name | Type                                                                                              | Required | Description       |
| :--- | :------------------------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [UserDashBoardOrdersCommentsCreateRequest](../models/UserDashBoardOrdersCommentsCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  NobatvakilServerSdk,
  UserDashBoardOrdersCommentsCreateRequest,
} from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const userDashBoardOrdersCommentsCreateRequest: UserDashBoardOrdersCommentsCreateRequest = {
    lawyerId: '1',
    orderId: '1',
    comment: 'عالی بود',
    serviceTypeId: '1',
    rate: '4',
    suggested: 'yes',
  };

  const data = await nobatvakilServerSdk.userDashBoardOrdersComments.create(
    userDashBoardOrdersCommentsCreateRequest,
  );

  console.log(data);
})();
```
