import { useEffect, useRef } from 'react';
import { elizaClientCallback } from '../api/eliza.api';

export const useElizaIntroduceStream = () => {
  const unsubscribeRef = useRef<() => void>();

  const connect = () => {
    // Uncomment the following code to see the error
    unsubscribeRef.current = elizaClientCallback.introduce(
      {
        name: 'John Doe',
      },
      (response) => {
        console.log(response);
        console.log('Eliza introduce stream connected');
        console.log('Trying to cancel the stream');
        unsubscribeRef.current?.();
      },
      (error) => {
        console.error(error);
      },
    );
  };

  useEffect(() => {
    connect();

    return unsubscribeRef.current;
  }, []);
};
