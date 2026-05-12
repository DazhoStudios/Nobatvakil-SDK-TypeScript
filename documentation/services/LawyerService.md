# LawyerService

A list of all methods in the `LawyerService` service. Click on the method name to view detailed information about that method.

| Methods                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search)       | # Lawyer Search Endpoint ## Overview This endpoint allows you to search for lawyers based on multiple filter criteria. It supports filtering by location (country, state, city), personal attributes (name, gender), legal practice category, and lawyer type. The results can be sorted and paginated for efficient data retrieval. ## Request Parameters All parameters are sent as **form-data** in the request body: ### Filter Parameters - **`name`** (string, optional) - The lawyer's name to search for - Supports Arabic and other character sets - Example: `احمد` - **`gender`** (string, optional) - Filter lawyers by gender - Accepted values: `male`, `female` - **`country_id`** (integer, optional) - Country identifier to filter lawyers by country - Example: `28` - **`state_id`** (integer, optional) - State or province identifier to filter lawyers by state/province - Example: `5` - **`city_id`** (integer, optional) - City identifier to filter lawyers by city - Example: `4` - **`category_id`** (integer, optional) - Legal practice category identifier - Used to filter lawyers by their area of legal expertise - Example: `1` - **`type_id`** (integer, optional) - Lawyer type identifier - Used to categorize lawyers by their professional type - Example: `1` ### Sorting Parameters - **`sort_by`** (string, optional) - Field name to sort the results by - Common values: `id`, `name`, `created_at`, etc. - Default: `id` - **`sort_dir`** (string, optional) - Sort direction for the results - Accepted values: `asc` (ascending), `desc` (descending) - Default: `asc` ### Pagination Parameters - **`per_page`** (integer, optional) - Number of results to return per page - Example: `15` - Useful for controlling response size and load times - **`page`** (integer, optional) - Page number to retrieve - Example: `1` for the first page, `2` for the second page, etc. - Used in conjunction with `per_page` for pagination ## Pagination & Sorting This endpoint supports **pagination** to handle large result sets efficiently: - Use `per_page` to control how many lawyers are returned in a single response - Use `page` to navigate through multiple pages of results - The response typically includes metadata about total results and available pages **Sorting** allows you to order results by any field: - Combine `sort_by` with `sort_dir` to control result ordering - Sort ascending (`asc`) for A-Z, oldest-first, or lowest-first ordering - Sort descending (`desc`) for Z-A, newest-first, or highest-first ordering ## Example Usage **Basic search by name:** `name: احمد` **Location-based search:** `country_id: 28 state_id: 5 city_id: 4` **Filtered search with pagination:** `gender: male category_id: 1 type_id: 1 per_page: 15 page: 1 sort_by: id sort_dir: asc` ## Notes - All filter parameters are optional - you can use any combination - Omitting filter parameters will return all lawyers (subject to pagination) - Location filters (country, state, city) can be used together for precise geographic filtering - The endpoint returns results in a paginated format for optimal performance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [info](#info)           | # Lawyer Information Endpoint ## Overview This endpoint retrieves detailed information about a specific lawyer by their ID. It returns comprehensive data including personal details, professional credentials, service offerings, office locations, categories of expertise, client reviews, and ratings. ## Request Details **Method:** `POST` **Endpoint:** `{{domin_server}}/api/lawyers/info` ### Parameters The request requires the following parameter sent as **multipart/form-data**: \| Parameter \| Type \| Required \| Description \| \|-----------\|------\|----------\|-------------\| \| `id` \| integer \| Yes \| The unique identifier of the lawyer whose information you want to retrieve \| **Example:** `id: 1` ## Response Structure ### Success Response (200 OK) The endpoint returns a JSON object with the following structure: `json {   "status": 200,   "data": {     "message": "Lawyer Fetched successfully",     "lawyer": {       "id": integer,       "user_id": integer,       "first_name": string,       "last_name": string,       "gender": string,       "biography": string,       "phone_number": string,       "email": string,       "verified": string,       "code": string,       "issue_date": string,       "license_level": string,       "issuing_authority": string,       "country_id": integer,       "state_id": integer,       "city_id": integer,       "avatar_id": integer,       "start_working_date": datetime,       "is_featured": integer,       "wallet": string,       "balance": string,       "status": string,       "created_at": datetime,       "updated_at": datetime,       "categories": array,       "office__rooms": array,       "services": array,       "country": object,       "state": object,       "city": object,       "comments": array,       "avatar": object     }   },   "time": timestamp } ` ### Response Fields #### Lawyer Object - **Personal Information**: `first_name`, `last_name`, `gender`, `biography`, `phone_number`, `email` - **Professional Details**: `code`, `license_level`, `issuing_authority`, `verified`, `start_working_date` - **Location**: `country`, `state`, `city` (nested objects with id and name) - **Financial**: `wallet`, `balance` - **Metrics**: `total_likes`, `total_dislikes`, `comments_avg_rate`, `comments_sum_rate` - **Related Data**: - `categories`: Array of legal specializations - `services`: Array of offered services with pricing and duration - `office__rooms`: Array of office locations - `comments`: Array of client reviews with ratings - `avatar`: Profile image object with link ## Response Codes \| Status Code \| Description \| \|-------------\|-------------\| \| 200 \| Success - Lawyer information retrieved successfully \| \| 400 \| Bad Request - Invalid or missing `id` parameter \| \| 404 \| Not Found - Lawyer with specified ID does not exist \| \| 500 \| Internal Server Error - Server-side error occurred \| ## Visualization This request includes a **post-response script** that automatically visualizes the lawyer data in a formatted HTML table. The visualization displays: - ID - First Name - Last Name - Biography - Phone Number - Email - Verification Status - Country - State - City The table uses custom CSS styling with a light blue theme and hover effects for better readability. The visualization is automatically rendered in the Postman Visualizer tab after the request is sent. ## Notes - The endpoint uses the `{{domin_server}}` variable for the base URL, which should be configured in your environment - The response includes Persian/Farsi text for names and locations - The `verified` field indicates whether the lawyer's credentials have been verified (1 = verified) - Services include pricing in the local currency (﷼) and duration in minutes - Client ratings are averaged and displayed in the `comments_avg_rate` field |
| [services](#services)   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [create](#create)       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [boostList](#boostlist) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [times](#times)         | # Fetch Lawyer Times ## Overview This endpoint retrieves available time slots for a specific lawyer and service. It returns a list of scheduled times including their availability status, allowing clients to view when a lawyer is available for a particular service. ## Request Details **Method:** `POST` **Content-Type:** `multipart/form-data` ### Required Parameters \| Parameter \| Type \| Description \| \| --- \| --- \| --- \| \| `id` \| integer \| The unique identifier of the lawyer whose availability you want to fetch \| \| `service_id` \| integer \| The unique identifier of the service for which you want to check available times \| ## Response Format **Status Code:** `202 Accepted` The response returns a JSON object containing: - `status`: HTTP status code (202) - `data`: Object containing: - `message`: Success message - `times`: Array of time slot objects, each including: - `id`: Time slot ID - `lawyer_id`: Associated lawyer ID - `service_id`: Associated service ID - `date`: Available date (YYYY-MM-DD format) - `time`: Available time (HH:MM:SS format) - `status`: Availability status (e.g., "active") - `created_at`: Timestamp when the slot was created - `updated_at`: Timestamp when the slot was last updated - `time`: Request timestamp ## Example Use Case A client wants to book a consultation with lawyer ID 1 for service ID 1 (e.g., legal consultation). By calling this endpoint with these parameters, the system returns all available time slots for that lawyer and service, allowing the client to select a convenient appointment time. ## Sample Response `json {   "status": 202,   "data": {     "message": "Lawyer Times Fetched successfully",     "times": [       {         "id": 1,         "lawyer_id": 1,         "service_id": 1,         "date": "2025-10-30",         "time": "13:00:00",         "status": "active",         "created_at": "2025-09-27T09:27:31.000000Z",         "updated_at": "2025-09-27T09:27:31.000000Z"       }     ]   },   "time": "2025-10-19T13:05:46.119027Z" } `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## search

# Lawyer Search Endpoint ## Overview This endpoint allows you to search for lawyers based on multiple filter criteria. It supports filtering by location (country, state, city), personal attributes (name, gender), legal practice category, and lawyer type. The results can be sorted and paginated for efficient data retrieval. ## Request Parameters All parameters are sent as **form-data** in the request body: ### Filter Parameters - **`name`** (string, optional) - The lawyer's name to search for - Supports Arabic and other character sets - Example: `احمد` - **`gender`** (string, optional) - Filter lawyers by gender - Accepted values: `male`, `female` - **`country_id`** (integer, optional) - Country identifier to filter lawyers by country - Example: `28` - **`state_id`** (integer, optional) - State or province identifier to filter lawyers by state/province - Example: `5` - **`city_id`** (integer, optional) - City identifier to filter lawyers by city - Example: `4` - **`category_id`** (integer, optional) - Legal practice category identifier - Used to filter lawyers by their area of legal expertise - Example: `1` - **`type_id`** (integer, optional) - Lawyer type identifier - Used to categorize lawyers by their professional type - Example: `1` ### Sorting Parameters - **`sort_by`** (string, optional) - Field name to sort the results by - Common values: `id`, `name`, `created_at`, etc. - Default: `id` - **`sort_dir`** (string, optional) - Sort direction for the results - Accepted values: `asc` (ascending), `desc` (descending) - Default: `asc` ### Pagination Parameters - **`per_page`** (integer, optional) - Number of results to return per page - Example: `15` - Useful for controlling response size and load times - **`page`** (integer, optional) - Page number to retrieve - Example: `1` for the first page, `2` for the second page, etc. - Used in conjunction with `per_page` for pagination ## Pagination & Sorting This endpoint supports **pagination** to handle large result sets efficiently: - Use `per_page` to control how many lawyers are returned in a single response - Use `page` to navigate through multiple pages of results - The response typically includes metadata about total results and available pages **Sorting** allows you to order results by any field: - Combine `sort_by` with `sort_dir` to control result ordering - Sort ascending (`asc`) for A-Z, oldest-first, or lowest-first ordering - Sort descending (`desc`) for Z-A, newest-first, or highest-first ordering ## Example Usage **Basic search by name:** `name: احمد` **Location-based search:** `country_id: 28 state_id: 5 city_id: 4` **Filtered search with pagination:** `gender: male category_id: 1 type_id: 1 per_page: 15 page: 1 sort_by: id sort_dir: asc` ## Notes - All filter parameters are optional - you can use any combination - Omitting filter parameters will return all lawyers (subject to pagination) - Location filters (country, state, city) can be used together for precise geographic filtering - The endpoint returns results in a paginated format for optimal performance

- HTTP Method: `POST`
- Endpoint: `/api/lawyers/search`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [SearchRequest](../models/SearchRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SearchRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const searchRequest: SearchRequest = {
    name: 'احمد',
    gender: 'male',
    countryId: '28',
    stateId: '5',
    cityId: '4',
    categoryId: '1',
    sortBy: 'id',
    sortDir: 'asc',
    perPage: '15',
    page: '1',
    typeId: '1',
  };

  const data = await serverSdk.lawyer.search(searchRequest);

  console.log(data);
})();
```

## info

# Lawyer Information Endpoint ## Overview This endpoint retrieves detailed information about a specific lawyer by their ID. It returns comprehensive data including personal details, professional credentials, service offerings, office locations, categories of expertise, client reviews, and ratings. ## Request Details **Method:** `POST` **Endpoint:** `{{domin_server}}/api/lawyers/info` ### Parameters The request requires the following parameter sent as **multipart/form-data**: \| Parameter \| Type \| Required \| Description \| \|-----------\|------\|----------\|-------------\| \| `id` \| integer \| Yes \| The unique identifier of the lawyer whose information you want to retrieve \| **Example:** `id: 1` ## Response Structure ### Success Response (200 OK) The endpoint returns a JSON object with the following structure: `json {   "status": 200,   "data": {     "message": "Lawyer Fetched successfully",     "lawyer": {       "id": integer,       "user_id": integer,       "first_name": string,       "last_name": string,       "gender": string,       "biography": string,       "phone_number": string,       "email": string,       "verified": string,       "code": string,       "issue_date": string,       "license_level": string,       "issuing_authority": string,       "country_id": integer,       "state_id": integer,       "city_id": integer,       "avatar_id": integer,       "start_working_date": datetime,       "is_featured": integer,       "wallet": string,       "balance": string,       "status": string,       "created_at": datetime,       "updated_at": datetime,       "categories": array,       "office__rooms": array,       "services": array,       "country": object,       "state": object,       "city": object,       "comments": array,       "avatar": object     }   },   "time": timestamp } ` ### Response Fields #### Lawyer Object - **Personal Information**: `first_name`, `last_name`, `gender`, `biography`, `phone_number`, `email` - **Professional Details**: `code`, `license_level`, `issuing_authority`, `verified`, `start_working_date` - **Location**: `country`, `state`, `city` (nested objects with id and name) - **Financial**: `wallet`, `balance` - **Metrics**: `total_likes`, `total_dislikes`, `comments_avg_rate`, `comments_sum_rate` - **Related Data**: - `categories`: Array of legal specializations - `services`: Array of offered services with pricing and duration - `office__rooms`: Array of office locations - `comments`: Array of client reviews with ratings - `avatar`: Profile image object with link ## Response Codes \| Status Code \| Description \| \|-------------\|-------------\| \| 200 \| Success - Lawyer information retrieved successfully \| \| 400 \| Bad Request - Invalid or missing `id` parameter \| \| 404 \| Not Found - Lawyer with specified ID does not exist \| \| 500 \| Internal Server Error - Server-side error occurred \| ## Visualization This request includes a **post-response script** that automatically visualizes the lawyer data in a formatted HTML table. The visualization displays: - ID - First Name - Last Name - Biography - Phone Number - Email - Verification Status - Country - State - City The table uses custom CSS styling with a light blue theme and hover effects for better readability. The visualization is automatically rendered in the Postman Visualizer tab after the request is sent. ## Notes - The endpoint uses the `{{domin_server}}` variable for the base URL, which should be configured in your environment - The response includes Persian/Farsi text for names and locations - The `verified` field indicates whether the lawyer's credentials have been verified (1 = verified) - Services include pricing in the local currency (﷼) and duration in minutes - Client ratings are averaged and displayed in the `comments_avg_rate` field

- HTTP Method: `POST`
- Endpoint: `/api/lawyers/info`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [LawyerInfoRequest](../models/LawyerInfoRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerInfoRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerInfoRequest: LawyerInfoRequest = {
    id: '1',
  };

  const data = await serverSdk.lawyer.info(lawyerInfoRequest);

  console.log(data);
})();
```

