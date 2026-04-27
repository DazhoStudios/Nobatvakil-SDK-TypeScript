import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { CartCreateRequest, cartCreateRequestRequest } from './models/cart-create-request';
import { CartInfoRequest, cartInfoRequestRequest } from './models/cart-info-request';
import { AddCouponRequest, addCouponRequestRequest } from './models/add-coupon-request';
import { RemoveCouponRequest, removeCouponRequestRequest } from './models/remove-coupon-request';
import { CartPayRequest, cartPayRequestRequest } from './models/cart-pay-request';

/**
 * Service class for CartService operations.
 * Provides methods to interact with CartService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CartService extends BaseService {
  protected createConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected infoConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected addCouponConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected removeCouponConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected payConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  /**
   * Sets method-level configuration for create.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateConfig(config: Partial<SdkConfig>): this {
    this.createConfig = config;
    return this;
  }

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
   * Sets method-level configuration for addCoupon.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddCouponConfig(config: Partial<SdkConfig>): this {
    this.addCouponConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeCoupon.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveCouponConfig(config: Partial<SdkConfig>): this {
    this.removeCouponConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for pay.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPayConfig(config: Partial<SdkConfig>): this {
    this.payConfig = config;
    return this;
  }

  /**
 * ### Create Cart API Endpoint
This endpoint allows users to create a new cart entry by specifying a lawyer, a service, and a date for the service.

#### Request

- **Method:** POST
    
- **URL:** `{{domin_server}}/api/cart/create`
    
- **Request Body (form-data):**
    
    - `lawyer_id` (type: text): The unique identifier of the lawyer for whom the service is being requested.
        
    - `service_id` (type: text): The unique identifier of the service that the user wants to avail.
        
    - `date_id` (type: text): The unique identifier for the date when the service is requested.
        

#### Response

The API will return a JSON response indicating the result of the cart creation attempt. The response structure may vary based on the outcome of the request:

- { "status": 0, "data": { "message": "", "cart": { "id": 0, "user_id": 0, "lawyer_id": 0, "service_id": 0, "lawyer_available_time_id": 0, "coupon_id": null, "amount": "", "fee": "", "tax": "", "coupon_amount": "", "end_time": "", "created_at": "", "updated_at": "", "user": { ... }, "lawyer": { ... }, "available_time": { ... }, "coupon": null, "service": { ... } } }}
    
- { "status": 0, "data": { "message": "" }, "time": ""}
    

#### Notes

- Ensure that all required parameters are included in the request body to avoid validation errors.
    
- The `cart` object in the successful response contains detailed information about the created cart, including user and lawyer details, service information, and timestamps for creation and updates.
    
- The `status` field in the response indicates the success or failure of the operation, where `0` typically denotes success.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async create(body: CartCreateRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/cart/create')
      .setRequestSchema(cartCreateRequestRequest)
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
  async info(body: CartInfoRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.infoConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/cart/info')
      .setRequestSchema(cartInfoRequestRequest)
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
  async addCoupon(body: AddCouponRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.addCouponConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/cart/add_coupon')
      .setRequestSchema(addCouponRequestRequest)
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
  async removeCoupon(body: RemoveCouponRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.removeCouponConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/cart/remove_coupon')
      .setRequestSchema(removeCouponRequestRequest)
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
  async pay(body: CartPayRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.payConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/cart/pay')
      .setRequestSchema(cartPayRequestRequest)
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
