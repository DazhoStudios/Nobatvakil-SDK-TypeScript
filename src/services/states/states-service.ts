import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { StatesRequest, statesRequestRequest } from './models/states-request';
import { CitiesRequest, citiesRequestRequest } from './models/cities-request';

/**
 * Service class for StatesService operations.
 * Provides methods to interact with StatesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class StatesService extends BaseService {
  protected countriesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected statesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected citiesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  /**
   * Sets method-level configuration for countries.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCountriesConfig(config: Partial<SdkConfig>): this {
    this.countriesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for states.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setStatesConfig(config: Partial<SdkConfig>): this {
    this.statesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for cities.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCitiesConfig(config: Partial<SdkConfig>): this {
    this.citiesConfig = config;
    return this;
  }

  /**
 * ## Countries API Endpoint
### Overview
This endpoint retrieves a list of countries available in the system.

### HTTP Method
`POST`

### Endpoint URL
```
{{domin_server}}/api/tools/countries
```

### URL Structure
- **Base URL**: `{{domin_server}}` - The domain server variable that points to your API base URL
- **Path**: `/api/tools/countries` - The resource path for accessing country data

### Request Parameters
- **Body**: No request body is required for this endpoint
- **Headers**: Standard headers as configured in the collection/environment

### Expected Response
The endpoint returns a list of countries with their relevant information. The response format typically includes:
- Country names
- Country codes (ISO codes)
- Additional country metadata as provided by the API

### Usage Notes
- This is a POST request, which is unusual for a data retrieval operation (typically GET is used for fetching data)
- No authentication details are specified in the current request configuration
- The `domin_server` variable should be set in your environment to point to the correct API server
- Ensure the server is accessible before making the request

### Example Use Case
Use this endpoint when you need to populate dropdown lists, validate country selections, or retrieve country reference data for your application.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async countries(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.countriesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/countries')
      .setRequestSchema(z.any())
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
  async states(body: StatesRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.statesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/states')
      .setRequestSchema(statesRequestRequest)
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
  async cities(body: CitiesRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.citiesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/cities')
      .setRequestSchema(citiesRequestRequest)
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
