import { createConnectTransport } from '@connectrpc/connect-web';
import { fetch as expoFetch } from 'expo/fetch';

export const baseUrl = 'https://demo.connectrpc.com';

export const elizaTransport = createConnectTransport({
  fetch: expoFetch as unknown as typeof globalThis.fetch,
  baseUrl,
});
