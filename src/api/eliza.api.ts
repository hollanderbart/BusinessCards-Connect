import { createCallbackClient } from '@connectrpc/connect';
import { ElizaService } from '../types/eliza_pb';
import { elizaTransport } from './service-transport';

export const elizaClientCallback = createCallbackClient(
  ElizaService,
  elizaTransport,
);
