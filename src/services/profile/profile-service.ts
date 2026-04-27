import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  ProfileUpdateAvatarRequest,
  profileUpdateAvatarRequestRequest,
} from './models/profile-update-avatar-request';
import {
  ProfileUpdateProfileRequest,
  profileUpdateProfileRequestRequest,
} from './models/profile-update-profile-request';

/**
 * Service class for ProfileService operations.
 * Provides methods to interact with ProfileService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ProfileService extends BaseService {
  protected updateAvatarConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected updateProfileConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected deleteAvatarConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  /**
   * Sets method-level configuration for updateAvatar.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateAvatarConfig(config: Partial<SdkConfig>): this {
    this.updateAvatarConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateProfile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateProfileConfig(config: Partial<SdkConfig>): this {
    this.updateProfileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteAvatar.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteAvatarConfig(config: Partial<SdkConfig>): this {
    this.deleteAvatarConfig = config;
    return this;
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async updateAvatar(
    body: ProfileUpdateAvatarRequest,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateAvatarConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/update/avatar')
      .setRequestSchema(profileUpdateAvatarRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addBody(body)
      .setFilename(filename)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async updateProfile(
    body: ProfileUpdateProfileRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateProfileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/update/profile')
      .setRequestSchema(profileUpdateProfileRequestRequest)
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

  /**
 * # Delete User Avatar
## Overview
This endpoint removes the currently authenticated user's avatar image from their profile. Once deleted, the user's profile will revert to the default avatar or no avatar state.

## Authentication
This endpoint requires user authentication. The request uses the `{{local_user}}` variable which should contain a valid authentication token or session identifier.

**Authentication Method:** Bearer Token or Session-based (configured via `local_user` variable)

## Request Details

**HTTP Method:** `POST`

**Endpoint:** `{{domin_local}}/api/user/dashboard/update/delete-avatar`

**Request Body:** None required - this is a simple POST request with no payload needed.

**Headers:** Standard authentication headers are applied automatically through the collection or environment configuration.

## Response

### Success Response (200 OK)

When the avatar is successfully deleted, the API returns:

```json
{
  "status": 200,
  "data": {
    "message": "Avatar deleted successfully"
  },
  "time": "2026-02-12T09:19:35.746751Z"
}
```

**Response Fields:**
- `status` (integer): HTTP status code (200 for success)
- `data` (object): Contains the response data
  - `message` (string): Confirmation message indicating successful deletion
- `time` (string): ISO 8601 timestamp of when the request was processed

## Usage Notes

- This operation is **irreversible** - once deleted, the avatar cannot be recovered and must be re-uploaded if needed
- The user must be authenticated to delete their own avatar
- No request body or parameters are required
- The endpoint only affects the authenticated user's avatar (users cannot delete other users' avatars)
- After successful deletion, the user's profile will display the default avatar

## Variables Used

- `{{domin_local}}`: Base URL for the local development environment
- `{{local_user}}`: Authentication credentials for the current user session
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async deleteAvatar(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.deleteAvatarConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/update/delete-avatar')
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
}
