# UserService

A list of all methods in the `UserService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [info](#info)                   | # Get User Information ## Overview This endpoint retrieves detailed information about a specific user from the server. It's designed to fetch user profile data, account details, and related information based on the authenticated session or provided credentials. ## Authentication This endpoint likely requires authentication. Ensure that: - Valid authentication tokens/credentials are included in the request headers - The user has appropriate permissions to access user information - Session cookies or bearer tokens are properly configured ## Request Details **Method:** `POST` **Endpoint:** `{{domin_server}}/api/user/info` **Variables Used:** - `domin_server` - The base URL of the API server (can be configured for different environments: production, staging, local) - `user6059` - User identifier variable (may be used in headers, body, or authentication context) **Request Body:** None (currently empty) ## Expected Response Format The response typically includes: `json {   "id": "string",   "username": "string",   "email": "string",   "profile": {     "firstName": "string",     "lastName": "string",     "avatar": "string"   },   "createdAt": "timestamp",   "lastLogin": "timestamp",   "status": "active\|inactive" } ` ## Example Use Cases 1. **User Profile Display**: Fetch user information to display on a profile page or dashboard 2. **Account Verification**: Retrieve user details to verify account status and permissions 3. **User Management**: Admin functionality to view and manage user accounts 4. **Session Validation**: Confirm user identity and retrieve associated data after login ## Notes - The `domin_server` variable allows easy switching between different environments (local, staging, production) - The `user6059` variable may need to be configured based on the specific user being queried - Consider adding request body parameters if the API requires specific user identifiers or filters - Response format may vary based on API version and user permissions - Implement proper error handling for cases where user information is not found (404) or access is denied (403) |
| [welcomeWizard](#welcomewizard) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## info

# Get User Information ## Overview This endpoint retrieves detailed information about a specific user from the server. It's designed to fetch user profile data, account details, and related information based on the authenticated session or provided credentials. ## Authentication This endpoint likely requires authentication. Ensure that: - Valid authentication tokens/credentials are included in the request headers - The user has appropriate permissions to access user information - Session cookies or bearer tokens are properly configured ## Request Details **Method:** `POST` **Endpoint:** `{{domin_server}}/api/user/info` **Variables Used:** - `domin_server` - The base URL of the API server (can be configured for different environments: production, staging, local) - `user6059` - User identifier variable (may be used in headers, body, or authentication context) **Request Body:** None (currently empty) ## Expected Response Format The response typically includes: `json {   "id": "string",   "username": "string",   "email": "string",   "profile": {     "firstName": "string",     "lastName": "string",     "avatar": "string"   },   "createdAt": "timestamp",   "lastLogin": "timestamp",   "status": "active\|inactive" } ` ## Example Use Cases 1. **User Profile Display**: Fetch user information to display on a profile page or dashboard 2. **Account Verification**: Retrieve user details to verify account status and permissions 3. **User Management**: Admin functionality to view and manage user accounts 4. **Session Validation**: Confirm user identity and retrieve associated data after login ## Notes - The `domin_server` variable allows easy switching between different environments (local, staging, production) - The `user6059` variable may need to be configured based on the specific user being queried - Consider adding request body parameters if the API requires specific user identifiers or filters - Response format may vary based on API version and user permissions - Implement proper error handling for cases where user information is not found (404) or access is denied (403)

- HTTP Method: `POST`
- Endpoint: `/api/user/info`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.user.info();

  console.log(data);
})();
```

## welcomeWizard

- HTTP Method: `POST`
- Endpoint: `/api/user/wizard`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [WelcomeWizardRequest](../models/WelcomeWizardRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, WelcomeWizardRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const welcomeWizardRequest: WelcomeWizardRequest = {
    firstName: 'Yousef',
    lastName: 'Moghadam',
    email: 'yousef.wersy999@gmail.com',
    naturalCode: '12345678888',
    gender: 'male',
  };

  const data = await serverSdk.user.welcomeWizard(welcomeWizardRequest);

  console.log(data);
})();
```
