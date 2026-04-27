import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { OfferRequest, offerRequestRequest } from './models/offer-request';
import { AnswerRequest, answerRequestRequest } from './models/answer-request';
import { MemberOfRoomRequest, memberOfRoomRequestRequest } from './models/member-of-room-request';

/**
 * Service class for ToolsService operations.
 * Provides methods to interact with ToolsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ToolsService extends BaseService {
  protected offerConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected answerConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected iceConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected memberOfRoomConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  /**
   * Sets method-level configuration for offer.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOfferConfig(config: Partial<SdkConfig>): this {
    this.offerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for answer.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAnswerConfig(config: Partial<SdkConfig>): this {
    this.answerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for ice.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setIceConfig(config: Partial<SdkConfig>): this {
    this.iceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for memberOfRoom.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setMemberOfRoomConfig(config: Partial<SdkConfig>): this {
    this.memberOfRoomConfig = config;
    return this;
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async offer(body: OfferRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.offerConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/calls/1/offer')
      .setRequestSchema(offerRequestRequest)
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
  async answer(body: AnswerRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.answerConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/calls/1/answer')
      .setRequestSchema(answerRequestRequest)
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
  async ice(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.iceConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/calls/1/ice')
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
  async memberOfRoom(body: MemberOfRoomRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.memberOfRoomConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api/calls/1/sdp')
      .setRequestSchema(memberOfRoomRequestRequest)
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
