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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.blogs.list();

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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.blogs.info();

  console.log(data);
})();
```
