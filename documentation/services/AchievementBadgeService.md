# AchievementBadgeService

A list of all methods in the `AchievementBadgeService` service. Click on the method name to view detailed information about that method.

| Methods       | Description |
| :------------ | :---------- |
| [list](#list) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/achievement/lists`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.achievementBadge.list();

  console.log(data);
})();
```
