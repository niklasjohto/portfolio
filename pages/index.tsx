import type { NextPage } from "next";
import { useState } from "react";

import Style from "../styles/Home.module.scss";
import textToSpans from "../lib/textToSpans";
import copyToClipboard from "../lib/copyToClipboard";

import PageHead from "../components/PageHead";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  const [cursorClick, setCursorClick] = useState(false);
  const [cursorHide, setCursorHide] = useState(true);
  const [cursorPos, setCursorPos] = useState({ top: 0, left: 0 });
  const moveCursor = (event: any) => {
    setCursorPos({ top: event.pageY, left: event.pageX });
  };

  return (
    <div className={Style.wrapper}>
      <PageHead />
      <Layout>
        <Hero>
          <h2 className={Style.body__title}>
            {textToSpans("STUDENT &DEVELOPER", {
              initial: { opacity: 0, y: -50 },
              animate: { opacity: 1, y: 0 },
              transition: {
                duration: 0.075,
                type: "spring",
                damping: 25,
                stiffness: 500,
              },
            })}
          </h2>
          <h3 className={Style.body__location}>
            {textToSpans(
              "BASED IN DENMARK",
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: {
                  duration: 0.075,
                  type: "spring",
                  damping: 25,
                  stiffness: 500,
                },
              },
              17
            )}
          </h3>
          <div className={Style.body__contact}>
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
          </div>
        </Hero>
        <Projects />
      </Layout>
    </div>
  );
};

export default Home;
