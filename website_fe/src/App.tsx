import React from 'react';
import './App.css';
import { gql, useQuery, DocumentNode } from '@apollo/client';

function App(): JSX.Element {
  const EXCHANGE_RATES: DocumentNode = gql`
    query GetExchangeRates {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `;

  const ExchangeRates = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error :(</p>

    type result = {
      currency: any;
      rate: any;
    };

    return data.rates.map(({ currency, rate }: result) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }


  return (
    <div className="App">
      <header className="App-header">
        <ExchangeRates/>
      </header>
    </div>
  );
}

export default App;
