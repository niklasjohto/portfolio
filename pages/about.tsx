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
        <Hero bannerDelay={38 * 0.05}>
          <h2 className={Style.body__title}>
            <span className={Style.title__row}>
              {textToSpans(
                "VIDEO GAMES,",
                {
                  initial: { translateY: 100 },
                  animate: {
                    translateY: 0,
                  },
                  transition: {
                    duration: 0.75,
                    ease: [0.62, 0.05, 0.01, 0.99],
                  },
                },
                0.05
              )}
            </span>
            <span className={Style.title__row}>
              {textToSpans(
                "HOUSEPLANTS,",
                {
                  initial: { translateY: 100 },
                  animate: {
                    translateY: 0,
                  },
                  transition: {
                    duration: 0.75,
                    ease: [0.62, 0.05, 0.01, 0.99],
                  },
                },
                0.05,
                12
              )}
            </span>
            <span className={Style.title__row}>
              {textToSpans(
                "EVERYTHING IT.",
                {
                  initial: { translateY: 100 },
                  animate: {
                    translateY: 0,
                  },
                  transition: {
                    duration: 0.75,
                    ease: [0.62, 0.05, 0.01, 0.99],
                  },
                },
                0.05,
                24
              )}
            </span>
          </h2>
          <motion.div
            className={Style.body__arrow}
            initial={{
              y: -25,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 38 * 0.05,
              ease: [0.62, 0.05, 0.01, 0.99],
            }}
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
