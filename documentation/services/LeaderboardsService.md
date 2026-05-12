# LeaderboardsService

A list of all methods in the `LeaderboardsService` service. Click on the method name to view detailed information about that method.

| Methods       | Description |
| :------------ | :---------- |
| [list](#list) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/leaderboards`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.leaderboards.list();

  console.log(data);
})();
```
