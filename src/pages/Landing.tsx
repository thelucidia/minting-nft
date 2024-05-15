import React from 'react';
import { motion } from 'framer-motion';

import Banner from "../views/home/Banner";
import Benefits from "../views/home/Benefits";
import Airdrop from "../views/home/Airdrop";
import Video from '../views/home/Video';

const Landing: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-black"
    >
      <section className="w-full h-auto overflow-hidden bg-bg">
        {/* <Banner />
        <Airdrop />
        <Benefits /> */}
        {/* <Video /> */}
      </section>
    </motion.div>
  );
};
export default Landing;
