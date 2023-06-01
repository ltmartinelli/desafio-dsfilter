import { useState } from 'react';
import Header from './components/Header';
import ListingBody from './components/ListingBody';
import './index.css'
import { ContextProductCount } from './utils/context-products';

export default function App()
{

  const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (

    <ContextProductCount.Provider value={{ contextProductCount, setContextProductCount }}>
      <Header />
      <ListingBody />
    </ContextProductCount.Provider>

  );
}

