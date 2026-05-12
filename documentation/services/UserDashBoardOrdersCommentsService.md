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
import { ServerSdk, UserDashBoardOrdersCommentsCreateRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const userDashBoardOrdersCommentsCreateRequest: UserDashBoardOrdersCommentsCreateRequest = {
    lawyerId: '1',
    orderId: '1',
    comment: 'عالی بود',
    serviceTypeId: '1',
    rate: '4',
    suggested: 'yes',
  };

  const data = await serverSdk.userDashBoardOrdersComments.create(
    userDashBoardOrdersCommentsCreateRequest,
  );

  console.log(data);
})();
```
