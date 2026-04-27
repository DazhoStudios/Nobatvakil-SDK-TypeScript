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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.chats.list();

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
import { MessageListRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const messageListRequest: MessageListRequest = {
    id: '3',
  };

  const data = await nobatvakilServerSdk.chats.messageList(messageListRequest);

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
import { ChatsSendMessageRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const chatsSendMessageRequest: ChatsSendMessageRequest = {
    id: '1',
    message: 'سلام، چطوری؟',
    files: new ArrayBuffer(0),
  };

  const data = await nobatvakilServerSdk.chats.sendMessage(chatsSendMessageRequest);

  console.log(data);
})();
```
