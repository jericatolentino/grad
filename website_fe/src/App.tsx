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

  const getAllUsers: DocumentNode = gql`
    query {
      allUsers {
        firstName
        surname
        age
        hobby {
          id
          sport
        }
      }
    }
  `

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

  const AllUsers = () => {
    const { loading, error, data } = useQuery(getAllUsers);

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error :(</p>

    type user = {
      firstName: string;
      surname: string;
      age: number;
      hobby: {
        id: number;
        sport: string;
      };
    };

    return data.allUsers.map((result: user) => (
      <div key={result.firstName}>
        <p>
          {result.firstName} {result.surname}, age:{result.age}
        </p>
      </div>
    ));
  }

  return (
    <div className="App">
      <header className="App-header">
        <AllUsers/>
      </header>
    </div>
  );
}

export default App;
