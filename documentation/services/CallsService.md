# CallsService

A list of all methods in the `CallsService` service. Click on the method name to view detailed information about that method.

| Methods       | Description |
| :------------ | :---------- |
| [join](#join) |             |
| [end](#end)   |             |
| [list](#list) |             |

## join

- HTTP Method: `POST`
- Endpoint: `/api/calls/udgsdghewbd8745/join`

**Parameters**

| Name | Type                                    | Required | Description       |
| :--- | :-------------------------------------- | :------- | :---------------- |
| body | [JoinRequest](../models/JoinRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { JoinRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const joinRequest: JoinRequest = {
    userName: 'Yousef Moghadam',
  };

  const data = await serverSdk.calls.join(joinRequest);

  console.log(data);
})();
```

## end

- HTTP Method: `POST`
- Endpoint: `/api/calls/udgsdghewbd8745/end`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.calls.end();

  console.log(data);
})();
```

## list

- HTTP Method: `POST`
- Endpoint: `/api/calls/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.calls.list();

  console.log(data);
})();
```
