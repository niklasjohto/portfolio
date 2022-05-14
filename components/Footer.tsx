import Style from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={Style.wrapper__footer}>
      <strong className={Style.footer__name}>NIKLASJOHTO</strong>
      <p className={Style.footer__year}>{new Date().getFullYear()}</p>
      <p className={Style.footer__credits}>DESIGNED AND DEVELOPED BY ME</p>
    </footer>
  );
};

export default Footer;
