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
import { NobatvakilServerSdk, OfferRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const offerRequest: OfferRequest = {
    fromPeer: 'from_peer',
    sdp: 'sdp',
  };

  const data = await nobatvakilServerSdk.tools.offer(offerRequest);

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
import { AnswerRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const answerRequest: AnswerRequest = {
    toPeer: 'to_peer',
    sdp: 'sdp',
  };

  const data = await nobatvakilServerSdk.tools.answer(answerRequest);

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
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.tools.ice();

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
import { MemberOfRoomRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const memberOfRoomRequest: MemberOfRoomRequest = {
    peerId: 'peer_id',
  };

  const data = await nobatvakilServerSdk.tools.memberOfRoom(memberOfRoomRequest);

  console.log(data);
})();
```
