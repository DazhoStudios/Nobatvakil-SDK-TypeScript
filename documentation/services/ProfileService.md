# ProfileService

A list of all methods in the `ProfileService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [updateAvatar](#updateavatar)   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [updateProfile](#updateprofile) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [deleteAvatar](#deleteavatar)   | # Delete User Avatar ## Overview This endpoint removes the currently authenticated user's avatar image from their profile. Once deleted, the user's profile will revert to the default avatar or no avatar state. ## Authentication This endpoint requires user authentication. The request uses the `{{local_user}}` variable which should contain a valid authentication token or session identifier. **Authentication Method:** Bearer Token or Session-based (configured via `local_user` variable) ## Request Details **HTTP Method:** `POST` **Endpoint:** `{{domin_local}}/api/user/dashboard/update/delete-avatar` **Request Body:** None required - this is a simple POST request with no payload needed. **Headers:** Standard authentication headers are applied automatically through the collection or environment configuration. ## Response ### Success Response (200 OK) When the avatar is successfully deleted, the API returns: `json {   "status": 200,   "data": {     "message": "Avatar deleted successfully"   },   "time": "2026-02-12T09:19:35.746751Z" } ` **Response Fields:** - `status` (integer): HTTP status code (200 for success) - `data` (object): Contains the response data - `message` (string): Confirmation message indicating successful deletion - `time` (string): ISO 8601 timestamp of when the request was processed ## Usage Notes - This operation is **irreversible** - once deleted, the avatar cannot be recovered and must be re-uploaded if needed - The user must be authenticated to delete their own avatar - No request body or parameters are required - The endpoint only affects the authenticated user's avatar (users cannot delete other users' avatars) - After successful deletion, the user's profile will display the default avatar ## Variables Used - `{{domin_local}}`: Base URL for the local development environment - `{{local_user}}`: Authentication credentials for the current user session |

## updateAvatar

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/update/avatar`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [ProfileUpdateAvatarRequest](../models/ProfileUpdateAvatarRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, ProfileUpdateAvatarRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const profileUpdateAvatarRequest: ProfileUpdateAvatarRequest = {
    id: '1',
    image: new ArrayBuffer(0),
  };

  const data = await nobatvakilServerSdk.profile.updateAvatar(profileUpdateAvatarRequest);

  console.log(data);
})();
```

## updateProfile

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/update/profile`

**Parameters**

| Name | Type                                                                    | Required | Description       |
| :--- | :---------------------------------------------------------------------- | :------- | :---------------- |
| body | [ProfileUpdateProfileRequest](../models/ProfileUpdateProfileRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, ProfileUpdateProfileRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const profileUpdateProfileRequest: ProfileUpdateProfileRequest = {
    firstName: 'Yousef',
    lastName: 'Moghadam',
    email: 'yousef.wersy@gmail.com',
    naturalCode: '1234567899',
    gender: 'male',
  };

  const data = await nobatvakilServerSdk.profile.updateProfile(profileUpdateProfileRequest);

  console.log(data);
})();
```

## deleteAvatar

# Delete User Avatar ## Overview This endpoint removes the currently authenticated user's avatar image from their profile. Once deleted, the user's profile will revert to the default avatar or no avatar state. ## Authentication This endpoint requires user authentication. The request uses the `{{local_user}}` variable which should contain a valid authentication token or session identifier. **Authentication Method:** Bearer Token or Session-based (configured via `local_user` variable) ## Request Details **HTTP Method:** `POST` **Endpoint:** `{{domin_local}}/api/user/dashboard/update/delete-avatar` **Request Body:** None required - this is a simple POST request with no payload needed. **Headers:** Standard authentication headers are applied automatically through the collection or environment configuration. ## Response ### Success Response (200 OK) When the avatar is successfully deleted, the API returns: `json {   "status": 200,   "data": {     "message": "Avatar deleted successfully"   },   "time": "2026-02-12T09:19:35.746751Z" } ` **Response Fields:** - `status` (integer): HTTP status code (200 for success) - `data` (object): Contains the response data - `message` (string): Confirmation message indicating successful deletion - `time` (string): ISO 8601 timestamp of when the request was processed ## Usage Notes - This operation is **irreversible** - once deleted, the avatar cannot be recovered and must be re-uploaded if needed - The user must be authenticated to delete their own avatar - No request body or parameters are required - The endpoint only affects the authenticated user's avatar (users cannot delete other users' avatars) - After successful deletion, the user's profile will display the default avatar ## Variables Used - `{{domin_local}}`: Base URL for the local development environment - `{{local_user}}`: Authentication credentials for the current user session

- HTTP Method: `POST`
- Endpoint: `/api/user/dashboard/update/delete-avatar`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.profile.deleteAvatar();

  console.log(data);
})();
```
