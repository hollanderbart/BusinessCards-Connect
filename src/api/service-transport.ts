import { createConnectTransport } from '@connectrpc/connect-web';
import { fetch } from 'expo/fetch';

const baseUrl = 'https://demo.connectrpc.com';

export const elizaTransport = createConnectTransport({
  // @ts-ignore
  fetch: fetch,
  baseUrl,
});
