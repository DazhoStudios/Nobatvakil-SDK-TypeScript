import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  LawyerProfileUpdateProfileRequest,
  lawyerProfileUpdateProfileRequestRequest,
} from './models/lawyer-profile-update-profile-request';
import {
  LawyerProfileUpdateAvatarRequest,
  lawyerProfileUpdateAvatarRequestRequest,
} from './models/lawyer-profile-update-avatar-request';
import { DeleteAvatarRequest, deleteAvatarRequestRequest } from './models/delete-avatar-request';

/**
 * Service class for LawyerProfileService operations.
 * Provides methods to interact with LawyerProfileService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class LawyerProfileService extends BaseService {
  protected updateProfileConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected updateAvatarConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected deleteAvatarConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

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
   * Sets method-level configuration for updateAvatar.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateAvatarConfig(config: Partial<SdkConfig>): this {
    this.updateAvatarConfig = config;
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
  async updateProfile(
    body: LawyerProfileUpdateProfileRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateProfileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/update-profile')
      .setRequestSchema(lawyerProfileUpdateProfileRequestRequest)
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
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async updateAvatar(
    body: LawyerProfileUpdateAvatarRequest,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateAvatarConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/update-avatar')
      .setRequestSchema(lawyerProfileUpdateAvatarRequestRequest)
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
  async deleteAvatar(body: DeleteAvatarRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.deleteAvatarConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/delete-avatar')
      .setRequestSchema(deleteAvatarRequestRequest)
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
