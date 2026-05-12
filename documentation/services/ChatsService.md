# ChatsService

A list of all methods in the `ChatsService` service. Click on the method name to view detailed information about that method.

| Methods                     | Description |
| :-------------------------- | :---------- |
| [list](#list)               |             |
| [messageList](#messagelist) |             |
| [sendMessage](#sendmessage) |             |

## list

- HTTP Method: `POST`
- Endpoint: `/api/chats/list`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.chats.list();

  console.log(data);
})();
```

## messageList

- HTTP Method: `POST`
- Endpoint: `/api/chats/message`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [MessageListRequest](../models/MessageListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { MessageListRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const messageListRequest: MessageListRequest = {
    id: '3',
  };

  const data = await serverSdk.chats.messageList(messageListRequest);

  console.log(data);
})();
```

## sendMessage

- HTTP Method: `POST`
- Endpoint: `/api/chats/send-message`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [ChatsSendMessageRequest](../models/ChatsSendMessageRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ChatsSendMessageRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const chatsSendMessageRequest: ChatsSendMessageRequest = {
    id: '1',
    message: 'سلام، چطوری؟',
    files: new ArrayBuffer(0),
  };

  const data = await serverSdk.chats.sendMessage(chatsSendMessageRequest);

  console.log(data);
})();
```
