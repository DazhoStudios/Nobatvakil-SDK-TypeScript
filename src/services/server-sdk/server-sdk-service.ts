import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { SendOtpRequest, sendOtpRequestRequest } from './models/send-otp-request';
import { VerifyOtpRequest, verifyOtpRequestRequest } from './models/verify-otp-request';
import { StatesRequest, statesRequestRequest } from './models/states-request';
import { CitiesRequest, citiesRequestRequest } from './models/cities-request';
import { SearchHeaderRequest, searchHeaderRequestRequest } from './models/search-header-request';
import { OneRequest, oneRequestRequest } from './models/one-request';
import {
  ServerSdkAddRequest1,
  serverSdkAddRequest1Request,
} from './models/server-sdk-add-request-1';
import {
  ServerSdkRemoveRequest1,
  serverSdkRemoveRequest1Request,
} from './models/server-sdk-remove-request-1';
import {
  ServerSdkUpdateAvatarRequest1,
  serverSdkUpdateAvatarRequest1Request,
} from './models/server-sdk-update-avatar-request-1';
import {
  ServerSdkUpdateProfileRequest1,
  serverSdkUpdateProfileRequest1Request,
} from './models/server-sdk-update-profile-request-1';
import {
  ServerSdkRemoveRequest2,
  serverSdkRemoveRequest2Request,
} from './models/server-sdk-remove-request-2';
import {
  ServerSdkRemoveRequest3,
  serverSdkRemoveRequest3Request,
} from './models/server-sdk-remove-request-3';
import {
  ServerSdkAddRequest2,
  serverSdkAddRequest2Request,
} from './models/server-sdk-add-request-2';
import {
  ServerSdkRemoveRequest4,
  serverSdkRemoveRequest4Request,
} from './models/server-sdk-remove-request-4';
import {
  ServerSdkUpdateRequest1,
  serverSdkUpdateRequest1Request,
} from './models/server-sdk-update-request-1';
import {
  ServerSdkCreateRequest1,
  serverSdkCreateRequest1Request,
} from './models/server-sdk-create-request-1';
import {
  ServerSdkListsRequest1,
  serverSdkListsRequest1Request,
} from './models/server-sdk-lists-request-1';
import {
  ServerSdkInfoRequest1,
  serverSdkInfoRequest1Request,
} from './models/server-sdk-info-request-1';
import {
  ServerSdkListRequest1,
  serverSdkListRequest1Request,
} from './models/server-sdk-list-request-1';
import {
  ServerSdkCreateRequest2,
  serverSdkCreateRequest2Request,
} from './models/server-sdk-create-request-2';
import { TradeMarketRequest, tradeMarketRequestRequest } from './models/trade-market-request';
import { WelcomeWizardRequest, welcomeWizardRequestRequest } from './models/welcome-wizard-request';
import {
  ServerSdkUpdateProfileRequest2,
  serverSdkUpdateProfileRequest2Request,
} from './models/server-sdk-update-profile-request-2';
import {
  ServerSdkUpdateAvatarRequest2,
  serverSdkUpdateAvatarRequest2Request,
} from './models/server-sdk-update-avatar-request-2';
import { DeleteAvatarRequest, deleteAvatarRequestRequest } from './models/delete-avatar-request';
import {
  ServerSdkListRequest2,
  serverSdkListRequest2Request,
} from './models/server-sdk-list-request-2';
import {
  ServerSdkPayRequest1,
  serverSdkPayRequest1Request,
} from './models/server-sdk-pay-request-1';
import {
  ServerSdkListRequest3,
  serverSdkListRequest3Request,
} from './models/server-sdk-list-request-3';
import {
  ServerSdkCreateRequest3,
  serverSdkCreateRequest3Request,
} from './models/server-sdk-create-request-3';
import { EditRequest, editRequestRequest } from './models/edit-request';
import {
  ServerSdkDeleteRequest1,
  serverSdkDeleteRequest1Request,
} from './models/server-sdk-delete-request-1';
import {
  ServerSdkInfoRequest2,
  serverSdkInfoRequest2Request,
} from './models/server-sdk-info-request-2';
import {
  ServerSdkListsRequest2,
  serverSdkListsRequest2Request,
} from './models/server-sdk-lists-request-2';
import {
  ServerSdkListRequest4,
  serverSdkListRequest4Request,
} from './models/server-sdk-list-request-4';
import {
  ServerSdkCreateRequest4,
  serverSdkCreateRequest4Request,
} from './models/server-sdk-create-request-4';
import {
  ServerSdkUpdateRequest2,
  serverSdkUpdateRequest2Request,
} from './models/server-sdk-update-request-2';
import {
  ServerSdkDeleteRequest2,
  serverSdkDeleteRequest2Request,
} from './models/server-sdk-delete-request-2';
import { CreateBulkRequest, createBulkRequestRequest } from './models/create-bulk-request';
import {
  ServerSdkListsRequest3,
  serverSdkListsRequest3Request,
} from './models/server-sdk-lists-request-3';
import {
  ServerSdkUpdateRequest3,
  serverSdkUpdateRequest3Request,
} from './models/server-sdk-update-request-3';
import {
  ServerSdkListRequest5,
  serverSdkListRequest5Request,
} from './models/server-sdk-list-request-5';
import {
  ServerSdkCreateRequest5,
  serverSdkCreateRequest5Request,
} from './models/server-sdk-create-request-5';
import {
  ServerSdkCreateRequest6,
  serverSdkCreateRequest6Request,
} from './models/server-sdk-create-request-6';
import {
  ServerSdkListRequest6,
  serverSdkListRequest6Request,
} from './models/server-sdk-list-request-6';
import {
  ServerSdkInfoRequest3,
  serverSdkInfoRequest3Request,
} from './models/server-sdk-info-request-3';
import { AddBalanceRequest, addBalanceRequestRequest } from './models/add-balance-request';
import {
  ServerSdkListsRequest4,
  serverSdkListsRequest4Request,
} from './models/server-sdk-lists-request-4';
import {
  ServerSdkCreateRequest7,
  serverSdkCreateRequest7Request,
} from './models/server-sdk-create-request-7';
import {
  ServerSdkRemoveRequest5,
  serverSdkRemoveRequest5Request,
} from './models/server-sdk-remove-request-5';
import {
  ServerSdkListRequest7,
  serverSdkListRequest7Request,
} from './models/server-sdk-list-request-7';
import {
  ServerSdkCreateRequest8,
  serverSdkCreateRequest8Request,
} from './models/server-sdk-create-request-8';
import {
  ServerSdkListRequest8,
  serverSdkListRequest8Request,
} from './models/server-sdk-list-request-8';
import {
  ServerSdkUpdateRequest4,
  serverSdkUpdateRequest4Request,
} from './models/server-sdk-update-request-4';
import { SearchRequest, searchRequestRequest } from './models/search-request';
import {
  ServerSdkInfoRequest4,
  serverSdkInfoRequest4Request,
} from './models/server-sdk-info-request-4';
import { ServicesRequest, servicesRequestRequest } from './models/services-request';
import {
  ServerSdkCreateRequest9,
  serverSdkCreateRequest9Request,
} from './models/server-sdk-create-request-9';
import { BoostListRequest, boostListRequestRequest } from './models/boost-list-request';
import { TimesRequest, timesRequestRequest } from './models/times-request';
import {
  ServerSdkCreateRequest10,
  serverSdkCreateRequest10Request,
} from './models/server-sdk-create-request-10';
import {
  ServerSdkInfoRequest5,
  serverSdkInfoRequest5Request,
} from './models/server-sdk-info-request-5';
import { AddCouponRequest, addCouponRequestRequest } from './models/add-coupon-request';
import { RemoveCouponRequest, removeCouponRequestRequest } from './models/remove-coupon-request';
import {
  ServerSdkPayRequest2,
  serverSdkPayRequest2Request,
} from './models/server-sdk-pay-request-2';
import { MessageListRequest, messageListRequestRequest } from './models/message-list-request';
import {
  ServerSdkSendMessageRequest1,
  serverSdkSendMessageRequest1Request,
} from './models/server-sdk-send-message-request-1';
import { OfferRequest, offerRequestRequest } from './models/offer-request';
import { AnswerRequest, answerRequestRequest } from './models/answer-request';
import { JoinRequest, joinRequestRequest } from './models/join-request';
import {
  ServerSdkInfoRequest6,
  serverSdkInfoRequest6Request,
} from './models/server-sdk-info-request-6';
import {
  ServerSdkCreateRequest11,
  serverSdkCreateRequest11Request,
} from './models/server-sdk-create-request-11';
import {
  ServerSdkSendMessageRequest2,
  serverSdkSendMessageRequest2Request,
} from './models/server-sdk-send-message-request-2';
import { FaqListRequest, faqListRequestRequest } from './models/faq-list-request';