## services

- HTTP Method: `POST`
- Endpoint: `/api/lawyers/services`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [ServicesRequest](../models/ServicesRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, ServicesRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const servicesRequest: ServicesRequest = {
    id: '19',
  };

  const data = await serverSdk.lawyer.services(servicesRequest);

  console.log(data);
})();
```

## create

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/create`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [LawyerCreateRequest](../models/LawyerCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerCreateRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerCreateRequest: LawyerCreateRequest = {
    firstName: 'test',
    lastName: 'test2',
    biography: 'lorem iplosiommmmmmmm',
    phoneNumber: '09109693365',
    email: 'yousef@gmail.com',
    code: '123456789',
    countryId: '28',
    stateId: '4',
    cityId: '5',
    startWorkingDate: '2025/10/06',
    gender: 'male',
    issueDate: '2025/10/06',
    licenseLevel: 'کارشناسی',
    issuingAuthority: 'دانشگاه آزاد',
    type: 'trainee',
  };

  const data = await serverSdk.lawyer.create(lawyerCreateRequest);

  console.log(data);
})();
```

## boostList

- HTTP Method: `POST`
- Endpoint: `/api/lawyers/boost-list`

**Parameters**

| Name | Type                                                          | Required | Description       |
| :--- | :------------------------------------------------------------ | :------- | :---------------- |
| body | [LawyerBoostListRequest](../models/LawyerBoostListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { LawyerBoostListRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const lawyerBoostListRequest: LawyerBoostListRequest = {
    id: '1',
  };

  const data = await serverSdk.lawyer.boostList(lawyerBoostListRequest);

  console.log(data);
})();
```

