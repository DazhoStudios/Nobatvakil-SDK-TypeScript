# Nobatvakil sdk TypeScript SDK 1.0.1

Welcome to the ServerSdk SDK documentation. This guide will help you get started with integrating and using the ServerSdk SDK in your project.

## Versions

- SDK version: `1.0.1`

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

  const data = await serverSdk.states.countries();

  console.log(data);
})();
```

## Services

The SDK provides various services to interact with the API.

<details>
<summary>Below is a list of all available services with links to their detailed documentation:</summary>

| Name                                                                                                                 |
| :------------------------------------------------------------------------------------------------------------------- |
| [AuthService](documentation/services/AuthService.md)                                                                 |
| [StatesService](documentation/services/StatesService.md)                                                             |
| [SystemService](documentation/services/SystemService.md)                                                             |
| [CategoryService](documentation/services/CategoryService.md)                                                         |
| [CountService](documentation/services/CountService.md)                                                               |
| [SearchService](documentation/services/SearchService.md)                                                             |
| [SeoService](documentation/services/SeoService.md)                                                                   |
| [ConfigService](documentation/services/ConfigService.md)                                                             |
| [StatesInfoService](documentation/services/StatesInfoService.md)                                                     |
| [SeoPagesService](documentation/services/SeoPagesService.md)                                                         |
| [CategoryAndSlugService](documentation/services/CategoryAndSlugService.md)                                           |
| [FavoritesService](documentation/services/FavoritesService.md)                                                       |
| [ProfileService](documentation/services/ProfileService.md)                                                           |
| [CartsService](documentation/services/CartsService.md)                                                               |
| [CommentsService](documentation/services/CommentsService.md)                                                         |
| [PaymentsService](documentation/services/PaymentsService.md)                                                         |
| [WalletService](documentation/services/WalletService.md)                                                             |
| [SessionsService](documentation/services/SessionsService.md)                                                         |
| [NotificationsService](documentation/services/NotificationsService.md)                                               |
| [UserDashBoardOrdersCommentsService](documentation/services/UserDashBoardOrdersCommentsService.md)                   |
| [OrdersService](documentation/services/OrdersService.md)                                                             |
| [SignaturesService](documentation/services/SignaturesService.md)                                                     |
| [AchievementBadgeService](documentation/services/AchievementBadgeService.md)                                         |
| [OffersService](documentation/services/OffersService.md)                                                             |
| [CoinsService](documentation/services/CoinsService.md)                                                               |
| [DashBoardService](documentation/services/DashBoardService.md)                                                       |
| [UserService](documentation/services/UserService.md)                                                                 |
| [LawyerProfileService](documentation/services/LawyerProfileService.md)                                               |
| [BoostService](documentation/services/BoostService.md)                                                               |
| [OfficeRoomsService](documentation/services/OfficeRoomsService.md)                                                   |
| [LawyerDashboardOrdersService](documentation/services/LawyerDashboardOrdersService.md)                               |
| [TimesService](documentation/services/TimesService.md)                                                               |
| [ServicesService](documentation/services/ServicesService.md)                                                         |
| [CardsService](documentation/services/CardsService.md)                                                               |
| [WithdrawalRequestsService](documentation/services/WithdrawalRequestsService.md)                                     |
| [LawyerDashboardWalletService](documentation/services/LawyerDashboardWalletService.md)                               |
| [LawyerDashboardCategoryService](documentation/services/LawyerDashboardCategoryService.md)                           |
| [LawyerDashboardSignaturesService](documentation/services/LawyerDashboardSignaturesService.md)                       |
| [LawyerDashboardAchievementBadgeService](documentation/services/LawyerDashboardAchievementBadgeService.md)           |
| [LeaderboardsService](documentation/services/LeaderboardsService.md)                                                 |
| [LawyerDashboardSettingsNotificationsService](documentation/services/LawyerDashboardSettingsNotificationsService.md) |
| [LawyerService](documentation/services/LawyerService.md)                                                             |
| [CartService](documentation/services/CartService.md)                                                                 |
| [ChatsService](documentation/services/ChatsService.md)                                                               |
| [ToolsService](documentation/services/ToolsService.md)                                                               |
| [CallsService](documentation/services/CallsService.md)                                                               |
| [BlogsService](documentation/services/BlogsService.md)                                                               |
| [MapsService](documentation/services/MapsService.md)                                                                 |
| [TicketsService](documentation/services/TicketsService.md)                                                           |
| [FaqService](documentation/services/FaqService.md)                                                                   |
| [UpService](documentation/services/UpService.md)                                                                     |

</details>

## Models

The SDK includes several models that represent the data structures used in API requests and responses. These models help in organizing and managing the data efficiently.

<details>
<summary>Below is a list of all available models with links to their detailed documentation:</summary>

| Name                                                                                                                           | Description |
| :----------------------------------------------------------------------------------------------------------------------------- | :---------- |
| [SendOtpRequest](documentation/models/SendOtpRequest.md)                                                                       |             |
| [VerifyOtpRequest](documentation/models/VerifyOtpRequest.md)                                                                   |             |
| [StatesRequest](documentation/models/StatesRequest.md)                                                                         |             |
| [CitiesRequest](documentation/models/CitiesRequest.md)                                                                         |             |
| [SearchHeaderRequest](documentation/models/SearchHeaderRequest.md)                                                             |             |
| [OneRequest](documentation/models/OneRequest.md)                                                                               |             |
| [FavoritesAddRequest](documentation/models/FavoritesAddRequest.md)                                                             |             |
| [FavoritesRemoveRequest](documentation/models/FavoritesRemoveRequest.md)                                                       |             |
| [ProfileUpdateAvatarRequest](documentation/models/ProfileUpdateAvatarRequest.md)                                               |             |
| [ProfileUpdateProfileRequest](documentation/models/ProfileUpdateProfileRequest.md)                                             |             |
| [CartsRemoveRequest](documentation/models/CartsRemoveRequest.md)                                                               |             |
| [CommentsRemoveRequest](documentation/models/CommentsRemoveRequest.md)                                                         |             |
| [WalletAddRequest](documentation/models/WalletAddRequest.md)                                                                   |             |
| [SessionsRemoveRequest](documentation/models/SessionsRemoveRequest.md)                                                         |             |
| [NotificationsUpdateRequest](documentation/models/NotificationsUpdateRequest.md)                                               |             |
| [UserDashBoardOrdersCommentsCreateRequest](documentation/models/UserDashBoardOrdersCommentsCreateRequest.md)                   |             |
| [OrdersListsRequest](documentation/models/OrdersListsRequest.md)                                                               |             |
| [OrdersInfoRequest](documentation/models/OrdersInfoRequest.md)                                                                 |             |
| [SignaturesListRequest](documentation/models/SignaturesListRequest.md)                                                         |             |
| [SignaturesCreateRequest](documentation/models/SignaturesCreateRequest.md)                                                     |             |
| [TradeMarketRequest](documentation/models/TradeMarketRequest.md)                                                               |             |
| [WelcomeWizardRequest](documentation/models/WelcomeWizardRequest.md)                                                           |             |
| [LawyerProfileUpdateProfileRequest](documentation/models/LawyerProfileUpdateProfileRequest.md)                                 |             |
| [LawyerProfileUpdateAvatarRequest](documentation/models/LawyerProfileUpdateAvatarRequest.md)                                   |             |
| [DeleteAvatarRequest](documentation/models/DeleteAvatarRequest.md)                                                             |             |
| [BoostListRequest](documentation/models/BoostListRequest.md)                                                                   |             |
| [BoostPayRequest](documentation/models/BoostPayRequest.md)                                                                     |             |
| [OfficeRoomsListRequest](documentation/models/OfficeRoomsListRequest.md)                                                       |             |
| [OfficeRoomsCreateRequest](documentation/models/OfficeRoomsCreateRequest.md)                                                   |             |
| [EditRequest](documentation/models/EditRequest.md)                                                                             |             |
| [OfficeRoomsDeleteRequest](documentation/models/OfficeRoomsDeleteRequest.md)                                                   |             |
| [LawyerDashboardOrdersInfoRequest](documentation/models/LawyerDashboardOrdersInfoRequest.md)                                   |             |
| [LawyerDashboardOrdersListsRequest](documentation/models/LawyerDashboardOrdersListsRequest.md)                                 |             |
| [TimesListRequest](documentation/models/TimesListRequest.md)                                                                   |             |
| [TimesCreateRequest](documentation/models/TimesCreateRequest.md)                                                               |             |
| [TimesUpdateRequest](documentation/models/TimesUpdateRequest.md)                                                               |             |
| [TimesDeleteRequest](documentation/models/TimesDeleteRequest.md)                                                               |             |
| [CreateBulkRequest](documentation/models/CreateBulkRequest.md)                                                                 |             |
| [TimeSchedules](documentation/models/TimeSchedules.md)                                                                         |             |
| [ServicesListsRequest](documentation/models/ServicesListsRequest.md)                                                           |             |
| [ServicesUpdateRequest](documentation/models/ServicesUpdateRequest.md)                                                         |             |
| [CardsListRequest](documentation/models/CardsListRequest.md)                                                                   |             |
| [CardsCreateRequest](documentation/models/CardsCreateRequest.md)                                                               |             |
| [WithdrawalRequestsCreateRequest](documentation/models/WithdrawalRequestsCreateRequest.md)                                     |             |
| [WithdrawalRequestsListRequest](documentation/models/WithdrawalRequestsListRequest.md)                                         |             |
| [LawyerDashboardWalletInfoRequest](documentation/models/LawyerDashboardWalletInfoRequest.md)                                   |             |
| [AddBalanceRequest](documentation/models/AddBalanceRequest.md)                                                                 |             |
| [LawyerDashboardCategoryListsRequest](documentation/models/LawyerDashboardCategoryListsRequest.md)                             |             |
| [LawyerDashboardCategoryCreateRequest](documentation/models/LawyerDashboardCategoryCreateRequest.md)                           |             |
| [LawyerDashboardCategoryRemoveRequest](documentation/models/LawyerDashboardCategoryRemoveRequest.md)                           |             |
| [LawyerDashboardSignaturesListRequest](documentation/models/LawyerDashboardSignaturesListRequest.md)                           |             |
| [LawyerDashboardSignaturesCreateRequest](documentation/models/LawyerDashboardSignaturesCreateRequest.md)                       |             |
| [LawyerDashboardAchievementBadgeListRequest](documentation/models/LawyerDashboardAchievementBadgeListRequest.md)               |             |
| [LawyerDashboardSettingsNotificationsUpdateRequest](documentation/models/LawyerDashboardSettingsNotificationsUpdateRequest.md) |             |
| [SearchRequest](documentation/models/SearchRequest.md)                                                                         |             |
| [LawyerInfoRequest](documentation/models/LawyerInfoRequest.md)                                                                 |             |
| [ServicesRequest](documentation/models/ServicesRequest.md)                                                                     |             |
| [LawyerCreateRequest](documentation/models/LawyerCreateRequest.md)                                                             |             |
| [LawyerBoostListRequest](documentation/models/LawyerBoostListRequest.md)                                                       |             |
| [TimesRequest](documentation/models/TimesRequest.md)                                                                           |             |
| [CartCreateRequest](documentation/models/CartCreateRequest.md)                                                                 |             |
| [CartInfoRequest](documentation/models/CartInfoRequest.md)                                                                     |             |
| [AddCouponRequest](documentation/models/AddCouponRequest.md)                                                                   |             |
| [RemoveCouponRequest](documentation/models/RemoveCouponRequest.md)                                                             |             |
| [CartPayRequest](documentation/models/CartPayRequest.md)                                                                       |             |
| [MessageListRequest](documentation/models/MessageListRequest.md)                                                               |             |
| [ChatsSendMessageRequest](documentation/models/ChatsSendMessageRequest.md)                                                     |             |
| [OfferRequest](documentation/models/OfferRequest.md)                                                                           |             |
| [AnswerRequest](documentation/models/AnswerRequest.md)                                                                         |             |
| [MemberOfRoomRequest](documentation/models/MemberOfRoomRequest.md)                                                             |             |
| [JoinRequest](documentation/models/JoinRequest.md)                                                                             |             |
| [MapsInfoRequest](documentation/models/MapsInfoRequest.md)                                                                     |             |
| [TicketsCreateRequest](documentation/models/TicketsCreateRequest.md)                                                           |             |
| [TicketsSendMessageRequest](documentation/models/TicketsSendMessageRequest.md)                                                 |             |
| [FaqListRequest](documentation/models/FaqListRequest.md)                                                                       |             |
| [CheckUpRequest](documentation/models/CheckUpRequest.md)                                                                       |             |

</details>