/**
 * Service class for ServerSdkService operations.
 * Provides methods to interact with ServerSdkService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ServerSdkService extends BaseService {
  protected sendOtpConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected verifyOtpConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected countriesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected statesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected citiesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected systemOnlineConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected getCategoriesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected countListConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected searchHeaderConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected listSeoConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected listConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected oneConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected getStatesBySlugConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected getCitiesBySlugConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected getSeoPagesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected categoryBySlugConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected addConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected removeConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected updateAvatarConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected updateProfileConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected deleteAvatarConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list2Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected remove1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list3Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected remove2Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list4Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list5Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected add1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list6Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected remove3Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected removeAllConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list7Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected updateConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected createConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected listsConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected infoConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list8Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected create1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list9Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected listMyOfferConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected listHistoryConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected tradeMarketConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected getPermisionListConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected info1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected welcomeWizardConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected updateProfile1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected updateAvatar1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected deleteAvatar1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list10Config: Partial<SdkConfig> = { environment: Environment.DOMIN_LOCAL };

  protected payConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_LOCAL };

  protected list11Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected create2Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected editConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected delete_Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected info2Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected lists1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list12Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected create3Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected update1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected delete1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected createBulkConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected lists2Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected update2Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list13Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected create4Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected create5Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list14Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected info3Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected addBalanceConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected lists3Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected create6Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected remove4Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list15Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected create7Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list16Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list17Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list18Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected update3Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected searchConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected info4Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected servicesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected create8Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected boostListConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected timesConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected create9Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected info5Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected addCouponConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected removeCouponConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected pay1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list19Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected messageListConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected sendMessageConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected offerConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected answerConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected iceConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected memberOfRoomConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected joinConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected endConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list20Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list21Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected info6Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected list22Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected info7Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected lists4Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected create10Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected getTicketMessageConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected sendMessage1Config: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected faqListConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected checkUpConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  /**
   * Sets method-level configuration for sendOtp.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSendOtpConfig(config: Partial<SdkConfig>): this {
    this.sendOtpConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for verifyOtp.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setVerifyOtpConfig(config: Partial<SdkConfig>): this {
    this.verifyOtpConfig = config;
    return this;
  }

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
   * Sets method-level configuration for systemOnline.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSystemOnlineConfig(config: Partial<SdkConfig>): this {
    this.systemOnlineConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCategories.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCategoriesConfig(config: Partial<SdkConfig>): this {
    this.getCategoriesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for countList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCountListConfig(config: Partial<SdkConfig>): this {
    this.countListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for searchHeader.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSearchHeaderConfig(config: Partial<SdkConfig>): this {
    this.searchHeaderConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for listSeo.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListSeoConfig(config: Partial<SdkConfig>): this {
    this.listSeoConfig = config;
    return this;
  }

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
   * Sets method-level configuration for one.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOneConfig(config: Partial<SdkConfig>): this {
    this.oneConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getStatesBySlug.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetStatesBySlugConfig(config: Partial<SdkConfig>): this {
    this.getStatesBySlugConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCitiesBySlug.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCitiesBySlugConfig(config: Partial<SdkConfig>): this {
    this.getCitiesBySlugConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSeoPages.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSeoPagesConfig(config: Partial<SdkConfig>): this {
    this.getSeoPagesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for categoryBySlug.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCategoryBySlugConfig(config: Partial<SdkConfig>): this {
    this.categoryBySlugConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for list1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList1Config(config: Partial<SdkConfig>): this {
    this.list1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for add.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddConfig(config: Partial<SdkConfig>): this {
    this.addConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for remove.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveConfig(config: Partial<SdkConfig>): this {
    this.removeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateAvatar.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateAvatarConfig(config: Partial<SdkConfig>): this {
    this.updateAvatarConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateProfile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateProfileConfig(config: Partial<SdkConfig>): this {
    this.updateProfileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteAvatar.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteAvatarConfig(config: Partial<SdkConfig>): this {
    this.deleteAvatarConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for list2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList2Config(config: Partial<SdkConfig>): this {
    this.list2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for remove1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemove1Config(config: Partial<SdkConfig>): this {
    this.remove1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList3Config(config: Partial<SdkConfig>): this {
    this.list3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for remove2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemove2Config(config: Partial<SdkConfig>): this {
    this.remove2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list4.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList4Config(config: Partial<SdkConfig>): this {
    this.list4Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list5.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList5Config(config: Partial<SdkConfig>): this {
    this.list5Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for add1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAdd1Config(config: Partial<SdkConfig>): this {
    this.add1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list6.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList6Config(config: Partial<SdkConfig>): this {
    this.list6Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for remove3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemove3Config(config: Partial<SdkConfig>): this {
    this.remove3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeAll.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveAllConfig(config: Partial<SdkConfig>): this {
    this.removeAllConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for list7.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList7Config(config: Partial<SdkConfig>): this {
    this.list7Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateConfig(config: Partial<SdkConfig>): this {
    this.updateConfig = config;
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
   * Sets method-level configuration for lists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListsConfig(config: Partial<SdkConfig>): this {
    this.listsConfig = config;
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
   * Sets method-level configuration for list8.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList8Config(config: Partial<SdkConfig>): this {
    this.list8Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for create1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate1Config(config: Partial<SdkConfig>): this {
    this.create1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list9.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList9Config(config: Partial<SdkConfig>): this {
    this.list9Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for listMyOffer.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListMyOfferConfig(config: Partial<SdkConfig>): this {
    this.listMyOfferConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for listHistory.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListHistoryConfig(config: Partial<SdkConfig>): this {
    this.listHistoryConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for tradeMarket.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTradeMarketConfig(config: Partial<SdkConfig>): this {
    this.tradeMarketConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getPermisionList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetPermisionListConfig(config: Partial<SdkConfig>): this {
    this.getPermisionListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for info1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInfo1Config(config: Partial<SdkConfig>): this {
    this.info1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for welcomeWizard.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setWelcomeWizardConfig(config: Partial<SdkConfig>): this {
    this.welcomeWizardConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateProfile1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateProfile1Config(config: Partial<SdkConfig>): this {
    this.updateProfile1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateAvatar1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateAvatar1Config(config: Partial<SdkConfig>): this {
    this.updateAvatar1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteAvatar1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteAvatar1Config(config: Partial<SdkConfig>): this {
    this.deleteAvatar1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list10.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList10Config(config: Partial<SdkConfig>): this {
    this.list10Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for pay.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPayConfig(config: Partial<SdkConfig>): this {
    this.payConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for list11.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList11Config(config: Partial<SdkConfig>): this {
    this.list11Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for create2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate2Config(config: Partial<SdkConfig>): this {
    this.create2Config = config;
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
   * Sets method-level configuration for info2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInfo2Config(config: Partial<SdkConfig>): this {
    this.info2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for lists1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLists1Config(config: Partial<SdkConfig>): this {
    this.lists1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list12.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList12Config(config: Partial<SdkConfig>): this {
    this.list12Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for create3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate3Config(config: Partial<SdkConfig>): this {
    this.create3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate1Config(config: Partial<SdkConfig>): this {
    this.update1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for delete1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDelete1Config(config: Partial<SdkConfig>): this {
    this.delete1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for createBulk.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateBulkConfig(config: Partial<SdkConfig>): this {
    this.createBulkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for lists2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLists2Config(config: Partial<SdkConfig>): this {
    this.lists2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update2.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate2Config(config: Partial<SdkConfig>): this {
    this.update2Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list13.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList13Config(config: Partial<SdkConfig>): this {
    this.list13Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for create4.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate4Config(config: Partial<SdkConfig>): this {
    this.create4Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for create5.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate5Config(config: Partial<SdkConfig>): this {
    this.create5Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list14.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList14Config(config: Partial<SdkConfig>): this {
    this.list14Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for info3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInfo3Config(config: Partial<SdkConfig>): this {
    this.info3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for addBalance.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddBalanceConfig(config: Partial<SdkConfig>): this {
    this.addBalanceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for lists3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLists3Config(config: Partial<SdkConfig>): this {
    this.lists3Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for create6.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate6Config(config: Partial<SdkConfig>): this {
    this.create6Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for remove4.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemove4Config(config: Partial<SdkConfig>): this {
    this.remove4Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list15.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList15Config(config: Partial<SdkConfig>): this {
    this.list15Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for create7.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate7Config(config: Partial<SdkConfig>): this {
    this.create7Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list16.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList16Config(config: Partial<SdkConfig>): this {
    this.list16Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list17.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList17Config(config: Partial<SdkConfig>): this {
    this.list17Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list18.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList18Config(config: Partial<SdkConfig>): this {
    this.list18Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for update3.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdate3Config(config: Partial<SdkConfig>): this {
    this.update3Config = config;
    return this;
  }

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
   * Sets method-level configuration for info4.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInfo4Config(config: Partial<SdkConfig>): this {
    this.info4Config = config;
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
   * Sets method-level configuration for create8.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate8Config(config: Partial<SdkConfig>): this {
    this.create8Config = config;
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
   * Sets method-level configuration for create9.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate9Config(config: Partial<SdkConfig>): this {
    this.create9Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for info5.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInfo5Config(config: Partial<SdkConfig>): this {
    this.info5Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for addCoupon.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddCouponConfig(config: Partial<SdkConfig>): this {
    this.addCouponConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeCoupon.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveCouponConfig(config: Partial<SdkConfig>): this {
    this.removeCouponConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for pay1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPay1Config(config: Partial<SdkConfig>): this {
    this.pay1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list19.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList19Config(config: Partial<SdkConfig>): this {
    this.list19Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for messageList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setMessageListConfig(config: Partial<SdkConfig>): this {
    this.messageListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for sendMessage.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSendMessageConfig(config: Partial<SdkConfig>): this {
    this.sendMessageConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for offer.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setOfferConfig(config: Partial<SdkConfig>): this {
    this.offerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for answer.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAnswerConfig(config: Partial<SdkConfig>): this {
    this.answerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for ice.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setIceConfig(config: Partial<SdkConfig>): this {
    this.iceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for memberOfRoom.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setMemberOfRoomConfig(config: Partial<SdkConfig>): this {
    this.memberOfRoomConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for join.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setJoinConfig(config: Partial<SdkConfig>): this {
    this.joinConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for end.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setEndConfig(config: Partial<SdkConfig>): this {
    this.endConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for list20.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList20Config(config: Partial<SdkConfig>): this {
    this.list20Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list21.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList21Config(config: Partial<SdkConfig>): this {
    this.list21Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for info6.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInfo6Config(config: Partial<SdkConfig>): this {
    this.info6Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for list22.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setList22Config(config: Partial<SdkConfig>): this {
    this.list22Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for info7.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setInfo7Config(config: Partial<SdkConfig>): this {
    this.info7Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for lists4.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLists4Config(config: Partial<SdkConfig>): this {
    this.lists4Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for create10.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreate10Config(config: Partial<SdkConfig>): this {
    this.create10Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTicketMessage.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTicketMessageConfig(config: Partial<SdkConfig>): this {
    this.getTicketMessageConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for sendMessage1.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSendMessage1Config(config: Partial<SdkConfig>): this {
    this.sendMessage1Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for faqList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setFaqListConfig(config: Partial<SdkConfig>): this {
    this.faqListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for checkUp.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCheckUpConfig(config: Partial<SdkConfig>): this {
    this.checkUpConfig = config;
    return this;
  }

  /**
   * test
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async sendOtp(body: SendOtpRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.sendOtpConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/auth/sendOTP')
      .setRequestSchema(sendOtpRequestRequest)
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
 * # Verify OTP
This endpoint verifies a one-time password (OTP) that was sent to a user's phone number during the authentication process.

## Endpoint Details

**Method:** POST  
**URL:** `{{domin_server}}/api/auth/verifyOTP`

## Request Parameters

The request uses **multipart/form-data** body with the following required parameters:

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `phone_number` | string | Yes | The phone number that received the OTP code | 09109693365 |
| `code` | string | Yes | The 6-digit OTP code to verify | 659443 |

## Use Case & Workflow

This endpoint is part of the phone-based authentication flow:

1. User initiates authentication by providing their phone number
2. System sends a 6-digit OTP code via SMS to the provided phone number
3. User receives the OTP code on their phone
4. User submits both their phone number and the received OTP code to this endpoint
5. System verifies the code matches what was sent
6. Upon successful verification, user is authenticated

## Authentication Flow Notes

- The OTP code is typically valid for a limited time (e.g., 5-10 minutes)
- Each OTP code can usually only be used once
- Failed verification attempts may be rate-limited to prevent brute force attacks
- After successful verification, the response typically includes an authentication token or session identifier
- This is the second step in a two-factor authentication process using phone numbers
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async verifyOtp(body: VerifyOtpRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.verifyOtpConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/auth/verifyOTP')
      .setRequestSchema(verifyOtpRequestRequest)
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

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async systemOnline(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.systemOnlineConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/up')
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
  async getCategories(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getCategoriesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/categories')
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
  async countList(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.countListConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/count')
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
  async searchHeader(body: SearchHeaderRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.searchHeaderConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/get-search')
      .setRequestSchema(searchHeaderRequestRequest)
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
  async listSeo(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listSeoConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/get-seo-tags')
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
  async list(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/get-config-list')
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
  async one(body: OneRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.oneConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/get-config')
      .setRequestSchema(oneRequestRequest)
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
  async getStatesBySlug(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getStatesBySlugConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/get-state/alborz')
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
  async getCitiesBySlug(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getCitiesBySlugConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/get-City/1')
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
  async getSeoPages(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getSeoPagesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/get-seo-page/family-in-karaj')
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
 * # Get Family Lawyers in Karaj
## Overview

This endpoint retrieves a comprehensive list of family law attorneys (وکیل خانواده) practicing in Karaj city, Alborz province, Iran. It provides detailed information about the lawyers, city metadata, category information, and SEO-optimized page content.

## Purpose

- Fetch all registered family lawyers in Karaj
    
- Retrieve city and category metadata for the search
    
- Get SEO page content and metadata for the lawyer listing page
    
- Access FAQ information related to family lawyers in this location
    

## Request Details

- **Method:** `POST`
    
- **Endpoint:** `/api/tools/lawyers/vakil-khanevade/karaj`
    
- **Base URL Variable:** `{{domin_server}}`
    
- **Body:** None required
    

## Response Structure

### Success Response (200 OK)

``` json
{
  "status": 200,
  "data": {
    "message": "Category With city found",
    "info": {
      "count_faq": 0,
      "count_lawyers": 9,
      "city_id": 4,
      "city_slug": "karaj",
      "city_name": "کرج",
      "state_id": 5,
      "state_name": "البرز",
      "country_id": 28,
      "country_name": "ایران",
      "category_id": 33,
      "category_slug": "vakil-khanevade",
      "category_name": "وکیل خانواده"
    },
    "page": {
      "id": 1,
      "slug": "karajfamily",
      "title": "بهترین وکیل در کرج",
      "h1": "بهترین وکیل در کرج",
      "meta_title": "بهترین وکیل در کرج",
      "meta_description": "بهترین وکیل در استان البرز شهر کرج",
      "body": "<p class=&#x27;preserveHtml&#x27; class=&#x27;preserveHtml&#x27; class=&#x27;preserveHtml&#x27; class=&#x27;preserveHtml&#x27;>Page content...</p>",
      "filters": {
        "country_id": 28,
        "state_id": 5,
        "city_id": 4,
        "category_slug": "33"
      },
      "status": "active",
      "created_at": "2025-12-24T11:28:04.000000Z",
      "updated_at": "2025-12-24T12:04:58.000000Z"
    },
    "faq": {
      {
      "qustion": "The Question1",
      "answer": "The Answer1"
      },
      {
      "qustion": "The Question2",
      "answer": "The Answer2"
      }
     }
  }
}

 ```

## Response Fields Explained

### `data.info` Object

Contains aggregated information about the search results:

- **count_faq:** Number of frequently asked questions available (0 in this case)
    
- **count_lawyers:** Total number of family lawyers found in Karaj (9)
    
- **city_id, city_slug, city_name:** City identifiers and name (Karaj - کرج)
    
- **state_id, state_name:** Province identifiers and name (Alborz - البرز)
    
- **country_id, country_name:** Country identifiers and name (Iran - ایران)
    
- **category_id, category_slug, category_name:** Legal category identifiers (Family Lawyer - وکیل خانواده)
    

### `data.page` Object

SEO-optimized page metadata for the lawyer listing:

- **id:** Unique page identifier
    
- **slug:** URL-friendly page identifier (karajfamily)
    
- **title:** Page title for display
    
- **h1:** Main heading for the page
    
- **meta_title:** SEO meta title tag content
    
- **meta_description:** SEO meta description tag content
    
- **body:** HTML content for the page body
    
- **filters:** Applied search filters (country, state, city, category)
    
- **status:** Page publication status (active/inactive)
    
- **created_at, updated_at:** Timestamp information
    

### `data.faq` Array

List of frequently asked questions related to family lawyers in Karaj (currently empty)

## Usage Notes

- This endpoint uses the `vakil-khanevade` (family lawyer) category slug
    
- The city name `karaj` is hardcoded in the URL path
    
- No request body or authentication is required
    
- The response includes Persian (Farsi) text for city, state, and category names
    
- Page content includes HTML formatting for rich text display
    
- The `count_lawyers` field indicates 9 family lawyers are available in this location
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async categoryBySlug(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.categoryBySlugConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tools/lawyers/vakil-khanevade/karaj')
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
  async list1(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/favorites/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async add(body: ServerSdkAddRequest1, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.addConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/favorites/add')
      .setRequestSchema(serverSdkAddRequest1Request)
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
  async remove(body: ServerSdkRemoveRequest1, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.removeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/favorites/remove')
      .setRequestSchema(serverSdkRemoveRequest1Request)
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
  async updateAvatar(
    body: ServerSdkUpdateAvatarRequest1,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateAvatarConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/update/avatar')
      .setRequestSchema(serverSdkUpdateAvatarRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addBody(body)
      .setFilename(filename)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async updateProfile(
    body: ServerSdkUpdateProfileRequest1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateProfileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/update/profile')
      .setRequestSchema(serverSdkUpdateProfileRequest1Request)
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
 * # Delete User Avatar
## Overview
This endpoint removes the currently authenticated user's avatar image from their profile. Once deleted, the user's profile will revert to the default avatar or no avatar state.

## Authentication
This endpoint requires user authentication. The request uses the `{{local_user}}` variable which should contain a valid authentication token or session identifier.

**Authentication Method:** Bearer Token or Session-based (configured via `local_user` variable)

## Request Details

**HTTP Method:** `POST`

**Endpoint:** `{{domin_local}}/api/user/dashboard/update/delete-avatar`

**Request Body:** None required - this is a simple POST request with no payload needed.

**Headers:** Standard authentication headers are applied automatically through the collection or environment configuration.

## Response

### Success Response (200 OK)

When the avatar is successfully deleted, the API returns:

```json
{
  "status": 200,
  "data": {
    "message": "Avatar deleted successfully"
  },
  "time": "2026-02-12T09:19:35.746751Z"
}
```

**Response Fields:**
- `status` (integer): HTTP status code (200 for success)
- `data` (object): Contains the response data
  - `message` (string): Confirmation message indicating successful deletion
- `time` (string): ISO 8601 timestamp of when the request was processed

## Usage Notes

- This operation is **irreversible** - once deleted, the avatar cannot be recovered and must be re-uploaded if needed
- The user must be authenticated to delete their own avatar
- No request body or parameters are required
- The endpoint only affects the authenticated user's avatar (users cannot delete other users' avatars)
- After successful deletion, the user's profile will display the default avatar

## Variables Used

- `{{domin_local}}`: Base URL for the local development environment
- `{{local_user}}`: Authentication credentials for the current user session
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async deleteAvatar(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.deleteAvatarConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/update/delete-avatar')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async list2(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/carts/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async remove1(body: ServerSdkRemoveRequest2, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.remove1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/carts/remove')
      .setRequestSchema(serverSdkRemoveRequest2Request)
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
  async list3(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/comments/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async remove2(body: ServerSdkRemoveRequest3, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.remove2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/comments/remove')
      .setRequestSchema(serverSdkRemoveRequest3Request)
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
 * Example Results:
```json
{
    "status": 200,
    "data": {
        "message": "List Find Successfully",
        "list": [
            {
                "id": 1,
                "amount": 313000,
                "user_id": 1,
                "payment_method": "bitpay",
                "payment_status": "pending",
                "verify_status": "0",
                "type": "order",
                "type_id": null,
                "country_id": 28,
                "transaction_id": null,
                "card": null,
                "hashed_card": null,
                "pay_date": null,
                "created_at": "2025-10-12T12:53:44.000000Z",
                "updated_at": "2025-10-12T12:53:44.000000Z"
            },
            {
                "id": 2,
                "amount": 313000,
                "user_id": 1,
                "payment_method": "bitpay",
                "payment_status": "pending",
                "verify_status": "0",
                "type": "order",
                "type_id": null,
                "country_id": 28,
                "transaction_id": null,
                "card": null,
                "hashed_card": null,
                "pay_date": null,
                "created_at": "2025-10-12T12:55:29.000000Z",
                "updated_at": "2025-10-12T12:55:29.000000Z"
            },
            {
                "id": 3,
                "amount": 313000,
                "user_id": 1,
                "payment_method": "bitpay",
                "payment_status": "pending",
                "verify_status": "0",
                "type": "order",
                "type_id": null,
                "country_id": 28,
                "transaction_id": null,
                "card": null,
                "hashed_card": null,
                "pay_date": null,
                "created_at": "2025-10-12T12:56:29.000000Z",
                "updated_at": "2025-10-12T12:56:29.000000Z"
            }
        ]
    }
}
```
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async list4(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list4Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/payments/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async list5(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list5Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/wallet/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async add1(body: ServerSdkAddRequest2, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.add1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/wallet/add')
      .setRequestSchema(serverSdkAddRequest2Request)
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
  async list6(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list6Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/settings/session/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async remove3(body: ServerSdkRemoveRequest4, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.remove3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/settings/session/remove')
      .setRequestSchema(serverSdkRemoveRequest4Request)
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
  async removeAll(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.removeAllConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/settings/session/remove-all')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async list7(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list7Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/settings/notifications/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async update(body: ServerSdkUpdateRequest1, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/settings/notifications/update')
      .setRequestSchema(serverSdkUpdateRequest1Request)
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
  async create(body: ServerSdkCreateRequest1, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/orders/comments/craete')
      .setRequestSchema(serverSdkCreateRequest1Request)
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
 * # Order List Endpoint
## Overview

This endpoint retrieves a paginated list of user orders.

## Request Details

- **Method:** POST
    
- **Endpoint:** `/api/user/dashboard/orders/list`
    

### Request Parameters

- `page` (integer, required): The page number for pagination
    - Default: 1
        
    - Used to retrieve specific page of orders
        

## Response Structure

Successful response returns a JSON object with:

- `status`: HTTP status code (200 for success)
    
- `data`:
    - `message`: Confirmation message
        
    - `orders`: Pagination object containing:
        - `current_page`: Current page number
            
        - `data`: Array of order objects
            - Each order includes details like:
                - `id`
                    
                - `lawyer_id`
                    
                - `user_id`
                    
                - `service_id`
                    
                - `date`
                    
                - `time`
                    
                - `status`
                    
                - Associated `user`, `service`, and `lawyer` information
                    

## Example Use Case

Retrieve the first page of a user's order history in the dashboard.

## Notes

- Requires authentication
    
- Returns up to 10 orders per page
    
- Use the `page` parameter to navigate through order pages
    

Example Response:

``` json
{
    "status": 200,
    "data": {
        "message": "Data found",
        "orders": {
            "current_page": 1,
            "data": [
                {
                    "id": 1,
                    "lawyer_id": 1,
                    "user_id": 1,
                    "profile_id": 1,
                    "service_id": 1,
                    "coupon_id": null,
                    "date_id": 10,
                    "date": "2025-09-30",
                    "time": "13:48:00",
                    "coupon_amount": "0",
                    "status": "finished",
                    "tax": "0",
                    "fee": "0",
                    "amount": "0",
                    "duration": "",
                    "google_meet_status": "active",
                    "google_meet_link": null,
                    "created_at": "2025-09-28T10:18:57.000000Z",
                    "updated_at": "2025-09-28T10:18:57.000000Z",
                    "total_amount": 0,
                    "user": {
                        "id": 1,
                        "first_name": "محمد یوسف",
                        "last_name": "مقدم",
                        "phone_number": "09106059954",
                        "gender": "male",
                        "email": "yousef.wersy@gmail.com",
                        "avatar": null
                    },
                    "atime": null,
                    "service": {
                        "id": 1,
                        "name": "مکالمه 60 دقیقه ایی ویژه",
                        "status": "active",
                        "duration": "60",
                        "amount": 100000,
                        "slug": "5485132154gdhsgdh",
                        "type_id": 1,
                        "type": {
                            "id": 1,
                            "name": "تماس صوتی",
                            "status": "active"
                        }
                    },
                    "lawyer": {
                        "id": 1,
                        "first_name": "احمد",
                        "last_name": "ابراهیمی",
                        "gender": "male",
                        "phone_number": "09121212365",
                        "code": "19632",
                        "biography": "وکیل پایه یک دادگستری در زمینه املاک و مستغلات",
                        "status": "active",
                        "email": "ahmad@gmail.com",
                        "start_working_date": "2016-08-03 10:29:18",
                        "avatar": null,
                        "city": null,
                        "state": null,
                        "country": null
                    }
                },
                {
                    "id": 6,
                    "lawyer_id": 22,
                    "user_id": 1,
                    "profile_id": 1,
                    "service_id": 47,
                    "coupon_id": null,
                    "date_id": 321,
                    "date": "2025-10-26",
                    "time": "10:00:00",
                    "coupon_amount": "0",
                    "status": "pending",
                    "tax": "1",
                    "fee": "0.5",
                    "amount": "10",
                    "duration": "60",
                    "google_meet_status": "active",
                    "google_meet_link": null,
                    "created_at": "2025-10-25T10:47:15.000000Z",
                    "updated_at": "2025-10-25T10:47:15.000000Z",
                    "total_amount": 11.5,
                    "user": {
                        "id": 1,
                        "first_name": "محمد یوسف",
                        "last_name": "مقدم",
                        "phone_number": "09106059954",
                        "gender": "male",
                        "email": "yousef.wersy@gmail.com",
                        "avatar": null
                    },
                    "atime": {
                        "id": 321,
                        "time": "10:00:00",
                        "date": "2025-10-26",
                        "status": "active"
                    },
                    "service": {
                        "id": 47,
                        "name": "مشاوره متنی",
                        "status": "active",
                        "duration": "60",
                        "amount": 10,
                        "slug": "chat-message-22",
                        "type_id": 4,
                        "type": {
                            "id": 4,
                            "name": "چت و گفت گو",
                            "status": "active"
                        }
                    },
                    "lawyer": null
                },
                {
                    "id": 7,
                    "lawyer_id": 22,
                    "user_id": 1,
                    "profile_id": 1,
                    "service_id": 47,
                    "coupon_id": null,
                    "date_id": 321,
                    "date": "2025-10-26",
                    "time": "10:00:00",
                    "coupon_amount": "0",
                    "status": "pending",
                    "tax": "1",
                    "fee": "0.5",
                    "amount": "10",
                    "duration": "60",
                    "google_meet_status": "active",
                    "google_meet_link": null,
                    "created_at": "2025-10-25T10:47:29.000000Z",
                    "updated_at": "2025-10-25T10:47:29.000000Z",
                    "total_amount": 11.5,
                    "user": {
                        "id": 1,
                        "first_name": "محمد یوسف",
                        "last_name": "مقدم",
                        "phone_number": "09106059954",
                        "gender": "male",
                        "email": "yousef.wersy@gmail.com",
                        "avatar": null
                    },
                    "atime": {
                        "id": 321,
                        "time": "10:00:00",
                        "date": "2025-10-26",
                        "status": "active"
                    },
                    "service": {
                        "id": 47,
                        "name": "مشاوره متنی",
                        "status": "active",
                        "duration": "60",
                        "amount": 10,
                        "slug": "chat-message-22",
                        "type_id": 4,
                        "type": {
                            "id": 4,
                            "name": "چت و گفت گو",
                            "status": "active"
                        }
                    },
                    "lawyer": null
                },
                {
                    "id": 20,
                    "lawyer_id": 42,
                    "user_id": 1,
                    "profile_id": 1,
                    "service_id": 112,
                    "coupon_id": null,
                    "date_id": 469,
                    "date": "2025-11-10",
                    "time": "09:00:00",
                    "coupon_amount": "0",
                    "status": "pending",
                    "tax": "1000",
                    "fee": "0",
                    "amount": "10000",
                    "duration": "60",
                    "google_meet_status": "active",
                    "google_meet_link": null,
                    "created_at": "2025-11-09T08:32:37.000000Z",
                    "updated_at": "2025-11-09T08:32:37.000000Z",
                    "total_amount": 11000,
                    "user": {
                        "id": 1,
                        "first_name": "محمد یوسف",
                        "last_name": "مقدم",
                        "phone_number": "09106059954",
                        "gender": "male",
                        "email": "yousef.wersy@gmail.com",
                        "avatar": null
                    },
                    "atime": {
                        "id": 469,
                        "time": "09:00:00",
                        "date": "2025-11-10",
                        "status": "inactive"
                    },
                    "service": {
                        "id": 112,
                        "name": "مشاوره متنی",
                        "status": "active",
                        "duration": "60",
                        "amount": 10000,
                        "slug": "chat-message-42",
                        "type_id": 4,
                        "type": {
                            "id": 4,
                            "name": "چت و گفت گو",
                            "status": "active"
                        }
                    },
                    "lawyer": {
                        "id": 42,
                        "first_name": "محمد یوسف",
                        "last_name": "مقدم",
                        "gender": "male",
                        "phone_number": "09109693365",
                        "code": "130130",
                        "biography": "لیسانس وکالت",
                        "status": "active",
                        "email": "yousef.wersy2@gmail.com",
                        "start_working_date": "2025-08-26 00:00:00",
                        "avatar": null,
                        "city": null,
                        "state": null,
                        "country": null
                    }
                }
            ],
            "first_page_url": "http://nobatvakil-core.liara.run/api/user/dashboard/orders/list?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://nobatvakil-core.liara.run/api/user/dashboard/orders/list?page=1",
            "links": [
                {
                    "url": null,
                    "label": "« Previous",
                    "page": null,
                    "active": false
                },
                {
                    "url": "http://nobatvakil-core.liara.run/api/user/dashboard/orders/list?page=1",
                    "label": "1",
                    "page": 1,
                    "active": true
                },
                {
                    "url": null,
                    "label": "Next »",
                    "page": null,
                    "active": false
                }
            ],
            "next_page_url": null,
            "path": "http://nobatvakil-core.liara.run/api/user/dashboard/orders/list",
            "per_page": 10,
            "prev_page_url": null,
            "to": 4,
            "total": 4
        }
    }
}

 ```
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async lists(body: ServerSdkListsRequest1, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/orders/list')
      .setRequestSchema(serverSdkListsRequest1Request)
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
  async info(body: ServerSdkInfoRequest1, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.infoConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/orders/show')
      .setRequestSchema(serverSdkInfoRequest1Request)
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
  async list8(body: ServerSdkListRequest1, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list8Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/signatrue/list')
      .setRequestSchema(serverSdkListRequest1Request)
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
  async create1(
    body: ServerSdkCreateRequest2,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/signatrue/create')
      .setRequestSchema(serverSdkCreateRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addBody(body)
      .setFilename(filename)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list9(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list9Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/achievement/lists')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async listMyOffer(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listMyOfferConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/offers/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async listHistory(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listHistoryConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/coins/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async tradeMarket(body: TradeMarketRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.tradeMarketConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/dashboard/coins/trade')
      .setRequestSchema(tradeMarketRequestRequest)
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
  async getPermisionList(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getPermisionListConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/get-permissions')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
 * # Get User Information
## Overview
This endpoint retrieves detailed information about a specific user from the server. It's designed to fetch user profile data, account details, and related information based on the authenticated session or provided credentials.

## Authentication
This endpoint likely requires authentication. Ensure that:
- Valid authentication tokens/credentials are included in the request headers
- The user has appropriate permissions to access user information
- Session cookies or bearer tokens are properly configured

## Request Details

**Method:** `POST`

**Endpoint:** `{{domin_server}}/api/user/info`

**Variables Used:**
- `domin_server` - The base URL of the API server (can be configured for different environments: production, staging, local)
- `user6059` - User identifier variable (may be used in headers, body, or authentication context)

**Request Body:** None (currently empty)

## Expected Response Format
The response typically includes:
```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "profile": {
    "firstName": "string",
    "lastName": "string",
    "avatar": "string"
  },
  "createdAt": "timestamp",
  "lastLogin": "timestamp",
  "status": "active|inactive"
}
```

## Example Use Cases

1. **User Profile Display**: Fetch user information to display on a profile page or dashboard
2. **Account Verification**: Retrieve user details to verify account status and permissions
3. **User Management**: Admin functionality to view and manage user accounts
4. **Session Validation**: Confirm user identity and retrieve associated data after login

## Notes

- The `domin_server` variable allows easy switching between different environments (local, staging, production)
- The `user6059` variable may need to be configured based on the specific user being queried
- Consider adding request body parameters if the API requires specific user identifiers or filters
- Response format may vary based on API version and user permissions
- Implement proper error handling for cases where user information is not found (404) or access is denied (403)
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async info1(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.info1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/info')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async welcomeWizard(
    body: WelcomeWizardRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.welcomeWizardConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/user/wizard')
      .setRequestSchema(welcomeWizardRequestRequest)
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
  async updateProfile1(
    body: ServerSdkUpdateProfileRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateProfile1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/update-profile')
      .setRequestSchema(serverSdkUpdateProfileRequest2Request)
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
  async updateAvatar1(
    body: ServerSdkUpdateAvatarRequest2,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.updateAvatar1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/update-avatar')
      .setRequestSchema(serverSdkUpdateAvatarRequest2Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addBody(body)
      .setFilename(filename)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deleteAvatar1(body: DeleteAvatarRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.deleteAvatar1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/delete-avatar')
      .setRequestSchema(deleteAvatarRequestRequest)
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
  async list10(body: ServerSdkListRequest2, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list10Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/boost/list')
      .setRequestSchema(serverSdkListRequest2Request)
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
  async pay(body: ServerSdkPayRequest1, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.payConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/boost/pay')
      .setRequestSchema(serverSdkPayRequest1Request)
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
  async list11(body: ServerSdkListRequest3, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list11Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/rooms/list')
      .setRequestSchema(serverSdkListRequest3Request)
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
  async create2(body: ServerSdkCreateRequest3, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/rooms/create')
      .setRequestSchema(serverSdkCreateRequest3Request)
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
  async delete_(body: ServerSdkDeleteRequest1, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/rooms/delete')
      .setRequestSchema(serverSdkDeleteRequest1Request)
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
  async info2(body: ServerSdkInfoRequest2, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.info2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/orders/show')
      .setRequestSchema(serverSdkInfoRequest2Request)
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
  async lists1(body: ServerSdkListsRequest2, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.lists1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/orders/list')
      .setRequestSchema(serverSdkListsRequest2Request)
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
  async list12(body: ServerSdkListRequest4, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list12Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/times/list')
      .setRequestSchema(serverSdkListRequest4Request)
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
 * ### Endpoint Description
This endpoint allows users to create a new time slot for a lawyer's service in the system. It is designed to facilitate the scheduling of appointments by providing necessary details such as the lawyer's ID, the service being offered, the date, and the time of the appointment.

### Request Parameters

The request must be sent as a form-data payload with the following parameters:

- **lawyer_id** (text): The unique identifier for the lawyer.
    
- **service_id** (text): The unique identifier for the service being scheduled.
    
- **date** (text): The date of the appointment, formatted according to the Asia/Tehran timezone (+3:30).
    
- **time** (text): The time of the appointment, also formatted according to the Asia/Tehran timezone (+3:30).
    

### Response Structure

Upon a successful request, the API will return a JSON object with the following structure:

``` javascript
{
  "status": 0,
  "data": {
    "message": "",
    "time_list": {
      "current_page": 0,
      "data": [
        {
          "id": 0,
          "lawyer_id": 0,
          "service_id": 0,
          "date": "",
          "time": "",
          "status": "",
          "created_at": "",
          "updated_at": "",
          "orders": [],
          "lawyer": {
            "id": 0,
            "user_id": 0,
            "first_name": "",
            "last_name": "",
            "gender": "",
            "biography": "",
            "phone_number": "",
            "email": "",
            "verified": "",
            "code": "",
            "issue_date": null,
            "license_level": null,
            "issuing_authority": null,
            "country_id": 0,
            "state_id": 0,
            "city_id": 0,
            "avatar_id": null,
            "start_working_date": null,
            "is_featured": 0,
            "featured_until": null,
            "wallet": "",
            "balance": "",
            "created_at": "",
            "updated_at": "",
            "avatar": null
          },
          "service": {
            "id": 0,
            "lawyer_id": 0,
            "name": "",
            "slug": "",
            "type_id": 0,
            "duration": "",
            "amount": 0,
            "country_id": 0,
            "created_at": "",
            "updated_at": ""
          }
        }
      ],
      "first_page_url": "",
      "from": 0,
      "last_page": 0,
      "last_page_url": "",
      "links": [
        {
          "url": null,
          "label": "",
          "page": null,
          "active": true
        }
      ],
      "next_page_url": null,
      "path": "",
      "per_page": 0,
      "prev_page_url": null,
      "to": 0,
      "total": 0
    }
  },
  "time": ""
}

 ```

The response includes a status code indicating the success of the operation and a data object containing a message and a list of time slots created, along with details about the lawyer and the service associated with the appointment.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async create3(body: ServerSdkCreateRequest4, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/times/create')
      .setRequestSchema(serverSdkCreateRequest4Request)
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
  async update1(body: ServerSdkUpdateRequest2, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/times/update')
      .setRequestSchema(serverSdkUpdateRequest2Request)
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
  async delete1(body: ServerSdkDeleteRequest2, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.delete1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/times/delete')
      .setRequestSchema(serverSdkDeleteRequest2Request)
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
 * # نحوه استفاده از API ثبت نوبت‌های دسته‌جمعی
## مثال 1: ساده‌ترین حالت

یکشنبه تا سه‌شنبه: 11 صبح تا 12 شب  
پنج‌شنبه: 8 صبح تا 12 ظهر

``` json
{
  "lawyer_id": 1,
  "start": "2024-02-01",
  "end": "2024-02-29",
  "service_id": [34, 35, 36, 37],
  "time_schedules": [
    {
      "days": [1, 2, 3],
      "start": "11:00",
      "end": "23:59"
    },
    {
      "days": [5],
      "start": "08:00",
      "end": "12:00"
    }
  ]
}

 ```

## مثال 2: با تکرار هفتگی

همین برنامه رو 4 هفته تکرار کن:

``` json
{
  "lawyer_id": 1,
  "start": "2024-02-01",
  "end": "2024-02-07",
  "service_id": [34, 35, 36, 37],
  "time_schedules": [
    {
      "days": [1, 2, 3],
      "start": "11:00",
      "end": "23:59"
    },
    {
      "days": [5],
      "start": "08:00",
      "end": "12:00"
    }
  ],
  "repeat_mode": "weekly",
  "repeat_number": 4
}

 ```

## مثال 3: برنامه پیچیده‌تر

دوشنبه و چهارشنبه: 9 صبح تا 5 بعدازظهر  
جمعه: 10 صبح تا 2 بعدازظهر  
شنبه: 8 صبح تا 12 ظهر

``` json
{
  "lawyer_id": 1,
  "start": "2024-03-01",
  "end": "2024-03-31",
  "service_id": [34, 35],
  "time_schedules": [
    {
      "days": [2],
      "start": "09:00",
      "end": "17:00"
    },
    {
      "days": [6],
      "start": "10:00",
      "end": "14:00"
    },
    {
      "days": [0],
      "start": "08:00",
      "end": "12:00"
    }
  ],
  "repeat_mode": "monthly",
  "repeat_number": 3
}

 ```

## راهنمای روزهای هفته (تقویم ایرانی - شروع از شنبه)

در این سیستم، هفته از شنبه شروع می‌شود:

- 0 = شنبه (Saturday) - اول هفته
    
- 1 = یکشنبه (Sunday)
    
- 2 = دوشنبه (Monday)
    
- 3 = سه‌شنبه (Tuesday)
    
- 4 = چهارشنبه (Wednesday)
    
- 5 = پنج‌شنبه (Thursday)
    
- 6 = جمعه (Friday) - آخر هفته
    

**توجه:** این متفاوت از Carbon است که در آن 0=یکشنبه است. سیستم به صورت خودکار تبدیل می‌کند.

## نحوه کار با Duration

اگر service با id=34 دارای duration=60 باشد:

- از ساعت 08:00 تا 12:00
    
- نوبت‌ها: 08:00, 09:00, 10:00, 11:00
    

اگر service با id=35 دارای duration=30 باشد:

- از ساعت 08:00 تا 12:00
    
- نوبت‌ها: 08:00, 08:30, 09:00, 09:30, 10:00, 10:30, 11:00, 11:30
    

## نکات مهم

1. **چک مالکیت**: سیستم چک می‌کند که وکیل متعلق به کاربر لاگین شده باشد
    
2. **چک سرویس‌ها**: تمام service_id ها باید متعلق به همان وکیل باشند
    
3. **Duplicate Prevention**: اگر نوبتی قبلاً ایجاد شده باشد، دوباره ایجاد نمی‌شود
    
4. **Validation**: تمام تاریخ‌ها و ساعت‌ها validate می‌شوند
    

## پاسخ موفق

``` json
{
  "status": "success",
  "message": "Available times generated successfully",
  "data": {
    "created_slots": 450,
    "skipped_slots": 12,
    "errors": []
  }
}

 ```

## پاسخ خطا

``` json
{
  "status": 422,
  "data": {
    "message": "Validation failed",
    "errors": {
      "service_id": ["Some services do not belong to this lawyer"]
    }
  },
  "time": "2024-02-04 10:30:00"
}

 ```

EndFragment
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async createBulk(body: CreateBulkRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createBulkConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/times/create-bulk')
      .setRequestSchema(createBulkRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async lists2(body: ServerSdkListsRequest3, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.lists2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/services/list')
      .setRequestSchema(serverSdkListsRequest3Request)
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
  async update2(body: ServerSdkUpdateRequest3, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update2Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/services/update')
      .setRequestSchema(serverSdkUpdateRequest3Request)
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
  async list13(body: ServerSdkListRequest5, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list13Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/wallet/cards/list')
      .setRequestSchema(serverSdkListRequest5Request)
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
  async create4(body: ServerSdkCreateRequest5, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create4Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/wallet/cards/create')
      .setRequestSchema(serverSdkCreateRequest5Request)
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
  async create5(body: ServerSdkCreateRequest6, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create5Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/wallet/withdrawal/create')
      .setRequestSchema(serverSdkCreateRequest6Request)
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
  async list14(body: ServerSdkListRequest6, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list14Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/wallet/withdrawal/list')
      .setRequestSchema(serverSdkListRequest6Request)
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
  async info3(body: ServerSdkInfoRequest3, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.info3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/wallet/info')
      .setRequestSchema(serverSdkInfoRequest3Request)
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
  async addBalance(body: AddBalanceRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.addBalanceConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/wallet/add_balance')
      .setRequestSchema(addBalanceRequestRequest)
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
  async lists3(body: ServerSdkListsRequest4, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.lists3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/category/list')
      .setRequestSchema(serverSdkListsRequest4Request)
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
  async create6(body: ServerSdkCreateRequest7, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create6Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/category/create')
      .setRequestSchema(serverSdkCreateRequest7Request)
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
  async remove4(body: ServerSdkRemoveRequest5, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.remove4Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/category/remove')
      .setRequestSchema(serverSdkRemoveRequest5Request)
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
  async list15(body: ServerSdkListRequest7, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list15Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/signatrue/list')
      .setRequestSchema(serverSdkListRequest7Request)
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
  async create7(
    body: ServerSdkCreateRequest8,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create7Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/signatrue/create')
      .setRequestSchema(serverSdkCreateRequest8Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addBody(body)
      .setFilename(filename)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async list16(body: ServerSdkListRequest8, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list16Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/achievement/lists')
      .setRequestSchema(serverSdkListRequest8Request)
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
  async list17(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list17Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/leaderboards')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async list18(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list18Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/settings/notifications/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async update3(body: ServerSdkUpdateRequest4, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.update3Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/dashboard/settings/notifications/update')
      .setRequestSchema(serverSdkUpdateRequest4Request)
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
  async info4(body: ServerSdkInfoRequest4, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.info4Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyers/info')
      .setRequestSchema(serverSdkInfoRequest4Request)
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
  async create8(body: ServerSdkCreateRequest9, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create8Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyer/create')
      .setRequestSchema(serverSdkCreateRequest9Request)
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
  async boostList(body: BoostListRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.boostListConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/lawyers/boost-list')
      .setRequestSchema(boostListRequestRequest)
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

  /**
 * ### Create Cart API Endpoint
This endpoint allows users to create a new cart entry by specifying a lawyer, a service, and a date for the service.

#### Request

- **Method:** POST
    
- **URL:** `{{domin_server}}/api/cart/create`
    
- **Request Body (form-data):**
    
    - `lawyer_id` (type: text): The unique identifier of the lawyer for whom the service is being requested.
        
    - `service_id` (type: text): The unique identifier of the service that the user wants to avail.
        
    - `date_id` (type: text): The unique identifier for the date when the service is requested.
        

#### Response

The API will return a JSON response indicating the result of the cart creation attempt. The response structure may vary based on the outcome of the request:

- { "status": 0, "data": { "message": "", "cart": { "id": 0, "user_id": 0, "lawyer_id": 0, "service_id": 0, "lawyer_available_time_id": 0, "coupon_id": null, "amount": "", "fee": "", "tax": "", "coupon_amount": "", "end_time": "", "created_at": "", "updated_at": "", "user": { ... }, "lawyer": { ... }, "available_time": { ... }, "coupon": null, "service": { ... } } }}
    
- { "status": 0, "data": { "message": "" }, "time": ""}
    

#### Notes

- Ensure that all required parameters are included in the request body to avoid validation errors.
    
- The `cart` object in the successful response contains detailed information about the created cart, including user and lawyer details, service information, and timestamps for creation and updates.
    
- The `status` field in the response indicates the success or failure of the operation, where `0` typically denotes success.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - OK
 */
  async create9(body: ServerSdkCreateRequest10, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create9Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/cart/create')
      .setRequestSchema(serverSdkCreateRequest10Request)
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
  async info5(body: ServerSdkInfoRequest5, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.info5Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/cart/info')
      .setRequestSchema(serverSdkInfoRequest5Request)
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
  async addCoupon(body: AddCouponRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.addCouponConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/cart/add_coupon')
      .setRequestSchema(addCouponRequestRequest)
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
  async removeCoupon(body: RemoveCouponRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.removeCouponConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/cart/remove_coupon')
      .setRequestSchema(removeCouponRequestRequest)
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
  async pay1(body: ServerSdkPayRequest2, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.pay1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/cart/pay')
      .setRequestSchema(serverSdkPayRequest2Request)
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
  async list19(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list19Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/chats/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async messageList(body: MessageListRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.messageListConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/chats/message')
      .setRequestSchema(messageListRequestRequest)
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
  async sendMessage(
    body: ServerSdkSendMessageRequest1,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.sendMessageConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/chats/send-message')
      .setRequestSchema(serverSdkSendMessageRequest1Request)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addBody(body)
      .setFilename(filename)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   *
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async offer(body: OfferRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.offerConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/calls/1/offer')
      .setRequestSchema(offerRequestRequest)
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
  async answer(body: AnswerRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.answerConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/calls/1/answer')
      .setRequestSchema(answerRequestRequest)
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
  async ice(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.iceConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/calls/1/ice')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async memberOfRoom(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.memberOfRoomConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api/calls/1/sdp')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async join(body: JoinRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.joinConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/calls/udgsdghewbd8745/join')
      .setRequestSchema(joinRequestRequest)
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
  async end(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.endConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/calls/udgsdghewbd8745/end')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async list20(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list20Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/calls/list')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async list21(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list21Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/blogs/list')
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
  async info6(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.info6Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/blogs/1')
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
  async list22(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.list22Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/maps/list')
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
  async info7(body: ServerSdkInfoRequest6, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.info7Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/maps/info')
      .setRequestSchema(serverSdkInfoRequest6Request)
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
  async lists4(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.lists4Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tickets')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async create10(body: ServerSdkCreateRequest11, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.create10Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tickets/create')
      .setRequestSchema(serverSdkCreateRequest11Request)
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
  async getTicketMessage(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getTicketMessageConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tickets/1')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
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
  async sendMessage1(
    body: ServerSdkSendMessageRequest2,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.sendMessage1Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/tickets/1/messages')
      .setRequestSchema(serverSdkSendMessageRequest2Request)
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
  async faqList(body: FaqListRequest, requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.faqListConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api/faqs')
      .setRequestSchema(faqListRequestRequest)
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
  async checkUp(requestConfig?: Partial<SdkConfig>): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.checkUpConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/up')
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
}
