# ToolsService

A list of all methods in the `ToolsService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description |
| :---------------------------- | :---------- |
| [offer](#offer)               |             |
| [answer](#answer)             |             |
| [ice](#ice)                   |             |
| [memberOfRoom](#memberofroom) |             |

## offer

- HTTP Method: `POST`
- Endpoint: `/api/calls/1/offer`

**Parameters**

| Name | Type                                      | Required | Description       |
| :--- | :---------------------------------------- | :------- | :---------------- |
| body | [OfferRequest](../models/OfferRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { OfferRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const offerRequest: OfferRequest = {
    fromPeer: 'from_peer',
    sdp: 'sdp',
  };

  const data = await serverSdk.tools.offer(offerRequest);

  console.log(data);
})();
```

## answer

- HTTP Method: `POST`
- Endpoint: `/api/calls/1/answer`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [AnswerRequest](../models/AnswerRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { AnswerRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const answerRequest: AnswerRequest = {
    toPeer: 'to_peer',
    sdp: 'sdp',
  };

  const data = await serverSdk.tools.answer(answerRequest);

  console.log(data);
})();
```

## ice

- HTTP Method: `POST`
- Endpoint: `/api/calls/1/ice`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.tools.ice();

  console.log(data);
})();
```

## memberOfRoom

- HTTP Method: `GET`
- Endpoint: `/api/calls/1/sdp`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [MemberOfRoomRequest](../models/MemberOfRoomRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { MemberOfRoomRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const memberOfRoomRequest: MemberOfRoomRequest = {
    peerId: 'peer_id',
  };

  const data = await serverSdk.tools.memberOfRoom(memberOfRoomRequest);

  console.log(data);
})();
```
