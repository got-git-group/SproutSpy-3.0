// import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AddPlant from './components/AddPlant';
import Glossary from './components/Glossary';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path="addplant" element={ <AddPlant /> } />
          <Route path="glossary" element={ <Glossary /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;