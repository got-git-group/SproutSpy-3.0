// import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import Layout from './components/Layout';
import Home from './components/Home';
import AddPlant from './components/AddPlant';
import Glossary from './components/Glossary';
import MyCalendar from './components/Calendar';
import Results from './components/Results';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path="addplant" element={ <AddPlant /> } />
          <Route path="glossary" element={ <Glossary /> } />
          <Route path="calendar" element={ <MyCalendar /> } />
          <Route path="results" element={ <Results /> } />
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;