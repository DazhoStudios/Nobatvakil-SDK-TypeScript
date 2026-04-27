# LawyerProfileService

A list of all methods in the `LawyerProfileService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description |
| :------------------------------ | :---------- |
| [updateProfile](#updateprofile) |             |
| [updateAvatar](#updateavatar)   |             |
| [deleteAvatar](#deleteavatar)   |             |

## updateProfile

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/update-profile`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerProfileUpdateProfileRequest](../models/LawyerProfileUpdateProfileRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerProfileUpdateProfileRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const lawyerProfileUpdateProfileRequest: LawyerProfileUpdateProfileRequest = {
    id: '3',
    firstName: 'Yousef',
    lastName: 'Moghadam',
    biography: 'test',
    phoneNumber: '09106059954',
    startWorkingDate: '2025/10/06',
    email: 'vandadmarket@gmail.com',
  };

  const data = await nobatvakilServerSdk.lawyerProfile.updateProfile(
    lawyerProfileUpdateProfileRequest,
  );

  console.log(data);
})();
```

## updateAvatar

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/update-avatar`

**Parameters**

| Name | Type                                                                              | Required | Description       |
| :--- | :-------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [LawyerProfileUpdateAvatarRequest](../models/LawyerProfileUpdateAvatarRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerProfileUpdateAvatarRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const lawyerProfileUpdateAvatarRequest: LawyerProfileUpdateAvatarRequest = {
    id: '2',
    image: new ArrayBuffer(0),
  };

  const data = await nobatvakilServerSdk.lawyerProfile.updateAvatar(
    lawyerProfileUpdateAvatarRequest,
  );

  console.log(data);
})();
```

## deleteAvatar

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/delete-avatar`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [DeleteAvatarRequest](../models/DeleteAvatarRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { DeleteAvatarRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const deleteAvatarRequest: DeleteAvatarRequest = {
    id: '1',
  };

  const data = await nobatvakilServerSdk.lawyerProfile.deleteAvatar(deleteAvatarRequest);

  console.log(data);
})();
```
