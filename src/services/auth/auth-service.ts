import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { SendOtpRequest, sendOtpRequestRequest } from './models/send-otp-request';
import { VerifyOtpRequest, verifyOtpRequestRequest } from './models/verify-otp-request';

/**
 * Service class for AuthService operations.
 * Provides methods to interact with AuthService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class AuthService extends BaseService {
  protected sendOtpConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

  protected verifyOtpConfig: Partial<SdkConfig> = { environment: Environment.DOMIN_SERVER };

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
}
