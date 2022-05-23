import { useRouter } from "next/router";
import Link from "next/link";

import Style from "../styles/Header.module.scss";

import { motion } from "framer-motion";

interface HeaderProps {
  headerDelay: number;
}

const Header = ({ headerDelay }: HeaderProps) => {
  const router = useRouter();
  return (
    <motion.header
      className={Style.content__header}
      initial={{ y: "-200%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        delay: headerDelay,
        ease: [0.62, 0.05, 0.01, 0.99],
      }}
    >
      <Link href="/">
        <h1 className={Style.header__title}>NIKLASJOHTO</h1>
      </Link>
      <nav className={Style.header__nav}>
        {router.pathname === "/" ? (
          <Link href="/about">
            <a className={Style.nav__link}>ABOUT</a>
          </Link>
        ) : (
          <Link href="/">
            <a className={Style.nav__link}>HOME</a>
          </Link>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
