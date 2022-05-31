import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ApolloWrapper from './utils/ApolloWrapper';
import Loading from './utils/loading';

import Layout from './components/Layout';
import Home from './components/Home';
import AddPlant from './components/AddPlant';
import Glossary from './components/Glossary';
import MyCalendar from './components/Calendar';
import Results from './components/Results';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ApolloWrapper>
      <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path="addplant" element={ <AddPlant /> } />
          <Route path="glossary" element={ <Glossary /> } />
          <Route path="calendar" element={ <MyCalendar /> } />
          <Route path="results" element={ <Results /> } />
        </Route>
      </Routes>
    </ApolloWrapper>
  );
}

export default App;