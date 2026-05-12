# NotificationsService

A list of all methods in the `NotificationsService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [list](#list)     |             |
| [update](#update) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/settings/notifications/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.notifications.list();

  console.log(data);
})();
```

## update

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/settings/notifications/update`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [NotificationsUpdateRequest](../models/NotificationsUpdateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NotificationsUpdateRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const notificationsUpdateRequest: NotificationsUpdateRequest = {
    pusherEnabled: 'true',
    smsEnabled: 'true',
    emailEnabled: 'true',
  };

  const data = await serverSdk.notifications.update(notificationsUpdateRequest);

  console.log(data);
})();
```