## times

# Fetch Lawyer Times ## Overview This endpoint retrieves available time slots for a specific lawyer and service. It returns a list of scheduled times including their availability status, allowing clients to view when a lawyer is available for a particular service. ## Request Details **Method:** `POST` **Content-Type:** `multipart/form-data` ### Required Parameters \| Parameter \| Type \| Description \| \| --- \| --- \| --- \| \| `id` \| integer \| The unique identifier of the lawyer whose availability you want to fetch \| \| `service_id` \| integer \| The unique identifier of the service for which you want to check available times \| ## Response Format **Status Code:** `202 Accepted` The response returns a JSON object containing: - `status`: HTTP status code (202) - `data`: Object containing: - `message`: Success message - `times`: Array of time slot objects, each including: - `id`: Time slot ID - `lawyer_id`: Associated lawyer ID - `service_id`: Associated service ID - `date`: Available date (YYYY-MM-DD format) - `time`: Available time (HH:MM:SS format) - `status`: Availability status (e.g., "active") - `created_at`: Timestamp when the slot was created - `updated_at`: Timestamp when the slot was last updated - `time`: Request timestamp ## Example Use Case A client wants to book a consultation with lawyer ID 1 for service ID 1 (e.g., legal consultation). By calling this endpoint with these parameters, the system returns all available time slots for that lawyer and service, allowing the client to select a convenient appointment time. ## Sample Response `json {   "status": 202,   "data": {     "message": "Lawyer Times Fetched successfully",     "times": [       {         "id": 1,         "lawyer_id": 1,         "service_id": 1,         "date": "2025-10-30",         "time": "13:00:00",         "status": "active",         "created_at": "2025-09-27T09:27:31.000000Z",         "updated_at": "2025-09-27T09:27:31.000000Z"       }     ]   },   "time": "2025-10-19T13:05:46.119027Z" } `

- HTTP Method: `POST`
- Endpoint: `/api/lawyers/times`

**Parameters**

| Name | Type                                      | Required | Description       |
| :--- | :---------------------------------------- | :------- | :---------------- |
| body | [TimesRequest](../models/TimesRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ServerSdk, TimesRequest } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const timesRequest: TimesRequest = {
    id: '1',
    serviceId: '1',
  };

  const data = await serverSdk.lawyer.times(timesRequest);

  console.log(data);
})();
```
