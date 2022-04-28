import styles from "./Footer.module.css";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={"/imgs/logo.png"} alt="Samsung Ocean logo" />
          ocean
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, amet
          asperiores! Quibusdam aliquid repellat iusto voluptatum voluptates,
          soluta minus unde eos hic sit quisquam excepturi.
        </p>

        <p>Copyright &copy; Samsung Electronics 2022. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
