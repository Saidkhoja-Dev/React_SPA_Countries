import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import {Header} from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { CountryPage } from './pages/CountryPage';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/" exact>
            <HomePage countries={countries} setCountries={setCountries} />
          </Route>
          <Route path="/country/:name" component={CountryPage} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
