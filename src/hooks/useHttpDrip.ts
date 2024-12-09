import { useEffect, useRef } from 'react';
import { fetch } from 'expo/fetch';
import { baseUrl } from '../api/service-transport';
import '@bacons/text-decoder/install';

const abortController = new AbortController();
const textDecoder = new TextDecoder();

export const useHttpDrip = () => {
  const connect = async () => {
    try {
      const response = await fetch(baseUrl, {
        signal: abortController.signal,
      });
      console.log('LOG: Response:', response);
      const reader = response.body?.getReader();

      if (!reader) {
        throw new Error('No reader available');
      }

      console.log('LOG: Reader:', reader);

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log('Stream complete');
          break;
        }

        const decodedValue = textDecoder.decode(value, { stream: true });
        console.log('Received chunk:', decodedValue);

        console.log('Trying to abort the stream');
        abortController.abort();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    connect();
  }, []);
};
