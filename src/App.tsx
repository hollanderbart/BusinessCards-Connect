import React from 'react';
import BusinessCardList from './BusinessCardList/BusinessCardList';
import { useHttpDrip } from './hooks/useHttpDrip';

function App() {
  useHttpDrip();

  return <BusinessCardList />;
}

export default App;
