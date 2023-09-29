import Layout from './layouts';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './page/home';
import AboutPage from './page/about';
import CompetitionPoster from './page/competition/poster';
import CompetitionPaper from './page/competition/paper';
import CompetitionEtc from './page/competition/etc';
import EventPreEvents from './page/event/pre-events';
import EventConference from './page/event/conference';
import EventSocialNight from './page/event/social-night';
import FaqPage from './page/faq';

function App() {

  /* ------------------- Scroll to top beetween pages: Start ------------------ */

  const location = useLocation();
  const [scrollTop, setScrollTop] = useState(0);

  function onScroll() {
    const currentPosition = document.documentElement.scrollTop;
    setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  /* -------------------- Scroll to top beetween pages: End ------------------- */

  return (
    <Layout>
      <Routes>
        <Route path="/aisc-2023/" element={<HomePage />} />
        <Route path="/aisc-2023/about" element={<AboutPage />} />
        <Route path="/aisc-2023/competition/poster" element={<CompetitionPoster />} />
        <Route path="/aisc-2023/competition/paper" element={<CompetitionPaper />} />
        <Route path="/aisc-2023/competition/etc" element={<CompetitionEtc />} />
        <Route path="/aisc-2023/event/pre-events" element={<EventPreEvents/>} />
        <Route path="/aisc-2023/event/conference" element={<EventConference />} />
        <Route path="/aisc-2023/event/social-night" element={<EventSocialNight />} />
        <Route path="/aisc-2023/faq" element={<FaqPage />} />
        <Route path="*" element={<HomePage />} />
        {/* <Route path="*" element={<div>Not Found</div>} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
