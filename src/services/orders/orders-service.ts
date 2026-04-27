import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { OrdersListsRequest, ordersListsRequestRequest } from './models/orders-lists-request';
import { OrdersInfoRequest, ordersInfoRequestRequest } from './models/orders-info-request';

/**
 * Service class for OrdersService operations.
 * Provides methods to interact with OrdersService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OrdersService extends BaseService {
  protected listsConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected infoConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

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
   * Sets method-level configuration for info.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInfoConfig(config: Partial<SdkConfig>): this {
    this.infoConfig = config;
    return this;
  }

  /**
 * # Order List Endpoint
## Overview

This endpoint retrieves a paginated list of user orders.

## Request Details

- **Method:** POST
    
- **Endpoint:** `/api/user/dashboard/orders/list`
    

### Request Parameters

- `page` (integer, required): The page number for pagination
    - Default: 1
        
    - Used to retrieve specific page of orders
        

## Response Structure

Successful response returns a JSON object with:

- `status`: HTTP status code (200 for success)
    
- `data`:
    - `message`: Confirmation message
        
    - `orders`: Pagination object containing:
        - `current_page`: Current page number
            
        - `data`: Array of order objects
            - Each order includes details like:
                - `id`
                    
                - `lawyer_id`
                    
                - `user_id`
                    
                - `service_id`
                    
                - `date`
                    
                - `time`
                    
                - `status`
                    
                - Associated `user`, `service`, and `lawyer` information
                    

## Example Use Case

Retrieve the first page of a user's order history in the dashboard.

## Notes

- Requires authentication
    
- Returns up to 10 orders per page
    
- Use the `page` parameter to navigate through order pages
    

Example Response:

``` json
{
    "status": 200,
    "data": {
        "message": "Data found",
        "orders": {
            "current_page": 1,
            "data": [
                {
                    "id": 1,
                    "lawyer_id": 1,
                    "user_id": 1,
                    "profile_id": 1,
                    "service_id": 1,
                    "coupon_id": null,
                    "date_id": 10,
                    "date": "2025-09-30",
                    "time": "13:48:00",
                    "coupon_amount": "0",
                    "status": "finished",
                    "tax": "0",
                    "fee": "0",
                    "amount": "0",
                    "duration": "",
                    "google_meet_status": "active",
                    "google_meet_link": null,
                    "created_at": "2025-09-28T10:18:57.000000Z",
                    "updated_at": "2025-09-28T10:18:57.000000Z",
                    "total_amount": 0,
                    "user": {
                        "id": 1,
                        "first_name": "محمد یوسف",
                        "last_name": "مقدم",
                        "phone_number": "09106059954",
                        "gender": "male",
                        "email": "yousef.wersy@gmail.com",
                        "avatar": null
                    },
                    "atime": null,
                    "service": {
                        "id": 1,
                        "name": "مکالمه 60 دقیقه ایی ویژه",
                        "status": "active",
                        "duration": "60",
                        "amount": 100000,
                        "slug": "5485132154gdhsgdh",
                        "type_id": 1,
                        "type": {
                            "id": 1,
                            "name": "تماس صوتی",
                            "status": "active"
                        }
                    },
                    "lawyer": {
                        "id": 1,
                        "first_name": "احمد",
                        "last_name": "ابراهیمی",
                        "gender": "male",
                        "phone_number": "09121212365",
                        "code": "19632",
                        "biography": "وکیل پایه یک دادگستری در زمینه املاک و مستغلات",
                        "status": "active",
                        "email": "ahmad@gmail.com",
                        "start_working_date": "2016-08-03 10:29:18",
                        "avatar": null,
                        "city": null,
                        "state": null,
                        "country": null
                    }
                },
                {
                    "id": 6,
                    "lawyer_id": 22,
                    "user_id": 1,
                    "profile_id": 1,
                    "service_id": 47,
                    "coupon_id": null,
                    "date_id": 321,
                    "date": "2025-10-26",
                    "time": "10:00:00",
                    "coupon_amount": "0",
                    "status": "pending",
                    "tax": "1",
                    "fee": "0.5",
                    "amount": "10",
                    "duration": "60",
                    "google_meet_status": "active",
                    "google_meet_link": null,
                    "created_at": "2025-10-25T10:47:15.000000Z",
                    "updated_at": "2025-10-25T10:47:15.000000Z",
                    "total_amount": 11.5,
                    "user": {
                        "id": 1,
                        "first_name": "محمد یوسف",
                        "last_name": "مقدم",
                        "phone_number": "09106059954",
                        "gender": "male",
                        "email": "yousef.wersy@gmail.com",
                        "avatar": null
                    },
                    "atime": {
                        "id": 321,
                        "time": "10:00:00",
                        "date": "2025-10-26",
                        "status": "active"
                    },
                    "service": {
                        "id": 47,
                        "name": "مشاوره متنی",
                        "status": "active",
                        "duration": "60",
                        "amount": 10,
                        "slug": "chat-message-22",
                        "type_id": 4,
                        "type": {
                            "id": 4,
                            "name": "چت و گفت گو",
                            "status": "active"
                        }
                    },
                    "lawyer": null
                },
                {
                    "id": 7,
                    "lawyer_id": 22,
                    "user_id": 1,
                    "profile_id": 1,
                    "service_id": 47,
                    "coupon_id": null,
                    "date_id": 321,
                    "date": "2025-10-26",
                    "time": "10:00:00",
                    "coupon_amount": "0",
                    "status": "pending",
                    "tax": "1",
                    "fee": "0.5",
                    "amount": "10",
                    "duration": "60",
                    "google_meet_status": "active",
                    "google_meet_link": null,
                    "created_at": "2025-10-25T10:47:29.000000Z",
                    "updated_at": "2025-10-25T10:47:29.000000Z",
                    "total_amount": 11.5,
                    "user": {
                        "id": 1,
                        "first_name": "محمد یوسف",
                        "last_name": "مقدم",
                        "phone_number": "09106059954",
                        "gender": "male",
                        "email": "yousef.wersy@gmail.com",
                        "avatar": null
                    },
                    "atime": {
                        "id": 321,
                        "time": "10:00:00",
                        "date": "2025-10-26",
                        "status": "active"
                    },
                    "service": {
                        "id": 47,
                        "name": "مشاوره متنی",
                        "status": "active",
                        "duration": "60",
                        "amount": 10,
                        "slug": "chat-message-22",
                        "type_id": 4,
                        "type": {
                            "id": 4,
                            "name": "چت و گفت گو",
                            "status": "active"
                        }
                    },
                    "lawyer": null
                },
                {
                    "id": 20,
                    "lawyer_id": 42,
                    "user_id": 1,
                    "profile_id": 1,
                    "service_id": 112,
                    "coupon_id": null,
                    "date_id": 469,
                    "date": "2025-11-10",
                    "time": "09:00:00",
                    "coupon_amount": "0",
                    "status": "pending",
                    "tax": "1000",
                    "fee": "0",
                    "amount": "10000",
                    "duration": "60",
                    "google_meet_status": "active",
                    "google_meet_link": null,
                    "created_at": "2025-11-09T08:32:37.000000Z",
                    "updated_at": "2025-11-09T08:32:37.000000Z",
                    "total_amount": 11000,
                    "user": {
                        "id": 1,
                        "first_name": "محمد یوسف",
                        "last_name": "مقدم",
                        "phone_number": "09106059954",
                        "gender": "male",
                        "email": "yousef.wersy@gmail.com",
                        "avatar": null
                    },
                    "atime": {
                        "id": 469,
                        "time": "09:00:00",
                        "date": "2025-11-10",
                        "status": "inactive"
                    },
                    "service": {
                        "id": 112,
                        "name": "مشاوره متنی",
                        "status": "active",
                        "duration": "60",
                        "amount": 10000,
                        "slug": "chat-message-42",
                        "type_id": 4,
                        "type": {
                            "id": 4,
                            "name": "چت و گفت گو",
                            "status": "active"
                        }
                    },
                    "lawyer": {
                        "id": 42,
                        "first_name": "محمد یوسف",
                        "last_name": "مقدم",
                        "gender": "male",
                        "phone_number": "09109693365",
                        "code": "130130",
                        "biography": "لیسانس وکالت",
                        "status": "active",
                        "email": "yousef.wersy2@gmail.com",
                        "start_working_date": "2025-08-26 00:00:00",
                        "avatar": null,
                        "city": null,
                        "state": null,
                        "country": null
                    }
                }
            ],
            "first_page_url": "http://nobatvakil-core.liara.run/api/user/dashboard/orders/list?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://nobatvakil-core.liara.run/api/user/dashboard/orders/list?page=1",
            "links": [
                {
                    "url": null,
                    "label": "« Previous",
                    "page": null,
                    "active": false
                },
                {
                    "url": "http://nobatvakil-core.liara.run/api/user/dashboard/orders/list?page=1",
                    "label": "1",
                    "page": 1,
                    "active": true
                },
                {
                    "url": null,
                    "label": "Next »",
                    "page": null,
                    "active": false
                }
            ],
            "next_page_url": null,
            "path": "http://nobatvakil-core.liara.run/api/user/dashboard/orders/list",
            "per_page": 10,
            "prev_page_url": null,
            "to": 4,
            "total": 4
        }
    }
}

 ```
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async lists(body: OrdersListsRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/orders/list')
      .setRequestSchema(ordersListsRequestRequest)
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
  async info(body: OrdersInfoRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.infoConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/orders/show')
      .setRequestSchema(ordersInfoRequestRequest)
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
