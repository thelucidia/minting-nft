import React, { lazy } from "react";
import { motion } from 'framer-motion';

const Video = lazy(() => import("../views/home/Video"));

import MintingBanner from "../views/minting/MintingBanner";
import Benefits from "../views/home/Benefits";
import Airdrop from "../views/home/Airdrop";

const Minting: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-black"
        >
            <section className="w-full h-auto overflow-hidden bg-bg">
                <MintingBanner />
                <Airdrop />
                <Benefits />
                <Video />
            </section>
        </motion.div>
    );
};

export default Minting;
