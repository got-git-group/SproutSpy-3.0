// import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import Layout from './components/Layout';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;