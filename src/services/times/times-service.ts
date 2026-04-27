import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { TimesListRequest, timesListRequestRequest } from './models/times-list-request';
import { TimesCreateRequest, timesCreateRequestRequest } from './models/times-create-request';
import { TimesUpdateRequest, timesUpdateRequestRequest } from './models/times-update-request';
import { TimesDeleteRequest, timesDeleteRequestRequest } from './models/times-delete-request';
import { CreateBulkRequest, createBulkRequestRequest } from './models/create-bulk-request';

/**
 * Service class for TimesService operations.
 * Provides methods to interact with TimesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TimesService extends BaseService {
  protected listConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected createConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected updateConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected delete_Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected createBulkConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

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
   * Sets method-level configuration for create.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateConfig(config: Partial<SdkConfig>): this {
    this.createConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for update.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateConfig(config: Partial<SdkConfig>): this {
    this.updateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for delete_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDelete_Config(config: Partial<SdkConfig>): this {
    this.delete_Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for createBulk.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateBulkConfig(config: Partial<SdkConfig>): this {
    this.createBulkConfig = config;
    return this;
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list(body: TimesListRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/times/list')
      .setRequestSchema(timesListRequestRequest)
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
 * ### Endpoint Description
This endpoint allows users to create a new time slot for a lawyer's service in the system. It is designed to facilitate the scheduling of appointments by providing necessary details such as the lawyer's ID, the service being offered, the date, and the time of the appointment.

### Request Parameters

The request must be sent as a form-data payload with the following parameters:

- **lawyer_id** (text): The unique identifier for the lawyer.
    
- **service_id** (text): The unique identifier for the service being scheduled.
    
- **date** (text): The date of the appointment, formatted according to the Asia/Tehran timezone (+3:30).
    
- **time** (text): The time of the appointment, also formatted according to the Asia/Tehran timezone (+3:30).
    

### Response Structure

Upon a successful request, the API will return a JSON object with the following structure:

``` javascript
{
  "status": 0,
  "data": {
    "message": "",
    "time_list": {
      "current_page": 0,
      "data": [
        {
          "id": 0,
          "lawyer_id": 0,
          "service_id": 0,
          "date": "",
          "time": "",
          "status": "",
          "created_at": "",
          "updated_at": "",
          "orders": [],
          "lawyer": {
            "id": 0,
            "user_id": 0,
            "first_name": "",
            "last_name": "",
            "gender": "",
            "biography": "",
            "phone_number": "",
            "email": "",
            "verified": "",
            "code": "",
            "issue_date": null,
            "license_level": null,
            "issuing_authority": null,
            "country_id": 0,
            "state_id": 0,
            "city_id": 0,
            "avatar_id": null,
            "start_working_date": null,
            "is_featured": 0,
            "featured_until": null,
            "wallet": "",
            "balance": "",
            "created_at": "",
            "updated_at": "",
            "avatar": null
          },
          "service": {
            "id": 0,
            "lawyer_id": 0,
            "name": "",
            "slug": "",
            "type_id": 0,
            "duration": "",
            "amount": 0,
            "country_id": 0,
            "created_at": "",
            "updated_at": ""
          }
        }
      ],
      "first_page_url": "",
      "from": 0,
      "last_page": 0,
      "last_page_url": "",
      "links": [
        {
          "url": null,
          "label": "",
          "page": null,
          "active": true
        }
      ],
      "next_page_url": null,
      "path": "",
      "per_page": 0,
      "prev_page_url": null,
      "to": 0,
      "total": 0
    }
  },
  "time": ""
}

 ```

The response includes a status code indicating the success of the operation and a data object containing a message and a list of time slots created, along with details about the lawyer and the service associated with the appointment.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async create(body: TimesCreateRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/times/create')
      .setRequestSchema(timesCreateRequestRequest)
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
  async update(body: TimesUpdateRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/times/update')
      .setRequestSchema(timesUpdateRequestRequest)
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
  async delete_(body: TimesDeleteRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/times/delete')
      .setRequestSchema(timesDeleteRequestRequest)
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
 * # نحوه استفاده از API ثبت نوبت‌های دسته‌جمعی
## مثال 1: ساده‌ترین حالت

یکشنبه تا سه‌شنبه: 11 صبح تا 12 شب  
پنج‌شنبه: 8 صبح تا 12 ظهر

``` json
{
  "lawyer_id": 1,
  "start": "2024-02-01",
  "end": "2024-02-29",
  "service_id": [34, 35, 36, 37],
  "time_schedules": [
    {
      "days": [1, 2, 3],
      "start": "11:00",
      "end": "23:59"
    },
    {
      "days": [5],
      "start": "08:00",
      "end": "12:00"
    }
  ]
}

 ```

## مثال 2: با تکرار هفتگی

همین برنامه رو 4 هفته تکرار کن:

``` json
{
  "lawyer_id": 1,
  "start": "2024-02-01",
  "end": "2024-02-07",
  "service_id": [34, 35, 36, 37],
  "time_schedules": [
    {
      "days": [1, 2, 3],
      "start": "11:00",
      "end": "23:59"
    },
    {
      "days": [5],
      "start": "08:00",
      "end": "12:00"
    }
  ],
  "repeat_mode": "weekly",
  "repeat_number": 4
}

 ```

## مثال 3: برنامه پیچیده‌تر

دوشنبه و چهارشنبه: 9 صبح تا 5 بعدازظهر  
جمعه: 10 صبح تا 2 بعدازظهر  
شنبه: 8 صبح تا 12 ظهر

``` json
{
  "lawyer_id": 1,
  "start": "2024-03-01",
  "end": "2024-03-31",
  "service_id": [34, 35],
  "time_schedules": [
    {
      "days": [2],
      "start": "09:00",
      "end": "17:00"
    },
    {
      "days": [6],
      "start": "10:00",
      "end": "14:00"
    },
    {
      "days": [0],
      "start": "08:00",
      "end": "12:00"
    }
  ],
  "repeat_mode": "monthly",
  "repeat_number": 3
}

 ```

## راهنمای روزهای هفته (تقویم ایرانی - شروع از شنبه)

در این سیستم، هفته از شنبه شروع می‌شود:

- 0 = شنبه (Saturday) - اول هفته
    
- 1 = یکشنبه (Sunday)
    
- 2 = دوشنبه (Monday)
    
- 3 = سه‌شنبه (Tuesday)
    
- 4 = چهارشنبه (Wednesday)
    
- 5 = پنج‌شنبه (Thursday)
    
- 6 = جمعه (Friday) - آخر هفته
    

**توجه:** این متفاوت از Carbon است که در آن 0=یکشنبه است. سیستم به صورت خودکار تبدیل می‌کند.

## نحوه کار با Duration

اگر service با id=34 دارای duration=60 باشد:

- از ساعت 08:00 تا 12:00
    
- نوبت‌ها: 08:00, 09:00, 10:00, 11:00
    

اگر service با id=35 دارای duration=30 باشد:

- از ساعت 08:00 تا 12:00
    
- نوبت‌ها: 08:00, 08:30, 09:00, 09:30, 10:00, 10:30, 11:00, 11:30
    

## نکات مهم

1. **چک مالکیت**: سیستم چک می‌کند که وکیل متعلق به کاربر لاگین شده باشد
    
2. **چک سرویس‌ها**: تمام service_id ها باید متعلق به همان وکیل باشند
    
3. **Duplicate Prevention**: اگر نوبتی قبلاً ایجاد شده باشد، دوباره ایجاد نمی‌شود
    
4. **Validation**: تمام تاریخ‌ها و ساعت‌ها validate می‌شوند
    

## پاسخ موفق

``` json
{
  "status": "success",
  "message": "Available times generated successfully",
  "data": {
    "created_slots": 450,
    "skipped_slots": 12,
    "errors": []
  }
}

 ```

## پاسخ خطا

``` json
{
  "status": 422,
  "data": {
    "message": "Validation failed",
    "errors": {
      "service_id": ["Some services do not belong to this lawyer"]
    }
  },
  "time": "2024-02-04 10:30:00"
}

 ```

EndFragment
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async createBulk(body: CreateBulkRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createBulkConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/times/create-bulk')
      .setRequestSchema(createBulkRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }
}
