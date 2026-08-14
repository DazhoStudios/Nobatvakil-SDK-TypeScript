import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { ServerSdkService } from './services/server-sdk';

export * from './services/server-sdk';

export * from './http';
export { Environment } from './http/environment';

export class ServerSdk {
  public readonly serverSdk: ServerSdkService;

  constructor(public config: SdkConfig) {
    this.serverSdk = new ServerSdkService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.serverSdk.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.serverSdk.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.serverSdk.timeoutMs = timeoutMs;
  }

  set token(token: string) {
    this.serverSdk.token = token;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
