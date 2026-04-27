import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';

/**
 * Service class for PaymentsService operations.
 * Provides methods to interact with PaymentsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PaymentsService extends BaseService {
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
 * Example Results:
```json
{
    "status": 200,
    "data": {
        "message": "List Find Successfully",
        "list": [
            {
                "id": 1,
                "amount": 313000,
                "user_id": 1,
                "payment_method": "bitpay",
                "payment_status": "pending",
                "verify_status": "0",
                "type": "order",
                "type_id": null,
                "country_id": 28,
                "transaction_id": null,
                "card": null,
                "hashed_card": null,
                "pay_date": null,
                "created_at": "2025-10-12T12:53:44.000000Z",
                "updated_at": "2025-10-12T12:53:44.000000Z"
            },
            {
                "id": 2,
                "amount": 313000,
                "user_id": 1,
                "payment_method": "bitpay",
                "payment_status": "pending",
                "verify_status": "0",
                "type": "order",
                "type_id": null,
                "country_id": 28,
                "transaction_id": null,
                "card": null,
                "hashed_card": null,
                "pay_date": null,
                "created_at": "2025-10-12T12:55:29.000000Z",
                "updated_at": "2025-10-12T12:55:29.000000Z"
            },
            {
                "id": 3,
                "amount": 313000,
                "user_id": 1,
                "payment_method": "bitpay",
                "payment_status": "pending",
                "verify_status": "0",
                "type": "order",
                "type_id": null,
                "country_id": 28,
                "transaction_id": null,
                "card": null,
                "hashed_card": null,
                "pay_date": null,
                "created_at": "2025-10-12T12:56:29.000000Z",
                "updated_at": "2025-10-12T12:56:29.000000Z"
            }
        ]
    }
}
```
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async list(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/payments/list')
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
