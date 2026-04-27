import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { SearchRequest, searchRequestRequest } from './models/search-request';
import { LawyerInfoRequest, lawyerInfoRequestRequest } from './models/lawyer-info-request';
import { ServicesRequest, servicesRequestRequest } from './models/services-request';
import { LawyerCreateRequest, lawyerCreateRequestRequest } from './models/lawyer-create-request';
import {
  LawyerBoostListRequest,
  lawyerBoostListRequestRequest,
} from './models/lawyer-boost-list-request';
import { TimesRequest, timesRequestRequest } from './models/times-request';

/**
 * Service class for LawyerService operations.
 * Provides methods to interact with LawyerService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class LawyerService extends BaseService {
  protected searchConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected infoConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected servicesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected createConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected boostListConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected timesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  /**
   * Sets method-level configuration for search.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSearchConfig(config: Partial<SdkConfig>): this {
    this.searchConfig = config;
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
   * Sets method-level configuration for services.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setServicesConfig(config: Partial<SdkConfig>): this {
    this.servicesConfig = config;
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
   * Sets method-level configuration for boostList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setBoostListConfig(config: Partial<SdkConfig>): this {
    this.boostListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for times.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTimesConfig(config: Partial<SdkConfig>): this {
    this.timesConfig = config;
    return this;
  }

  /**
 * # Lawyer Search Endpoint
## Overview
This endpoint allows you to search for lawyers based on multiple filter criteria. It supports filtering by location (country, state, city), personal attributes (name, gender), legal practice category, and lawyer type. The results can be sorted and paginated for efficient data retrieval.

## Request Parameters

All parameters are sent as **form-data** in the request body:

### Filter Parameters

- **`name`** (string, optional)
  - The lawyer's name to search for
  - Supports Arabic and other character sets
  - Example: `احمد`

- **`gender`** (string, optional)
  - Filter lawyers by gender
  - Accepted values: `male`, `female`

- **`country_id`** (integer, optional)
  - Country identifier to filter lawyers by country
  - Example: `28`

- **`state_id`** (integer, optional)
  - State or province identifier to filter lawyers by state/province
  - Example: `5`

- **`city_id`** (integer, optional)
  - City identifier to filter lawyers by city
  - Example: `4`

- **`category_id`** (integer, optional)
  - Legal practice category identifier
  - Used to filter lawyers by their area of legal expertise
  - Example: `1`

- **`type_id`** (integer, optional)
  - Lawyer type identifier
  - Used to categorize lawyers by their professional type
  - Example: `1`

### Sorting Parameters

- **`sort_by`** (string, optional)
  - Field name to sort the results by
  - Common values: `id`, `name`, `created_at`, etc.
  - Default: `id`

- **`sort_dir`** (string, optional)
  - Sort direction for the results
  - Accepted values: `asc` (ascending), `desc` (descending)
  - Default: `asc`

### Pagination Parameters

- **`per_page`** (integer, optional)
  - Number of results to return per page
  - Example: `15`
  - Useful for controlling response size and load times

- **`page`** (integer, optional)
  - Page number to retrieve
  - Example: `1` for the first page, `2` for the second page, etc.
  - Used in conjunction with `per_page` for pagination

## Pagination & Sorting

This endpoint supports **pagination** to handle large result sets efficiently:
- Use `per_page` to control how many lawyers are returned in a single response
- Use `page` to navigate through multiple pages of results
- The response typically includes metadata about total results and available pages

**Sorting** allows you to order results by any field:
- Combine `sort_by` with `sort_dir` to control result ordering
- Sort ascending (`asc`) for A-Z, oldest-first, or lowest-first ordering
- Sort descending (`desc`) for Z-A, newest-first, or highest-first ordering

## Example Usage

**Basic search by name:**
```
name: احمد
```

**Location-based search:**
```
country_id: 28
state_id: 5
city_id: 4
```

**Filtered search with pagination:**
```
gender: male
category_id: 1
type_id: 1
per_page: 15
page: 1
sort_by: id
sort_dir: asc
```

## Notes
- All filter parameters are optional - you can use any combination
- Omitting filter parameters will return all lawyers (subject to pagination)
- Location filters (country, state, city) can be used together for precise geographic filtering
- The endpoint returns results in a paginated format for optimal performance
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async search(body: SearchRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.searchConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyers/search')
      .setRequestSchema(searchRequestRequest)
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
 * # Lawyer Information Endpoint
## Overview
This endpoint retrieves detailed information about a specific lawyer by their ID. It returns comprehensive data including personal details, professional credentials, service offerings, office locations, categories of expertise, client reviews, and ratings.

## Request Details

**Method:** `POST`  
**Endpoint:** `{{domin_server}}/api/lawyers/info`

### Parameters

The request requires the following parameter sent as **multipart/form-data**:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the lawyer whose information you want to retrieve |

**Example:**
```
id: 1
```

## Response Structure

### Success Response (200 OK)

The endpoint returns a JSON object with the following structure:

```json
{
  "status": 200,
  "data": {
    "message": "Lawyer Fetched successfully",
    "lawyer": {
      "id": integer,
      "user_id": integer,
      "first_name": string,
      "last_name": string,
      "gender": string,
      "biography": string,
      "phone_number": string,
      "email": string,
      "verified": string,
      "code": string,
      "issue_date": string,
      "license_level": string,
      "issuing_authority": string,
      "country_id": integer,
      "state_id": integer,
      "city_id": integer,
      "avatar_id": integer,
      "start_working_date": datetime,
      "is_featured": integer,
      "wallet": string,
      "balance": string,
      "status": string,
      "created_at": datetime,
      "updated_at": datetime,
      "categories": array,
      "office__rooms": array,
      "services": array,
      "country": object,
      "state": object,
      "city": object,
      "comments": array,
      "avatar": object
    }
  },
  "time": timestamp
}
```

### Response Fields

#### Lawyer Object
- **Personal Information**: `first_name`, `last_name`, `gender`, `biography`, `phone_number`, `email`
- **Professional Details**: `code`, `license_level`, `issuing_authority`, `verified`, `start_working_date`
- **Location**: `country`, `state`, `city` (nested objects with id and name)
- **Financial**: `wallet`, `balance`
- **Metrics**: `total_likes`, `total_dislikes`, `comments_avg_rate`, `comments_sum_rate`
- **Related Data**: 
  - `categories`: Array of legal specializations
  - `services`: Array of offered services with pricing and duration
  - `office__rooms`: Array of office locations
  - `comments`: Array of client reviews with ratings
  - `avatar`: Profile image object with link

## Response Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success - Lawyer information retrieved successfully |
| 400 | Bad Request - Invalid or missing `id` parameter |
| 404 | Not Found - Lawyer with specified ID does not exist |
| 500 | Internal Server Error - Server-side error occurred |

## Visualization

This request includes a **post-response script** that automatically visualizes the lawyer data in a formatted HTML table. The visualization displays:

- ID
- First Name
- Last Name
- Biography
- Phone Number
- Email
- Verification Status
- Country
- State
- City

The table uses custom CSS styling with a light blue theme and hover effects for better readability. The visualization is automatically rendered in the Postman Visualizer tab after the request is sent.

## Notes

- The endpoint uses the `{{domin_server}}` variable for the base URL, which should be configured in your environment
- The response includes Persian/Farsi text for names and locations
- The `verified` field indicates whether the lawyer's credentials have been verified (1 = verified)
- Services include pricing in the local currency (﷼) and duration in minutes
- Client ratings are averaged and displayed in the `comments_avg_rate` field
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async info(body: LawyerInfoRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.infoConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyers/info')
      .setRequestSchema(lawyerInfoRequestRequest)
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
  async services(body: ServicesRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.servicesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyers/services')
      .setRequestSchema(servicesRequestRequest)
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
  async create(body: LawyerCreateRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/create')
      .setRequestSchema(lawyerCreateRequestRequest)
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
  async boostList(body: LawyerBoostListRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.boostListConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyers/boost-list')
      .setRequestSchema(lawyerBoostListRequestRequest)
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
 * # Fetch Lawyer Times
## Overview

This endpoint retrieves available time slots for a specific lawyer and service. It returns a list of scheduled times including their availability status, allowing clients to view when a lawyer is available for a particular service.

## Request Details

**Method:** `POST`  
**Content-Type:** `multipart/form-data`

### Required Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `id` | integer | The unique identifier of the lawyer whose availability you want to fetch |
| `service_id` | integer | The unique identifier of the service for which you want to check available times |

## Response Format

**Status Code:** `202 Accepted`

The response returns a JSON object containing:

- `status`: HTTP status code (202)
    
- `data`: Object containing:
    
    - `message`: Success message
        
    - `times`: Array of time slot objects, each including:
        
        - `id`: Time slot ID
            
        - `lawyer_id`: Associated lawyer ID
            
        - `service_id`: Associated service ID
            
        - `date`: Available date (YYYY-MM-DD format)
            
        - `time`: Available time (HH:MM:SS format)
            
        - `status`: Availability status (e.g., "active")
            
        - `created_at`: Timestamp when the slot was created
            
        - `updated_at`: Timestamp when the slot was last updated
            
- `time`: Request timestamp
    

## Example Use Case

A client wants to book a consultation with lawyer ID 1 for service ID 1 (e.g., legal consultation). By calling this endpoint with these parameters, the system returns all available time slots for that lawyer and service, allowing the client to select a convenient appointment time.

## Sample Response

``` json
{
  "status": 202,
  "data": {
    "message": "Lawyer Times Fetched successfully",
    "times": [
      {
        "id": 1,
        "lawyer_id": 1,
        "service_id": 1,
        "date": "2025-10-30",
        "time": "13:00:00",
        "status": "active",
        "created_at": "2025-09-27T09:27:31.000000Z",
        "updated_at": "2025-09-27T09:27:31.000000Z"
      }
    ]
  },
  "time": "2025-10-19T13:05:46.119027Z"
}

 ```
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async times(body: TimesRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.timesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyers/times')
      .setRequestSchema(timesRequestRequest)
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
