import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import ImmigrationCitizenship from './pages/ImmigrationCitizenship';
import Travel from './pages/Travel';
import Business from './pages/Business';
import Benefits from './pages/Benefits';
import Health from './pages/Health';
import CheckStatus from './pages/CheckStatus';
import Application from './pages/Application';
import CheckProcessingTimes from './pages/CheckProcessingTimes';
import IRCCAccount from './pages/IRCCAccount';
import Account from './pages/Account';
import GCKeyLogin from './pages/GCKeyLogin';
import GCKeyForgotUsername from './pages/GCKeyForgotUsername';
import GCKeyLayout from './components/GCKeyLayout';

import Taxes from './pages/Taxes';
import Environment from './pages/Environment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="services/immigration-citizenship" element={<ImmigrationCitizenship />} />
          <Route path="immigration-refugees-citizenship/services/application" element={<Application />} />
          <Route path="immigration-refugees-citizenship/services/application/check-status" element={<CheckStatus />} />
          <Route path="immigration-refugees-citizenship/services/application/check-processing-times" element={<CheckProcessingTimes />} />
          <Route path="immigration-refugees-citizenship/services/application/ircc-accounts" element={<IRCCAccount />} />
          <Route path="immigration-refugees-citizenship/services/application/account" element={<Account />} />
          <Route path="travel" element={<Travel />} />
          <Route path="business" element={<Business />} />
          <Route path="benefits" element={<Benefits />} />
          <Route path="health" element={<Health />} />
          <Route path="services/taxes.html" element={<Taxes />} />
          <Route path="services/taxes" element={<Taxes />} />
          <Route path="taxes" element={<Taxes />} />
          <Route path="services/environment.html" element={<Environment />} />
          <Route path="services/environment" element={<Environment />} />
          <Route path="environment" element={<Environment />} />
        </Route>
        <Route element={<GCKeyLayout />}>
          <Route path="/j/eng/l" element={<GCKeyLogin />} />
          <Route path="/fu" element={<GCKeyForgotUsername />} />
          <Route path="/j/eng/fu" element={<GCKeyForgotUsername />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
