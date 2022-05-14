import Style from "../styles/Layout.module.scss";
import Footer from "./Footer";

interface LayoutProps {
  children?: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={Style.wrapper__main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
