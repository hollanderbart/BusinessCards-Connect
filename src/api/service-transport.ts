import { createConnectTransport } from '@connectrpc/connect-web';
import { fetch, FetchRequestInit } from 'expo/fetch';

const baseUrl = 'https://demo.connectrpc.com';

export const elizaTransport = createConnectTransport({
  fetch: (input, init) => {
    if (typeof input !== 'string') {
      throw new Error(
        'expo/fetch requires the first argument to be a string URL',
      );
    }
    return fetch(
      input,
      init as unknown as FetchRequestInit,
    ) as unknown as Promise<Response>;
  },
  baseUrl,
});
