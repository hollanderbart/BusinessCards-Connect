import { createCallbackClient } from '@connectrpc/connect';
import { elizaTransport } from './service-transport';
import { ElizaService } from '~/types/connectrpc/eliza/v1/eliza_pb';

export const elizaClientCallback = createCallbackClient(
  ElizaService,
  elizaTransport,
);
