# CommentsService

A list of all methods in the `CommentsService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [list](#list)     |             |
| [remove](#remove) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/comments/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.comments.list();

  console.log(data);
})();
```

## remove

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/comments/remove`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [CommentsRemoveRequest](../models/CommentsRemoveRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CommentsRemoveRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const commentsRemoveRequest: CommentsRemoveRequest = {
    id: '1',
  };

  const data = await serverSdk.comments.remove(commentsRemoveRequest);

  console.log(data);
})();
```
