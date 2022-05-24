import type { NextPage } from "next";
import { useState } from "react";

import Style from "../styles/Home.module.scss";
import textToSpans from "../lib/textToSpans";
import copyToClipboard from "../lib/copyToClipboard";
import PageHead from "../components/PageHead";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

import { motion } from "framer-motion";

const Home: NextPage = () => {
  const [cursorClick, setCursorClick] = useState(false);
  const [cursorHide, setCursorHide] = useState(true);
  const [cursorPos, setCursorPos] = useState({ top: 0, left: 0 });
  const moveCursor = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    setCursorPos({ top: event.pageY, left: event.pageX });
  };

  return (
    <div className={Style.wrapper}>
      <PageHead />
      <Layout>
        <Hero bannerDelay={1.5}>
          <h2 className={Style.body__title}>
            <span className={Style.title__row}>
              {textToSpans(
                "STUDENT &",
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
                0.5 / 9
              )}
            </span>
            <span className={Style.title__row}>
              {textToSpans(
                "DEVELOPER",
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
                0.5 / 9,
                0.5
              )}
            </span>
          </h2>
          <h3 className={Style.body__location}>
            {textToSpans(
              "BASED IN DENMARK",
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
              },
              0.75 / 16,
              1
            )}
          </h3>
          <motion.div
            className={Style.body__contact}
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
              delay: 1.5,
              ease: [0.62, 0.05, 0.01, 0.99],
            }}
          >
            <div
              className={Style.contact__cursor}
              style={{
                ...cursorPos,
                opacity: cursorHide ? 0 : 1,
                filter: cursorClick ? "invert(1)" : "none",
              }}
            >
              {cursorClick ? "COPIED" : "COPY"}
            </div>
            <p
              className={Style.contact__email}
              onClick={() => {
                copyToClipboard();
                setCursorClick(true);
              }}
              onMouseMove={(e) => {
                moveCursor(e);
                setCursorHide(false);
              }}
              onMouseLeave={() => {
                setCursorHide(true);
                setCursorClick(false);
              }}
            >
              NIKLASJOHTO@ TUTANOTA.COM
            </p>
            <div className={Style.contact__socials}>
              <a
                href="https://github.com/niklasjohto"
                rel="noreferrer"
                target="_blank"
                className={Style.socials__link}
              >
                GITHUB,
              </a>
              <a
                href="https://twitter.com/niklasjohto"
                rel="noreferrer"
                target="_blank"
                className={Style.socials__link}
              >
                TWITTER
              </a>
            </div>
          </motion.div>
        </Hero>
        <Projects />
      </Layout>
    </div>
  );
};

export default Home;
