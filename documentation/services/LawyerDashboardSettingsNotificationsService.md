# LawyerDashboardSettingsNotificationsService

A list of all methods in the `LawyerDashboardSettingsNotificationsService` service. Click on the method name to view detailed information about that method.

| Methods           | Description |
| :---------------- | :---------- |
| [list](#list)     |             |
| [update](#update) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/settings/notifications/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.lawyerDashboardSettingsNotifications.list();

  console.log(data);
})();
```

## update

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/settings/notifications/update`

**Parameters**

| Name | Type                                                                                                                | Required | Description       |
| :--- | :------------------------------------------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [LawyerDashboardSettingsNotificationsUpdateRequest](../models/LawyerDashboardSettingsNotificationsUpdateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerDashboardSettingsNotificationsUpdateRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerDashboardSettingsNotificationsUpdateRequest: LawyerDashboardSettingsNotificationsUpdateRequest =
    {
      pusherEnabled: 'true',
      smsEnabled: 'true',
      emailEnabled: 'true',
    };

  const data = await serverSdk.lawyerDashboardSettingsNotifications.update(
    lawyerDashboardSettingsNotificationsUpdateRequest,
  );

  console.log(data);
})();
```
