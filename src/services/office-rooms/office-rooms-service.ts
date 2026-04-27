import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  OfficeRoomsListRequest,
  officeRoomsListRequestRequest,
} from './models/office-rooms-list-request';
import {
  OfficeRoomsCreateRequest,
  officeRoomsCreateRequestRequest,
} from './models/office-rooms-create-request';
import { EditRequest, editRequestRequest } from './models/edit-request';
import {
  OfficeRoomsDeleteRequest,
  officeRoomsDeleteRequestRequest,
} from './models/office-rooms-delete-request';

/**
 * Service class for OfficeRoomsService operations.
 * Provides methods to interact with OfficeRoomsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OfficeRoomsService extends BaseService {
  protected listConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected createConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected editConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected delete_Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

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
   * Sets method-level configuration for edit.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEditConfig(config: Partial<SdkConfig>): this {
    this.editConfig = config;
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
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list(body: OfficeRoomsListRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/rooms/list')
      .setRequestSchema(officeRoomsListRequestRequest)
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
  async create(body: OfficeRoomsCreateRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/rooms/create')
      .setRequestSchema(officeRoomsCreateRequestRequest)
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
 * ## Edit Lawyer Office/Room Information
This endpoint allows updating the office/room information for a lawyer in the system.

### Request Details

**Method:** `POST`

**URL:** `{{domin_server}}/api/lawyer/dashboard/rooms/edit`

### Request Parameters

The request uses **multipart/form-data** format with the following fields:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `lawyer_id` | integer | Yes | The unique identifier of the lawyer whose office information is being updated |
| `address_id` | integer | Yes | The unique identifier of the address record being modified |
| `name` | string | Yes | The name of the office/room (supports Persian characters) |
| `tel_numbers` | string | Yes | Telephone number(s) for the office (e.g., 02612345678) |
| `address` | string | Yes | The complete physical address of the office (supports Persian characters) |
| `location_link` | string | Yes | A URL link to the office location on a map service (e.g., Neshan map link) |

### Successful Response

**Status Code:** `200 OK`

**Response Body:**

``` json
{
  "status": 200,
  "data": {
    "message": "Success Update Lawyer Office"
  }
}

 ```

### Example Usage

This endpoint is used when a lawyer needs to update their office details such as changing the office name, updating contact numbers, modifying the address, or updating the location map link.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async edit(body: EditRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.editConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/rooms/edit')
      .setRequestSchema(editRequestRequest)
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
 * ## Delete Lawyer Office Room
This endpoint deletes a specific office room/address associated with a lawyer's dashboard.

### Endpoint

`POST {{domin_server}}/api/lawyer/dashboard/rooms/delete`

### Request Body Parameters

The request uses **multipart/formdata** with the following required parameters:

| Parameter | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `lawyer_id` | integer | Yes | The unique identifier of the lawyer | `3` |
| `address_id` | integer | Yes | The unique identifier of the office address/room to be deleted | `1` |

### Success Response

**Status Code:** `200 OK`

``` json
{
  "status": 200,
  "data": {
    "message": "Success Delete Lawyer Office"
  }
}

 ```

### Notes

- Both `lawyer_id` and `address_id` are required for successful deletion
    
- Ensure the lawyer has proper authorization to delete the specified office room
    
- The deletion is permanent and cannot be undone
    
- Verify that the `address_id` belongs to the specified `lawyer_id` before making the request
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async delete_(body: OfficeRoomsDeleteRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/rooms/delete')
      .setRequestSchema(officeRoomsDeleteRequestRequest)
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
