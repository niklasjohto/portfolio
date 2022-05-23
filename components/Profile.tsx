import { useState } from "react";

import Style from "../styles/Profile.module.scss";
import copyToClipboard from "../lib/copyToClipboard";

import { motion } from "framer-motion";

const yearsOfExp = (): string => {
  const date = new Date().getTime();
  const startDate = new Date("10/19/2020").getTime();
  return ((date - startDate) / (1000 * 3600 * 24) / 365).toFixed(1);
};

const Profile = () => {
  const [cursorClick, setCursorClick] = useState(false);
  const [cursorHide, setCursorHide] = useState(true);
  const [cursorPos, setCursorPos] = useState({ top: 0, left: 0 });
  const moveCursor = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    setCursorPos({ top: event.pageY, left: event.pageX });
  };

  return (
    <section data-section="Profile" className={Style.main__profile}>
      <h2 className={Style.profile__title}>HELLO! I&apos;M NIKLAS</h2>
      <div className={Style.profile__text}>
        <motion.p
          className={Style.text__paragraph}
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: "some" }}
        >
          I’m a student from Denmark,
          <br />I have around ~{yearsOfExp()} years of experience in IT & <br />
          I’m mostly self-taught but I have learnt a lot from school as well.
        </motion.p>
        <motion.p
          className={Style.text__paragraph}
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: "some" }}
        >
          I’m very passionate about everything IT & enjoy learning technologies,
          some of my favorites being: React, TypeScript & Rust.
        </motion.p>
        <motion.p
          className={Style.text__paragraph}
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: "some" }}
        >
          When I’m not working I usually play video games, mess around with
          networks or take care of my many plants.
        </motion.p>
      </div>

      <motion.div
        className={Style.profile__contact}
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        viewport={{ once: true, amount: "all" }}
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
        <h3 className={Style.contact__title}>WANNA GET IN CONTACT?</h3>
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
    </section>
  );
};

export default Profile;
