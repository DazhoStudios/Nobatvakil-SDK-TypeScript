# ServerSdk TypeScript SDK 3.0.0

Welcome to the ServerSdk SDK documentation. This guide will help you get started with integrating and using the ServerSdk SDK in your project.

## Versions

- SDK version: `3.0.0`

## About the API

This Folder Provided for Production With Liara

[Liara Console](https://console.liara.run)

## Table of Contents

- [Setup & Configuration](#setup--configuration)
  - [Supported Language Versions](#supported-language-versions)
  - [Installation](#installation)
- [Authentication](#authentication)
  - [Access Token Authentication](#access-token-authentication)
- [Setting a Custom Timeout](#setting-a-custom-timeout)
- [Sample Usage](#sample-usage)
- [Services](#services)
- [Models](#models)

# Setup & Configuration

## Supported Language Versions

This SDK is compatible with the following versions: `TypeScript >= 4.8.4`

## Installation

To get started with the SDK, we recommend installing using `npm` or `yarn`:

```bash
npm install server-sdk
```

or

```bash
yarn add server-sdk
```

## Authentication

### Access Token Authentication

The ServerSdk API uses an Access Token for authentication.

This token must be provided to authenticate your requests to the API.

#### Setting the Access Token

When you initialize the SDK, you can set the access token as follows:

```ts
const sdk = new ServerSdk({ token: 'YOUR_TOKEN' });
```

If you need to set or update the access token after initializing the SDK, you can use:

```ts
const sdk = new ServerSdk();
sdk.token = 'YOUR_TOKEN';
```

## Setting a Custom Timeout

You can set a custom timeout for the SDK's HTTP requests as follows:

```ts
const serverSdk = new ServerSdk({ timeout: 10000 });
```

# Sample Usage

Below is a comprehensive example demonstrating how to authenticate and call a simple endpoint:

```ts
import { ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await serverSdk.serverSdk.countries();

  console.log(data);
})();
```

## Services

The SDK provides various services to interact with the API.

<details>
<summary>Below is a list of all available services with links to their detailed documentation:</summary>

| Name                                                           |
| :------------------------------------------------------------- |
| [ServerSdkService](documentation/services/ServerSdkService.md) |

</details>

## Models

The SDK includes several models that represent the data structures used in API requests and responses. These models help in organizing and managing the data efficiently.

<details>
<summary>Below is a list of all available models with links to their detailed documentation:</summary>

| Name                                                                                     | Description |
| :--------------------------------------------------------------------------------------- | :---------- |
| [SendOtpRequest](documentation/models/SendOtpRequest.md)                                 |             |
| [VerifyOtpRequest](documentation/models/VerifyOtpRequest.md)                             |             |
| [StatesRequest](documentation/models/StatesRequest.md)                                   |             |
| [CitiesRequest](documentation/models/CitiesRequest.md)                                   |             |
| [SearchHeaderRequest](documentation/models/SearchHeaderRequest.md)                       |             |
| [OneRequest](documentation/models/OneRequest.md)                                         |             |
| [ServerSdkAddRequest1](documentation/models/ServerSdkAddRequest1.md)                     |             |
| [ServerSdkRemoveRequest1](documentation/models/ServerSdkRemoveRequest1.md)               |             |
| [ServerSdkUpdateAvatarRequest1](documentation/models/ServerSdkUpdateAvatarRequest1.md)   |             |
| [ServerSdkUpdateProfileRequest1](documentation/models/ServerSdkUpdateProfileRequest1.md) |             |
| [ServerSdkRemoveRequest2](documentation/models/ServerSdkRemoveRequest2.md)               |             |
| [ServerSdkRemoveRequest3](documentation/models/ServerSdkRemoveRequest3.md)               |             |
| [ServerSdkAddRequest2](documentation/models/ServerSdkAddRequest2.md)                     |             |
| [ServerSdkRemoveRequest4](documentation/models/ServerSdkRemoveRequest4.md)               |             |
| [ServerSdkUpdateRequest1](documentation/models/ServerSdkUpdateRequest1.md)               |             |
| [ServerSdkCreateRequest1](documentation/models/ServerSdkCreateRequest1.md)               |             |
| [ServerSdkListsRequest1](documentation/models/ServerSdkListsRequest1.md)                 |             |
| [ServerSdkInfoRequest1](documentation/models/ServerSdkInfoRequest1.md)                   |             |
| [ServerSdkListRequest1](documentation/models/ServerSdkListRequest1.md)                   |             |
| [ServerSdkCreateRequest2](documentation/models/ServerSdkCreateRequest2.md)               |             |
| [TradeMarketRequest](documentation/models/TradeMarketRequest.md)                         |             |
| [WelcomeWizardRequest](documentation/models/WelcomeWizardRequest.md)                     |             |
| [ServerSdkUpdateProfileRequest2](documentation/models/ServerSdkUpdateProfileRequest2.md) |             |
| [ServerSdkUpdateAvatarRequest2](documentation/models/ServerSdkUpdateAvatarRequest2.md)   |             |
| [DeleteAvatarRequest](documentation/models/DeleteAvatarRequest.md)                       |             |
| [ServerSdkListRequest2](documentation/models/ServerSdkListRequest2.md)                   |             |
| [ServerSdkPayRequest1](documentation/models/ServerSdkPayRequest1.md)                     |             |
| [ServerSdkListRequest3](documentation/models/ServerSdkListRequest3.md)                   |             |
| [ServerSdkCreateRequest3](documentation/models/ServerSdkCreateRequest3.md)               |             |
| [EditRequest](documentation/models/EditRequest.md)                                       |             |
| [ServerSdkDeleteRequest1](documentation/models/ServerSdkDeleteRequest1.md)               |             |
| [ServerSdkInfoRequest2](documentation/models/ServerSdkInfoRequest2.md)                   |             |
| [ServerSdkListsRequest2](documentation/models/ServerSdkListsRequest2.md)                 |             |
| [ServerSdkListRequest4](documentation/models/ServerSdkListRequest4.md)                   |             |
| [ServerSdkCreateRequest4](documentation/models/ServerSdkCreateRequest4.md)               |             |
| [ServerSdkUpdateRequest2](documentation/models/ServerSdkUpdateRequest2.md)               |             |
| [ServerSdkDeleteRequest2](documentation/models/ServerSdkDeleteRequest2.md)               |             |
| [CreateBulkRequest](documentation/models/CreateBulkRequest.md)                           |             |
| [TimeSchedules](documentation/models/TimeSchedules.md)                                   |             |
| [ServerSdkListsRequest3](documentation/models/ServerSdkListsRequest3.md)                 |             |
| [ServerSdkUpdateRequest3](documentation/models/ServerSdkUpdateRequest3.md)               |             |
| [ServerSdkListRequest5](documentation/models/ServerSdkListRequest5.md)                   |             |
| [ServerSdkCreateRequest5](documentation/models/ServerSdkCreateRequest5.md)               |             |
| [ServerSdkCreateRequest6](documentation/models/ServerSdkCreateRequest6.md)               |             |
| [ServerSdkListRequest6](documentation/models/ServerSdkListRequest6.md)                   |             |
| [ServerSdkInfoRequest3](documentation/models/ServerSdkInfoRequest3.md)                   |             |
| [AddBalanceRequest](documentation/models/AddBalanceRequest.md)                           |             |
| [ServerSdkListsRequest4](documentation/models/ServerSdkListsRequest4.md)                 |             |
| [ServerSdkCreateRequest7](documentation/models/ServerSdkCreateRequest7.md)               |             |
| [ServerSdkRemoveRequest5](documentation/models/ServerSdkRemoveRequest5.md)               |             |
| [ServerSdkListRequest7](documentation/models/ServerSdkListRequest7.md)                   |             |
| [ServerSdkCreateRequest8](documentation/models/ServerSdkCreateRequest8.md)               |             |
| [ServerSdkListRequest8](documentation/models/ServerSdkListRequest8.md)                   |             |
| [ServerSdkUpdateRequest4](documentation/models/ServerSdkUpdateRequest4.md)               |             |
| [SearchRequest](documentation/models/SearchRequest.md)                                   |             |
| [ServerSdkInfoRequest4](documentation/models/ServerSdkInfoRequest4.md)                   |             |
| [ServicesRequest](documentation/models/ServicesRequest.md)                               |             |
| [ServerSdkCreateRequest9](documentation/models/ServerSdkCreateRequest9.md)               |             |
| [BoostListRequest](documentation/models/BoostListRequest.md)                             |             |
| [TimesRequest](documentation/models/TimesRequest.md)                                     |             |
| [ServerSdkCreateRequest10](documentation/models/ServerSdkCreateRequest10.md)             |             |
| [ServerSdkInfoRequest5](documentation/models/ServerSdkInfoRequest5.md)                   |             |
| [AddCouponRequest](documentation/models/AddCouponRequest.md)                             |             |
| [RemoveCouponRequest](documentation/models/RemoveCouponRequest.md)                       |             |
| [ServerSdkPayRequest2](documentation/models/ServerSdkPayRequest2.md)                     |             |
| [MessageListRequest](documentation/models/MessageListRequest.md)                         |             |
| [ServerSdkSendMessageRequest1](documentation/models/ServerSdkSendMessageRequest1.md)     |             |
| [OfferRequest](documentation/models/OfferRequest.md)                                     |             |
| [AnswerRequest](documentation/models/AnswerRequest.md)                                   |             |
| [JoinRequest](documentation/models/JoinRequest.md)                                       |             |
| [ServerSdkInfoRequest6](documentation/models/ServerSdkInfoRequest6.md)                   |             |
| [ServerSdkCreateRequest11](documentation/models/ServerSdkCreateRequest11.md)             |             |
| [ServerSdkSendMessageRequest2](documentation/models/ServerSdkSendMessageRequest2.md)     |             |
| [FaqListRequest](documentation/models/FaqListRequest.md)                                 |             |

</details>
