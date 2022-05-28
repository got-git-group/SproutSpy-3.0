import './styles/index.sass'
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './utils/loading';
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
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

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