# TicketsService

A list of all methods in the `TicketsService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description |
| :------------------------------------ | :---------- |
| [lists](#lists)                       |             |
| [create](#create)                     |             |
| [getTicketMessage](#getticketmessage) |             |
| [sendMessage](#sendmessage)           |             |

## lists

- HTTP Method: `POST`
- Endpoint: `/api/tickets`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.tickets.lists();

  console.log(data);
})();
```

## create

- HTTP Method: `POST`
- Endpoint: `/api/tickets/create`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [TicketsCreateRequest](../models/TicketsCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, TicketsCreateRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const ticketsCreateRequest: TicketsCreateRequest = {
    subject: 'تست سیستم',
    message: 'سلام، مشکل دارم',
  };

  const data = await serverSdk.tickets.create(ticketsCreateRequest);

  console.log(data);
})();
```

## getTicketMessage

- HTTP Method: `POST`
- Endpoint: `/api/tickets/1`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.tickets.getTicketMessage();

  console.log(data);
})();
```

## sendMessage

- HTTP Method: `POST`
- Endpoint: `/api/tickets/1/messages`

**Parameters**

| Name | Type                                                                | Required | Description       |
| :--- | :------------------------------------------------------------------ | :------- | :---------------- |
| body | [TicketsSendMessageRequest](../models/TicketsSendMessageRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, TicketsSendMessageRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const ticketsSendMessageRequest: TicketsSendMessageRequest = {
    message: 'پیام',
  };

  const data = await serverSdk.tickets.sendMessage(ticketsSendMessageRequest);

  console.log(data);
})();
```
