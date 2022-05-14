import Header from "./Header";
import Style from "../styles/Hero.module.scss";

import { motion } from "framer-motion";

interface HeroProps {
  children?: JSX.Element[] | JSX.Element;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <section className={Style.main__hero} data-section="Hero">
      <div className={Style.hero__content}>
        <Header />
        <section className={Style.content__body}>{children}</section>
      </div>
      <motion.div
        className={Style.hero__image}
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      ></motion.div>
    </section>
  );
};

export default Hero;
