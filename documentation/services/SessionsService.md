# SessionsService

A list of all methods in the `SessionsService` service. Click on the method name to view detailed information about that method.

| Methods                 | Description |
| :---------------------- | :---------- |
| [list](#list)           |             |
| [remove](#remove)       |             |
| [removeAll](#removeall) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/settings/session/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.sessions.list();

  console.log(data);
})();
```

## remove

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/settings/session/remove`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [SessionsRemoveRequest](../models/SessionsRemoveRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, SessionsRemoveRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const sessionsRemoveRequest: SessionsRemoveRequest = {
    id: '1',
  };

  const data = await serverSdk.sessions.remove(sessionsRemoveRequest);

  console.log(data);
})();
```

## removeAll

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/settings/session/remove-all`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.sessions.removeAll();

  console.log(data);
})();
```
