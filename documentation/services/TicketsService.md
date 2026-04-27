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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.tickets.lists();

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
import { NobatvakilServerSdk, TicketsCreateRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const ticketsCreateRequest: TicketsCreateRequest = {
    subject: 'تست سیستم',
    message: 'سلام، مشکل دارم',
  };

  const data = await nobatvakilServerSdk.tickets.create(ticketsCreateRequest);

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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.tickets.getTicketMessage();

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
import { NobatvakilServerSdk, TicketsSendMessageRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const ticketsSendMessageRequest: TicketsSendMessageRequest = {
    message: 'پیام',
  };

  const data = await nobatvakilServerSdk.tickets.sendMessage(ticketsSendMessageRequest);

  console.log(data);
})();
```
