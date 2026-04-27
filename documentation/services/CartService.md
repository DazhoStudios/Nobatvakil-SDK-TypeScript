# CartService

A list of all methods in the `CartService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [create](#create)             | ### Create Cart API Endpoint This endpoint allows users to create a new cart entry by specifying a lawyer, a service, and a date for the service. #### Request - **Method:** POST - **URL:** `{{domin_server}}/api/cart/create` - **Request Body (form-data):** - `lawyer_id` (type: text): The unique identifier of the lawyer for whom the service is being requested. - `service_id` (type: text): The unique identifier of the service that the user wants to avail. - `date_id` (type: text): The unique identifier for the date when the service is requested. #### Response The API will return a JSON response indicating the result of the cart creation attempt. The response structure may vary based on the outcome of the request: - { "status": 0, "data": { "message": "", "cart": { "id": 0, "user_id": 0, "lawyer_id": 0, "service_id": 0, "lawyer_available_time_id": 0, "coupon_id": null, "amount": "", "fee": "", "tax": "", "coupon_amount": "", "end_time": "", "created_at": "", "updated_at": "", "user": { ... }, "lawyer": { ... }, "available_time": { ... }, "coupon": null, "service": { ... } } }} - { "status": 0, "data": { "message": "" }, "time": ""} #### Notes - Ensure that all required parameters are included in the request body to avoid validation errors. - The `cart` object in the successful response contains detailed information about the created cart, including user and lawyer details, service information, and timestamps for creation and updates. - The `status` field in the response indicates the success or failure of the operation, where `0` typically denotes success. |
| [info](#info)                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [addCoupon](#addcoupon)       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [removeCoupon](#removecoupon) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [pay](#pay)                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## create

### Create Cart API Endpoint This endpoint allows users to create a new cart entry by specifying a lawyer, a service, and a date for the service. #### Request - **Method:** POST - **URL:** `{{domin_server}}/api/cart/create` - **Request Body (form-data):** - `lawyer_id` (type: text): The unique identifier of the lawyer for whom the service is being requested. - `service_id` (type: text): The unique identifier of the service that the user wants to avail. - `date_id` (type: text): The unique identifier for the date when the service is requested. #### Response The API will return a JSON response indicating the result of the cart creation attempt. The response structure may vary based on the outcome of the request: - { "status": 0, "data": { "message": "", "cart": { "id": 0, "user_id": 0, "lawyer_id": 0, "service_id": 0, "lawyer_available_time_id": 0, "coupon_id": null, "amount": "", "fee": "", "tax": "", "coupon_amount": "", "end_time": "", "created_at": "", "updated_at": "", "user": { ... }, "lawyer": { ... }, "available_time": { ... }, "coupon": null, "service": { ... } } }} - { "status": 0, "data": { "message": "" }, "time": ""} #### Notes - Ensure that all required parameters are included in the request body to avoid validation errors. - The `cart` object in the successful response contains detailed information about the created cart, including user and lawyer details, service information, and timestamps for creation and updates. - The `status` field in the response indicates the success or failure of the operation, where `0` typically denotes success.

- HTTP Method: `POST`
- Endpoint: `/api/cart/create`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [CartCreateRequest](../models/CartCreateRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CartCreateRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const cartCreateRequest: CartCreateRequest = {
    lawyerId: '3',
    serviceId: '2',
    dateId: '1',
  };

  const data = await nobatvakilServerSdk.cart.create(cartCreateRequest);

  console.log(data);
})();
```

## info

- HTTP Method: `POST`
- Endpoint: `/api/cart/info`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [CartInfoRequest](../models/CartInfoRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CartInfoRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const cartInfoRequest: CartInfoRequest = {
    id: '150',
  };

  const data = await nobatvakilServerSdk.cart.info(cartInfoRequest);

  console.log(data);
})();
```

## addCoupon

- HTTP Method: `POST`
- Endpoint: `/api/cart/add_coupon`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [AddCouponRequest](../models/AddCouponRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { AddCouponRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const addCouponRequest: AddCouponRequest = {
    cartId: '1',
    code: 'hediyeh',
  };

  const data = await nobatvakilServerSdk.cart.addCoupon(addCouponRequest);

  console.log(data);
})();
```

## removeCoupon

- HTTP Method: `POST`
- Endpoint: `/api/cart/remove_coupon`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [RemoveCouponRequest](../models/RemoveCouponRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NobatvakilServerSdk, RemoveCouponRequest } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const removeCouponRequest: RemoveCouponRequest = {
    id: '1',
  };

  const data = await nobatvakilServerSdk.cart.removeCoupon(removeCouponRequest);

  console.log(data);
})();
```

## pay

- HTTP Method: `POST`
- Endpoint: `/api/cart/pay`

**Parameters**

| Name | Type                                          | Required | Description       |
| :--- | :-------------------------------------------- | :------- | :---------------- |
| body | [CartPayRequest](../models/CartPayRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CartPayRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const cartPayRequest: CartPayRequest = {
    id: '175',
    payMode: 'zarinpal',
  };

  const data = await nobatvakilServerSdk.cart.pay(cartPayRequest);

  console.log(data);
})();
```
