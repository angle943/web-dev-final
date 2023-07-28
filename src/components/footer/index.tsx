import { Container } from "@/components/container";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <Container className={styles.container}>
      <hr className={styles.hr} />
      <footer className={styles.footer}></footer>
    </Container>
  );
}
