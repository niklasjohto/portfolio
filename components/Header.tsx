import { useRouter } from "next/router";
import Link from "next/link";
import Style from "../styles/Header.module.scss";

const Header = () => {
  const router = useRouter();
  return (
    <header className={Style.content__header}>
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
    </header>
  );
};

export default Header;
