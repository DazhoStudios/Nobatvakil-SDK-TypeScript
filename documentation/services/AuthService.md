# AuthService

A list of all methods in the `AuthService` service. Click on the method name to view detailed information about that method.

| Methods                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [sendOtp](#sendotp)     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [verifyOtp](#verifyotp) | # Verify OTP This endpoint verifies a one-time password (OTP) that was sent to a user's phone number during the authentication process. ## Endpoint Details **Method:** POST **URL:** `{{domin_server}}/api/auth/verifyOTP` ## Request Parameters The request uses **multipart/form-data** body with the following required parameters: \| Parameter \| Type \| Required \| Description \| Example \| \|-----------\|------\|----------\|-------------\|---------\| \| `phone_number` \| string \| Yes \| The phone number that received the OTP code \| 09109693365 \| \| `code` \| string \| Yes \| The 6-digit OTP code to verify \| 659443 \| ## Use Case & Workflow This endpoint is part of the phone-based authentication flow: 1. User initiates authentication by providing their phone number 2. System sends a 6-digit OTP code via SMS to the provided phone number 3. User receives the OTP code on their phone 4. User submits both their phone number and the received OTP code to this endpoint 5. System verifies the code matches what was sent 6. Upon successful verification, user is authenticated ## Authentication Flow Notes - The OTP code is typically valid for a limited time (e.g., 5-10 minutes) - Each OTP code can usually only be used once - Failed verification attempts may be rate-limited to prevent brute force attacks - After successful verification, the response typically includes an authentication token or session identifier - This is the second step in a two-factor authentication process using phone numbers |

## sendOtp

- HTTP Method: `POST`
- Endpoint: `/api/auth/sendOTP`

**Parameters**

| Name | Type                                          | Required | Description       |
| :--- | :-------------------------------------------- | :------- | :---------------- |
| body | [SendOtpRequest](../models/SendOtpRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, SendOtpRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const sendOtpRequest: SendOtpRequest = {
    phoneNumber: '09106059954',
  };

  const data = await nobatvakilServerSdk.auth.sendOtp(sendOtpRequest);

  console.log(data);
})();
```

## verifyOtp

# Verify OTP This endpoint verifies a one-time password (OTP) that was sent to a user's phone number during the authentication process. ## Endpoint Details **Method:** POST **URL:** `{{domin_server}}/api/auth/verifyOTP` ## Request Parameters The request uses **multipart/form-data** body with the following required parameters: \| Parameter \| Type \| Required \| Description \| Example \| \|-----------\|------\|----------\|-------------\|---------\| \| `phone_number` \| string \| Yes \| The phone number that received the OTP code \| 09109693365 \| \| `code` \| string \| Yes \| The 6-digit OTP code to verify \| 659443 \| ## Use Case & Workflow This endpoint is part of the phone-based authentication flow: 1. User initiates authentication by providing their phone number 2. System sends a 6-digit OTP code via SMS to the provided phone number 3. User receives the OTP code on their phone 4. User submits both their phone number and the received OTP code to this endpoint 5. System verifies the code matches what was sent 6. Upon successful verification, user is authenticated ## Authentication Flow Notes - The OTP code is typically valid for a limited time (e.g., 5-10 minutes) - Each OTP code can usually only be used once - Failed verification attempts may be rate-limited to prevent brute force attacks - After successful verification, the response typically includes an authentication token or session identifier - This is the second step in a two-factor authentication process using phone numbers

- HTTP Method: `POST`
- Endpoint: `/api/auth/verifyOTP`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [VerifyOtpRequest](../models/VerifyOtpRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, VerifyOtpRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const verifyOtpRequest: VerifyOtpRequest = {
    phoneNumber: '09022525374',
    code: '161138',
  };

  const data = await nobatvakilServerSdk.auth.verifyOtp(verifyOtpRequest);

  console.log(data);
})();
```
