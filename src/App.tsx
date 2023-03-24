import Layout from './layouts';
import { Routes, Route } from 'react-router-dom';

import HomePage from './page/home';
import AboutPage from './page/about';
import CompetitionPage from './page/competition';
import EventPage from './page/event';
import FaqPage from './page/faq';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/competition" element={<CompetitionPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
