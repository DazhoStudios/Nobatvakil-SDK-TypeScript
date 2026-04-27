# TimesService

A list of all methods in the `TimesService` service. Click on the method name to view detailed information about that method.

| Methods                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [list](#list)             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [create](#create)         | ### Endpoint Description This endpoint allows users to create a new time slot for a lawyer's service in the system. It is designed to facilitate the scheduling of appointments by providing necessary details such as the lawyer's ID, the service being offered, the date, and the time of the appointment. ### Request Parameters The request must be sent as a form-data payload with the following parameters: - **lawyer_id** (text): The unique identifier for the lawyer. - **service_id** (text): The unique identifier for the service being scheduled. - **date** (text): The date of the appointment, formatted according to the Asia/Tehran timezone (+3:30). - **time** (text): The time of the appointment, also formatted according to the Asia/Tehran timezone (+3:30). ### Response Structure Upon a successful request, the API will return a JSON object with the following structure: `javascript {   "status": 0,   "data": {     "message": "",     "time_list": {       "current_page": 0,       "data": [         {           "id": 0,           "lawyer_id": 0,           "service_id": 0,           "date": "",           "time": "",           "status": "",           "created_at": "",           "updated_at": "",           "orders": [],           "lawyer": {             "id": 0,             "user_id": 0,             "first_name": "",             "last_name": "",             "gender": "",             "biography": "",             "phone_number": "",             "email": "",             "verified": "",             "code": "",             "issue_date": null,             "license_level": null,             "issuing_authority": null,             "country_id": 0,             "state_id": 0,             "city_id": 0,             "avatar_id": null,             "start_working_date": null,             "is_featured": 0,             "featured_until": null,             "wallet": "",             "balance": "",             "created_at": "",             "updated_at": "",             "avatar": null           },           "service": {             "id": 0,             "lawyer_id": 0,             "name": "",             "slug": "",             "type_id": 0,             "duration": "",             "amount": 0,             "country_id": 0,             "created_at": "",             "updated_at": ""           }         }       ],       "first_page_url": "",       "from": 0,       "last_page": 0,       "last_page_url": "",       "links": [         {           "url": null,           "label": "",           "page": null,           "active": true         }       ],       "next_page_url": null,       "path": "",       "per_page": 0,       "prev_page_url": null,       "to": 0,       "total": 0     }   },   "time": "" } ` The response includes a status code indicating the success of the operation and a data object containing a message and a list of time slots created, along with details about the lawyer and the service associated with the appointment. |
| [update](#update)         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [delete\_](#delete_)      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [createBulk](#createbulk) | # نحوه استفاده از API ثبت نوبت‌های دسته‌جمعی ## مثال 1: ساده‌ترین حالت یکشنبه تا سه‌شنبه: 11 صبح تا 12 شب پنج‌شنبه: 8 صبح تا 12 ظهر `json {   "lawyer_id": 1,   "start": "2024-02-01",   "end": "2024-02-29",   "service_id": [34, 35, 36, 37],   "time_schedules": [     {       "days": [1, 2, 3],       "start": "11:00",       "end": "23:59"     },     {       "days": [5],       "start": "08:00",       "end": "12:00"     }   ] } ` ## مثال 2: با تکرار هفتگی همین برنامه رو 4 هفته تکرار کن: `json {   "lawyer_id": 1,   "start": "2024-02-01",   "end": "2024-02-07",   "service_id": [34, 35, 36, 37],   "time_schedules": [     {       "days": [1, 2, 3],       "start": "11:00",       "end": "23:59"     },     {       "days": [5],       "start": "08:00",       "end": "12:00"     }   ],   "repeat_mode": "weekly",   "repeat_number": 4 } ` ## مثال 3: برنامه پیچیده‌تر دوشنبه و چهارشنبه: 9 صبح تا 5 بعدازظهر جمعه: 10 صبح تا 2 بعدازظهر شنبه: 8 صبح تا 12 ظهر `json {   "lawyer_id": 1,   "start": "2024-03-01",   "end": "2024-03-31",   "service_id": [34, 35],   "time_schedules": [     {       "days": [2],       "start": "09:00",       "end": "17:00"     },     {       "days": [6],       "start": "10:00",       "end": "14:00"     },     {       "days": [0],       "start": "08:00",       "end": "12:00"     }   ],   "repeat_mode": "monthly",   "repeat_number": 3 } ` ## راهنمای روزهای هفته (تقویم ایرانی - شروع از شنبه) در این سیستم، هفته از شنبه شروع می‌شود: - 0 = شنبه (Saturday) - اول هفته - 1 = یکشنبه (Sunday) - 2 = دوشنبه (Monday) - 3 = سه‌شنبه (Tuesday) - 4 = چهارشنبه (Wednesday) - 5 = پنج‌شنبه (Thursday) - 6 = جمعه (Friday) - آخر هفته **توجه:** این متفاوت از Carbon است که در آن 0=یکشنبه است. سیستم به صورت خودکار تبدیل می‌کند. ## نحوه کار با Duration اگر service با id=34 دارای duration=60 باشد: - از ساعت 08:00 تا 12:00 - نوبت‌ها: 08:00, 09:00, 10:00, 11:00 اگر service با id=35 دارای duration=30 باشد: - از ساعت 08:00 تا 12:00 - نوبت‌ها: 08:00, 08:30, 09:00, 09:30, 10:00, 10:30, 11:00, 11:30 ## نکات مهم 1. **چک مالکیت**: سیستم چک می‌کند که وکیل متعلق به کاربر لاگین شده باشد 2. **چک سرویس‌ها**: تمام service_id ها باید متعلق به همان وکیل باشند 3. **Duplicate Prevention**: اگر نوبتی قبلاً ایجاد شده باشد، دوباره ایجاد نمی‌شود 4. **Validation**: تمام تاریخ‌ها و ساعت‌ها validate می‌شوند ## پاسخ موفق `json {   "status": "success",   "message": "Available times generated successfully",   "data": {     "created_slots": 450,     "skipped_slots": 12,     "errors": []   } } ` ## پاسخ خطا `json {   "status": 422,   "data": {     "message": "Validation failed",     "errors": {       "service_id": ["Some services do not belong to this lawyer"]     }   },   "time": "2024-02-04 10:30:00" } ` EndFragment                                                                                                                                                                                                                                         |

## list

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/times/list`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [TimesListRequest](../models/TimesListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, TimesListRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const timesListRequest: TimesListRequest = {
    id: '19',
  };

  const data = await nobatvakilServerSdk.times.list(timesListRequest);

  console.log(data);
})();
```

## create

### Endpoint Description This endpoint allows users to create a new time slot for a lawyer's service in the system. It is designed to facilitate the scheduling of appointments by providing necessary details such as the lawyer's ID, the service being offered, the date, and the time of the appointment. ### Request Parameters The request must be sent as a form-data payload with the following parameters: - **lawyer_id** (text): The unique identifier for the lawyer. - **service_id** (text): The unique identifier for the service being scheduled. - **date** (text): The date of the appointment, formatted according to the Asia/Tehran timezone (+3:30). - **time** (text): The time of the appointment, also formatted according to the Asia/Tehran timezone (+3:30). ### Response Structure Upon a successful request, the API will return a JSON object with the following structure: `javascript {   "status": 0,   "data": {     "message": "",     "time_list": {       "current_page": 0,       "data": [         {           "id": 0,           "lawyer_id": 0,           "service_id": 0,           "date": "",           "time": "",           "status": "",           "created_at": "",           "updated_at": "",           "orders": [],           "lawyer": {             "id": 0,             "user_id": 0,             "first_name": "",             "last_name": "",             "gender": "",             "biography": "",             "phone_number": "",             "email": "",             "verified": "",             "code": "",             "issue_date": null,             "license_level": null,             "issuing_authority": null,             "country_id": 0,             "state_id": 0,             "city_id": 0,             "avatar_id": null,             "start_working_date": null,             "is_featured": 0,             "featured_until": null,             "wallet": "",             "balance": "",             "created_at": "",             "updated_at": "",             "avatar": null           },           "service": {             "id": 0,             "lawyer_id": 0,             "name": "",             "slug": "",             "type_id": 0,             "duration": "",             "amount": 0,             "country_id": 0,             "created_at": "",             "updated_at": ""           }         }       ],       "first_page_url": "",       "from": 0,       "last_page": 0,       "last_page_url": "",       "links": [         {           "url": null,           "label": "",           "page": null,           "active": true         }       ],       "next_page_url": null,       "path": "",       "per_page": 0,       "prev_page_url": null,       "to": 0,       "total": 0     }   },   "time": "" } ` The response includes a status code indicating the success of the operation and a data object containing a message and a list of time slots created, along with details about the lawyer and the service associated with the appointment.

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/times/create`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [TimesCreateRequest](../models/TimesCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, TimesCreateRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const timesCreateRequest: TimesCreateRequest = {
    lawyerId: '2',
    serviceId: '1',
    date: '2025-10-18',
    time: '12:00:00',
  };

  const data = await nobatvakilServerSdk.times.create(timesCreateRequest);

  console.log(data);
})();
```

## update

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/times/update`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [TimesUpdateRequest](../models/TimesUpdateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, TimesUpdateRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const timesUpdateRequest: TimesUpdateRequest = {
    id: '11',
    lawyerId: '1',
    serviceId: '1',
    date: '2025-10-18',
    time: '12:00:00',
  };

  const data = await nobatvakilServerSdk.times.update(timesUpdateRequest);

  console.log(data);
})();
```

## delete\_

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/times/delete`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [TimesDeleteRequest](../models/TimesDeleteRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, TimesDeleteRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const timesDeleteRequest: TimesDeleteRequest = {
    id: '125',
  };

  const data = await nobatvakilServerSdk.times.delete_(timesDeleteRequest);

  console.log(data);
})();
```

## createBulk

# نحوه استفاده از API ثبت نوبت‌های دسته‌جمعی ## مثال 1: ساده‌ترین حالت یکشنبه تا سه‌شنبه: 11 صبح تا 12 شب پنج‌شنبه: 8 صبح تا 12 ظهر `json {   "lawyer_id": 1,   "start": "2024-02-01",   "end": "2024-02-29",   "service_id": [34, 35, 36, 37],   "time_schedules": [     {       "days": [1, 2, 3],       "start": "11:00",       "end": "23:59"     },     {       "days": [5],       "start": "08:00",       "end": "12:00"     }   ] } ` ## مثال 2: با تکرار هفتگی همین برنامه رو 4 هفته تکرار کن: `json {   "lawyer_id": 1,   "start": "2024-02-01",   "end": "2024-02-07",   "service_id": [34, 35, 36, 37],   "time_schedules": [     {       "days": [1, 2, 3],       "start": "11:00",       "end": "23:59"     },     {       "days": [5],       "start": "08:00",       "end": "12:00"     }   ],   "repeat_mode": "weekly",   "repeat_number": 4 } ` ## مثال 3: برنامه پیچیده‌تر دوشنبه و چهارشنبه: 9 صبح تا 5 بعدازظهر جمعه: 10 صبح تا 2 بعدازظهر شنبه: 8 صبح تا 12 ظهر `json {   "lawyer_id": 1,   "start": "2024-03-01",   "end": "2024-03-31",   "service_id": [34, 35],   "time_schedules": [     {       "days": [2],       "start": "09:00",       "end": "17:00"     },     {       "days": [6],       "start": "10:00",       "end": "14:00"     },     {       "days": [0],       "start": "08:00",       "end": "12:00"     }   ],   "repeat_mode": "monthly",   "repeat_number": 3 } ` ## راهنمای روزهای هفته (تقویم ایرانی - شروع از شنبه) در این سیستم، هفته از شنبه شروع می‌شود: - 0 = شنبه (Saturday) - اول هفته - 1 = یکشنبه (Sunday) - 2 = دوشنبه (Monday) - 3 = سه‌شنبه (Tuesday) - 4 = چهارشنبه (Wednesday) - 5 = پنج‌شنبه (Thursday) - 6 = جمعه (Friday) - آخر هفته **توجه:** این متفاوت از Carbon است که در آن 0=یکشنبه است. سیستم به صورت خودکار تبدیل می‌کند. ## نحوه کار با Duration اگر service با id=34 دارای duration=60 باشد: - از ساعت 08:00 تا 12:00 - نوبت‌ها: 08:00, 09:00, 10:00, 11:00 اگر service با id=35 دارای duration=30 باشد: - از ساعت 08:00 تا 12:00 - نوبت‌ها: 08:00, 08:30, 09:00, 09:30, 10:00, 10:30, 11:00, 11:30 ## نکات مهم 1. **چک مالکیت**: سیستم چک می‌کند که وکیل متعلق به کاربر لاگین شده باشد 2. **چک سرویس‌ها**: تمام service_id ها باید متعلق به همان وکیل باشند 3. **Duplicate Prevention**: اگر نوبتی قبلاً ایجاد شده باشد، دوباره ایجاد نمی‌شود 4. **Validation**: تمام تاریخ‌ها و ساعت‌ها validate می‌شوند ## پاسخ موفق `json {   "status": "success",   "message": "Available times generated successfully",   "data": {     "created_slots": 450,     "skipped_slots": 12,     "errors": []   } } ` ## پاسخ خطا `json {   "status": 422,   "data": {     "message": "Validation failed",     "errors": {       "service_id": ["Some services do not belong to this lawyer"]     }   },   "time": "2024-02-04 10:30:00" } ` EndFragment

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/times/create-bulk`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [CreateBulkRequest](../models/CreateBulkRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CreateBulkRequest, NobatvakilServerSdk, TimeSchedules } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const timeSchedules: TimeSchedules = {
    days: [1],
    start: '11:00',
    end: '23:59',
  };

  const createBulkRequest: CreateBulkRequest = {
    lawyerId: 2,
    start: '2024-02-05',
    end: '2024-02-11',
    serviceId: [1],
    timeSchedules: [timeSchedules],
  };

  const data = await nobatvakilServerSdk.times.createBulk(createBulkRequest);

  console.log(data);
})();
```
