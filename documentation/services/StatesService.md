# StatesService

A list of all methods in the `StatesService` service. Click on the method name to view detailed information about that method.

| Methods                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [countries](#countries) | ## Countries API Endpoint ### Overview This endpoint retrieves a list of countries available in the system. ### HTTP Method `POST` ### Endpoint URL `{{domin_server}}/api/tools/countries` ### URL Structure - **Base URL**: `{{domin_server}}` - The domain server variable that points to your API base URL - **Path**: `/api/tools/countries` - The resource path for accessing country data ### Request Parameters - **Body**: No request body is required for this endpoint - **Headers**: Standard headers as configured in the collection/environment ### Expected Response The endpoint returns a list of countries with their relevant information. The response format typically includes: - Country names - Country codes (ISO codes) - Additional country metadata as provided by the API ### Usage Notes - This is a POST request, which is unusual for a data retrieval operation (typically GET is used for fetching data) - No authentication details are specified in the current request configuration - The `domin_server` variable should be set in your environment to point to the correct API server - Ensure the server is accessible before making the request ### Example Use Case Use this endpoint when you need to populate dropdown lists, validate country selections, or retrieve country reference data for your application. |
| [states](#states)       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [cities](#cities)       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## countries

## Countries API Endpoint ### Overview This endpoint retrieves a list of countries available in the system. ### HTTP Method `POST` ### Endpoint URL `{{domin_server}}/api/tools/countries` ### URL Structure - **Base URL**: `{{domin_server}}` - The domain server variable that points to your API base URL - **Path**: `/api/tools/countries` - The resource path for accessing country data ### Request Parameters - **Body**: No request body is required for this endpoint - **Headers**: Standard headers as configured in the collection/environment ### Expected Response The endpoint returns a list of countries with their relevant information. The response format typically includes: - Country names - Country codes (ISO codes) - Additional country metadata as provided by the API ### Usage Notes - This is a POST request, which is unusual for a data retrieval operation (typically GET is used for fetching data) - No authentication details are specified in the current request configuration - The `domin_server` variable should be set in your environment to point to the correct API server - Ensure the server is accessible before making the request ### Example Use Case Use this endpoint when you need to populate dropdown lists, validate country selections, or retrieve country reference data for your application.

- HTTP Method: `POST`
- Endpoint: `/api/tools/countries`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const data = await nobatvakilServerSdk.states.countries();

  console.log(data);
})();
```

## states

- HTTP Method: `POST`
- Endpoint: `/api/tools/states`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [StatesRequest](../models/StatesRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, StatesRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const statesRequest: StatesRequest = {
    countryId: '28',
  };

  const data = await nobatvakilServerSdk.states.states(statesRequest);

  console.log(data);
})();
```

## cities

- HTTP Method: `POST`
- Endpoint: `/api/tools/cities`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [CitiesRequest](../models/CitiesRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CitiesRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const citiesRequest: CitiesRequest = {
    stateId: '5',
  };

  const data = await nobatvakilServerSdk.states.cities(citiesRequest);

  console.log(data);
})();
```
