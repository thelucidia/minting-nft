import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ReactGA from 'react-ga';

import Landing from './pages/Landing';
import CreateId from './pages/CreateId';
import ConnectWallet from './pages/ConnectWallet';
import VerifyEmail from './pages/VerifyEmail';
import CodeAuth from './pages/CodeAuth';
import JoinUs from './pages/JoinUs';
import FinishAssessment from './pages/FinishAssessment';
import BeLucidian from './pages/BeLucidian';
import BackHome from './pages/BackHome';
import UserInfo from './components/elements/UserInfo';
import Minting from './pages/Minting';
import PharaohCourse from './pages/PharaohCourse';
import LucidiaNotes from './pages/LucidiaNotes';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';

import 'react-toastify/dist/ReactToastify.css';

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
    </Routes>
  );
};

const TRACKING_ID = "'G-LW9F39G459";
ReactGA.initialize(TRACKING_ID);

const App: React.FC = () => {
  const location = useLocation();
  const isFooter = location.pathname === '/';

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <section className="relative w-full h-full min-h-screen overflow-hidden bg-black mx-auto">
      <Nav />
      <BaseRoutes />
      {isFooter && <Footer />}
      <ToastContainer
        toastClassName="bg-transparent"
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </section>
  );
};

export default App;
