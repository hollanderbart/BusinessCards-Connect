import React from 'react';
import BusinessCardList from './BusinessCardList/BusinessCardList';
import { useElizaIntroduceStream } from './hooks/useElizaIntroduceStream';

function App() {
  useElizaIntroduceStream();

  return <BusinessCardList />;
}

export default App;
