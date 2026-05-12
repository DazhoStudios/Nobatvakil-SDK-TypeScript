# LawyerDashboardAchievementBadgeService

A list of all methods in the `LawyerDashboardAchievementBadgeService` service. Click on the method name to view detailed information about that method.

| Methods       | Description |
| :------------ | :---------- |
| [list](#list) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/achievement/lists`

**Parameters**

| Name | Type                                                                                                  | Required | Description       |
| :--- | :---------------------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerDashboardAchievementBadgeListRequest](../models/LawyerDashboardAchievementBadgeListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerDashboardAchievementBadgeListRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerDashboardAchievementBadgeListRequest: LawyerDashboardAchievementBadgeListRequest = {
    lawyerId: '2',
  };

  const data = await serverSdk.lawyerDashboardAchievementBadge.list(
    lawyerDashboardAchievementBadgeListRequest,
  );

  console.log(data);
})();
```
