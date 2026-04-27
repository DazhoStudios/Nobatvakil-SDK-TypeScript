import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  LawyerDashboardAchievementBadgeListRequest,
  lawyerDashboardAchievementBadgeListRequestRequest,
} from './models/lawyer-dashboard-achievement-badge-list-request';

/**
 * Service class for LawyerDashboardAchievementBadgeService operations.
 * Provides methods to interact with LawyerDashboardAchievementBadgeService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class LawyerDashboardAchievementBadgeService extends BaseService {
  protected listConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  /**
   * Sets method-level configuration for list.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListConfig(config: Partial<SdkConfig>): this {
    this.listConfig = config;
    return this;
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list(
    body: LawyerDashboardAchievementBadgeListRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/achievement/lists')
      .setRequestSchema(lawyerDashboardAchievementBadgeListRequestRequest)
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
