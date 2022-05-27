import Link from "next/link";

import Style from "../styles/404.module.scss";

import textToSpans from "../lib/textToSpans";
import Header from "../components/Header";
import PageHead from "../components/PageHead";

import { motion } from "framer-motion";

const E404 = () => {
  return (
    <div className={Style.wrapper}>
      <PageHead title="404"></PageHead>
      <Header headerDelay={0.75} />
      <motion.div
        className={Style.wrapper__error}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          ease: [0.62, 0.05, 0.01, 0.99],
        }}
      >
        <strong className={Style.error__title}>PAGE NOT FOUND</strong>
        <Link href="/">
          <a className={Style.error__home}>BACK TO HOME</a>
        </Link>
      </motion.div>
      <div className={Style.wrapper__bgr}>
        {textToSpans(
          "404",
          {
            initial: { opacity: 0.4 },
            animate: { opacity: 0.025, textShadow: "7.5px 7.5px #438855" },
            transition: {
              duration: 0.5,
              ease: [0.62, 0.05, 0.01, 0.99],
            },
          },
          0.25
        )}
      </div>
    </div>
  );
};

export default E404;
