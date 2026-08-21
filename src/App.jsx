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
          <Route path="travel" element={<Travel />} />
          <Route path="business" element={<Business />} />
          <Route path="benefits" element={<Benefits />} />
          <Route path="health" element={<Health />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
