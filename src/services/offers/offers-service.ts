import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';

/**
 * Service class for OffersService operations.
 * Provides methods to interact with OffersService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OffersService extends BaseService {
  protected listMyOfferConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  /**
   * Sets method-level configuration for listMyOffer.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListMyOfferConfig(config: Partial<SdkConfig>): this {
    this.listMyOfferConfig = config;
    return this;
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listMyOffer(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listMyOfferConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/offers/list')
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
