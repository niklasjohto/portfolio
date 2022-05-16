import type { NextPage } from "next";

import Style from "../styles/About.module.scss";
import textToSpans from "../lib/textToSpans";

import PageHead from "../components/PageHead";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Profile from "../components/Profile";

import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const About: NextPage = () => {
  return (
    <div className={Style.wrapper}>
      <PageHead title="about" />
      <Layout>
        <Hero>
          <h2 className={Style.body__title}>
            {textToSpans(
              "VIDEO GAMES,HOUSEPLANTS,EVERYTHING IT.",
              {
                initial: { opacity: 0, y: -25 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.05,
                  type: "spring",
                  damping: 25,
                  stiffness: 500,
                },
              },
              0.05
            )}
          </h2>
          <motion.div
            className={Style.body__arrow}
            initial={{
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.5, delay: 1.8, ease: "easeInOut" }}
          >
            <MdKeyboardArrowDown />
          </motion.div>
        </Hero>
        <Profile />
      </Layout>
    </div>
  );
};

export default About;
