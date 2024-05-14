import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Nav = lazy(() => import('./components/layouts/Nav'));
const Footer = lazy(() => import('./components/layouts/Footer'));

import Landing from './pages/Landing';
import CreateId from "./pages/CreateId";
import ConnectWallet from './pages/ConnectWallet';
import VerifyEmail from './pages/VerifyEmail';
import CodeAuth from "./pages/CodeAuth";
import JoinUs from './pages/JoinUs';
import FinishAssessment from './pages/FinishAssessment';
import BeLucidian from './pages/BeLucidian';
import BackHome from './pages/BackHome';
import UserInfo from './components/elements/UserInfo';
import Minting from './pages/Minting';
import PharaohCourse from './pages/PharaohCourse';
import LucidiaNotes from './pages/LucidiaNotes';

// let web3: any;

export const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/create-id" element={<CreateId />} />
      <Route path="/connect-wallet" element={<ConnectWallet />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/code-auth" element={<CodeAuth />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/finish-assessment" element={<FinishAssessment />} />
      <Route path="/be-lucidian" element={<BeLucidian />} />
      <Route path="/back-home" element={<BackHome />} />
      <Route path="/user-info" element={<UserInfo />} />
      <Route path="/minting" element={<Minting />} />
      <Route path="/pharaoh-course" element={<PharaohCourse />} />
      <Route path="/lucidia-notes" element={<LucidiaNotes />} />

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

  const pathname = window.location.pathname;
  const isFooter = pathname === "/";

  return (
    <section className="w-full h-full overflow-hidden bg-bg mx-auto">
      <Nav />
        <BaseRoutes />
      {isFooter && <Footer />}
    </section>
  );
};

export default App;
