import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  LawyerDashboardOrdersInfoRequest,
  lawyerDashboardOrdersInfoRequestRequest,
} from './models/lawyer-dashboard-orders-info-request';
import {
  LawyerDashboardOrdersListsRequest,
  lawyerDashboardOrdersListsRequestRequest,
} from './models/lawyer-dashboard-orders-lists-request';

/**
 * Service class for LawyerDashboardOrdersService operations.
 * Provides methods to interact with LawyerDashboardOrdersService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class LawyerDashboardOrdersService extends BaseService {
  protected infoConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected listsConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

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
   * Sets method-level configuration for lists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListsConfig(config: Partial<SdkConfig>): this {
    this.listsConfig = config;
    return this;
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async info(
    body: LawyerDashboardOrdersInfoRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.infoConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/orders/show')
      .setRequestSchema(lawyerDashboardOrdersInfoRequestRequest)
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
  async lists(
    body: LawyerDashboardOrdersListsRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/orders/list')
      .setRequestSchema(lawyerDashboardOrdersListsRequestRequest)
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
