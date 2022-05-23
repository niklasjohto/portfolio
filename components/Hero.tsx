import Style from "../styles/Hero.module.scss";
import Header from "./Header";

import { motion } from "framer-motion";

interface HeroProps {
  children?: JSX.Element[] | JSX.Element;
  bannerDelay: number;
}

const Hero = ({ children, bannerDelay }: HeroProps) => {
  return (
    <section className={Style.main__hero} data-section="Hero">
      <div className={Style.hero__content}>
        <Header headerDelay={bannerDelay} />
        <div className={Style.content__body}>{children}</div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{
          duration: 1,
          ease: [0.62, 0.05, 0.01, 0.99],
          delay: bannerDelay,
        }}
        className={Style.hero__image}
      ></motion.div>
    </section>
  );
};

export default Hero;
