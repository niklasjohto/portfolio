import Style from "../styles/404.module.scss";

import Header from "../components/Header";
import PageHead from "../components/PageHead";

import { motion } from "framer-motion";

const E404 = () => {
  return (
    <div className={Style.wrapper}>
      <PageHead title="404"></PageHead>
      <Header headerDelay={0} />
      <motion.div
        className={Style.wrapper__E404}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <strong className={Style.E404__title}>Error 404</strong>
        <p className={Style.E404__text}>Page could not be found.</p>
        <div className={Style.E404__image}></div>
      </motion.div>
    </div>
  );
};

export default E404;
