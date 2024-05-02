import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Nav = lazy(() => import('./components/layouts/Nav'));
const Footer = lazy(() => import('./components/layouts/Footer'));

import Landing from './pages/Landing';

export const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      {/* <Route path="/about" >
        <Route index element={<About />} />
        <Route path="/about/team-member" element={<TeamMember />} />
        <Route path="/about/career" element={<Career />} />
        <Route path="/about/roadmap" element={<RoadMap />} />
        <Route path="/about/academy" element={<Academy />} />
        <Route path="/about/faq" element={<Faq />} />
      </Route> */}
    </Routes>
  )
}

const App: React.FC = () => {

  return (
    <section className="w-full h-full overflow-hidden bg-bg mx-auto">
      <Nav />
        <BaseRoutes />
      <Footer />
    </section>
  );
};

export default App;
