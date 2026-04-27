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
import { JoinRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const joinRequest: JoinRequest = {
    userName: 'Yousef Moghadam',
  };

  const data = await nobatvakilServerSdk.calls.join(joinRequest);

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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.calls.end();

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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.calls.list();

  console.log(data);
})();
```
