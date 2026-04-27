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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.comments.list();

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
import { CommentsRemoveRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const commentsRemoveRequest: CommentsRemoveRequest = {
    id: '1',
  };

  const data = await nobatvakilServerSdk.comments.remove(commentsRemoveRequest);

  console.log(data);
})();
```
