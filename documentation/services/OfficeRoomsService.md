# OfficeRoomsService

A list of all methods in the `OfficeRoomsService` service. Click on the method name to view detailed information about that method.

| Methods              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [list](#list)        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [create](#create)    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [edit](#edit)        | ## Edit Lawyer Office/Room Information This endpoint allows updating the office/room information for a lawyer in the system. ### Request Details **Method:** `POST` **URL:** `{{domin_server}}/api/lawyer/dashboard/rooms/edit` ### Request Parameters The request uses **multipart/form-data** format with the following fields: \| Parameter \| Type \| Required \| Description \| \| --- \| --- \| --- \| --- \| \| `lawyer_id` \| integer \| Yes \| The unique identifier of the lawyer whose office information is being updated \| \| `address_id` \| integer \| Yes \| The unique identifier of the address record being modified \| \| `name` \| string \| Yes \| The name of the office/room (supports Persian characters) \| \| `tel_numbers` \| string \| Yes \| Telephone number(s) for the office (e.g., 02612345678) \| \| `address` \| string \| Yes \| The complete physical address of the office (supports Persian characters) \| \| `location_link` \| string \| Yes \| A URL link to the office location on a map service (e.g., Neshan map link) \| ### Successful Response **Status Code:** `200 OK` **Response Body:** `json {   "status": 200,   "data": {     "message": "Success Update Lawyer Office"   } } ` ### Example Usage This endpoint is used when a lawyer needs to update their office details such as changing the office name, updating contact numbers, modifying the address, or updating the location map link. |
| [delete\_](#delete_) | ## Delete Lawyer Office Room This endpoint deletes a specific office room/address associated with a lawyer's dashboard. ### Endpoint `POST {{domin_server}}/api/lawyer/dashboard/rooms/delete` ### Request Body Parameters The request uses **multipart/formdata** with the following required parameters: \| Parameter \| Type \| Required \| Description \| Example \| \| --- \| --- \| --- \| --- \| --- \| \| `lawyer_id` \| integer \| Yes \| The unique identifier of the lawyer \| `3` \| \| `address_id` \| integer \| Yes \| The unique identifier of the office address/room to be deleted \| `1` \| ### Success Response **Status Code:** `200 OK` `json {   "status": 200,   "data": {     "message": "Success Delete Lawyer Office"   } } ` ### Notes - Both `lawyer_id` and `address_id` are required for successful deletion - Ensure the lawyer has proper authorization to delete the specified office room - The deletion is permanent and cannot be undone - Verify that the `address_id` belongs to the specified `lawyer_id` before making the request                                                                                                                                                                                                                                                                                                                                                                               |

## list

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/rooms/list`

**Parameters**

| Name | Type                                                          | Required | Description       |
| :--- | :------------------------------------------------------------ | :------- | :---------------- |
| body | [OfficeRoomsListRequest](../models/OfficeRoomsListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, OfficeRoomsListRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const officeRoomsListRequest: OfficeRoomsListRequest = {
    lawyerId: '1',
  };

  const data = await nobatvakilServerSdk.officeRooms.list(officeRoomsListRequest);

  console.log(data);
})();
```

## create

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/rooms/create`

**Parameters**

| Name | Type                                                              | Required | Description       |
| :--- | :---------------------------------------------------------------- | :------- | :---------------- |
| body | [OfficeRoomsCreateRequest](../models/OfficeRoomsCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, OfficeRoomsCreateRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const officeRoomsCreateRequest: OfficeRoomsCreateRequest = {
    lawyerId: '1',
    name: 'دفتر مرکزی',
    telNumbers: '02612345678',
    address: 'کرج، میدان خوارزمی، دانشگاه خوارزمی',
    locationLink: 'https://neshan.org/map/4412s1d4f2d',
  };

  const data = await nobatvakilServerSdk.officeRooms.create(officeRoomsCreateRequest);

  console.log(data);
})();
```

## edit

## Edit Lawyer Office/Room Information This endpoint allows updating the office/room information for a lawyer in the system. ### Request Details **Method:** `POST` **URL:** `{{domin_server}}/api/lawyer/dashboard/rooms/edit` ### Request Parameters The request uses **multipart/form-data** format with the following fields: \| Parameter \| Type \| Required \| Description \| \| --- \| --- \| --- \| --- \| \| `lawyer_id` \| integer \| Yes \| The unique identifier of the lawyer whose office information is being updated \| \| `address_id` \| integer \| Yes \| The unique identifier of the address record being modified \| \| `name` \| string \| Yes \| The name of the office/room (supports Persian characters) \| \| `tel_numbers` \| string \| Yes \| Telephone number(s) for the office (e.g., 02612345678) \| \| `address` \| string \| Yes \| The complete physical address of the office (supports Persian characters) \| \| `location_link` \| string \| Yes \| A URL link to the office location on a map service (e.g., Neshan map link) \| ### Successful Response **Status Code:** `200 OK` **Response Body:** `json {   "status": 200,   "data": {     "message": "Success Update Lawyer Office"   } } ` ### Example Usage This endpoint is used when a lawyer needs to update their office details such as changing the office name, updating contact numbers, modifying the address, or updating the location map link.

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/rooms/edit`

**Parameters**

| Name | Type                                    | Required | Description       |
| :--- | :-------------------------------------- | :------- | :---------------- |
| body | [EditRequest](../models/EditRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { EditRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const editRequest: EditRequest = {
    lawyerId: '3',
    addressId: '1',
    name: 'اسم دفتر',
    telNumbers: '02612345678',
    address: 'کرج، خیابان شهید بهشتی',
    locationLink: 'https://neshan.org/map/dhvcdhsvc',
  };

  const data = await nobatvakilServerSdk.officeRooms.edit(editRequest);

  console.log(data);
})();
```

## delete\_

## Delete Lawyer Office Room This endpoint deletes a specific office room/address associated with a lawyer's dashboard. ### Endpoint `POST {{domin_server}}/api/lawyer/dashboard/rooms/delete` ### Request Body Parameters The request uses **multipart/formdata** with the following required parameters: \| Parameter \| Type \| Required \| Description \| Example \| \| --- \| --- \| --- \| --- \| --- \| \| `lawyer_id` \| integer \| Yes \| The unique identifier of the lawyer \| `3` \| \| `address_id` \| integer \| Yes \| The unique identifier of the office address/room to be deleted \| `1` \| ### Success Response **Status Code:** `200 OK` `json {   "status": 200,   "data": {     "message": "Success Delete Lawyer Office"   } } ` ### Notes - Both `lawyer_id` and `address_id` are required for successful deletion - Ensure the lawyer has proper authorization to delete the specified office room - The deletion is permanent and cannot be undone - Verify that the `address_id` belongs to the specified `lawyer_id` before making the request

- HTTP Method: `POST`
- Endpoint: `/api/lawyer/dashboard/rooms/delete`

**Parameters**

| Name | Type                                                              | Required | Description       |
| :--- | :---------------------------------------------------------------- | :------- | :---------------- |
| body | [OfficeRoomsDeleteRequest](../models/OfficeRoomsDeleteRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, OfficeRoomsDeleteRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const officeRoomsDeleteRequest: OfficeRoomsDeleteRequest = {
    lawyerId: '3',
    addressId: '1',
  };

  const data = await nobatvakilServerSdk.officeRooms.delete_(officeRoomsDeleteRequest);

  console.log(data);
})();
```
