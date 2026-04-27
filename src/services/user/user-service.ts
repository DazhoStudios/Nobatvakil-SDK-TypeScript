import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { WelcomeWizardRequest, welcomeWizardRequestRequest } from './models/welcome-wizard-request';

/**
 * Service class for UserService operations.
 * Provides methods to interact with UserService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class UserService extends BaseService {
  protected infoConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected welcomeWizardConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  /**
   * Sets method-level configuration for info.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInfoConfig(config: Partial<SdkConfig>): this {
    this.infoConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for welcomeWizard.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setWelcomeWizardConfig(config: Partial<SdkConfig>): this {
    this.welcomeWizardConfig = config;
    return this;
  }

  /**
 * # Get User Information
## Overview
This endpoint retrieves detailed information about a specific user from the server. It's designed to fetch user profile data, account details, and related information based on the authenticated session or provided credentials.

## Authentication
This endpoint likely requires authentication. Ensure that:
- Valid authentication tokens/credentials are included in the request headers
- The user has appropriate permissions to access user information
- Session cookies or bearer tokens are properly configured

## Request Details

**Method:** `POST`

**Endpoint:** `{{domin_server}}/api/user/info`

**Variables Used:**
- `domin_server` - The base URL of the API server (can be configured for different environments: production, staging, local)
- `user6059` - User identifier variable (may be used in headers, body, or authentication context)

**Request Body:** None (currently empty)

## Expected Response Format
The response typically includes:
```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "profile": {
    "firstName": "string",
    "lastName": "string",
    "avatar": "string"
  },
  "createdAt": "timestamp",
  "lastLogin": "timestamp",
  "status": "active|inactive"
}
```

## Example Use Cases

1. **User Profile Display**: Fetch user information to display on a profile page or dashboard
2. **Account Verification**: Retrieve user details to verify account status and permissions
3. **User Management**: Admin functionality to view and manage user accounts
4. **Session Validation**: Confirm user identity and retrieve associated data after login

## Notes

- The `domin_server` variable allows easy switching between different environments (local, staging, production)
- The `user6059` variable may need to be configured based on the specific user being queried
- Consider adding request body parameters if the API requires specific user identifiers or filters
- Response format may vary based on API version and user permissions
- Implement proper error handling for cases where user information is not found (404) or access is denied (403)
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async info(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.infoConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/info')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async welcomeWizard(
    body: WelcomeWizardRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.welcomeWizardConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/wizard')
      .setRequestSchema(welcomeWizardRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }
}
