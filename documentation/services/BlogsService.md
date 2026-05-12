# BlogsService

A list of all methods in the `BlogsService` service. Click on the method name to view detailed information about that method.

| Methods       | Description |
| :------------ | :---------- |
| [list](#list) |             |
| [info](#info) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/blogs/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.blogs.list();

  console.log(data);
})();
```

## info

- HTTP Method: `POST`
- Endpoint: `/api/blogs/1`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.blogs.info();

  console.log(data);
})();
```
