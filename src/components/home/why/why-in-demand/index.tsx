import styles from "./why-in-demand.module.scss";
import Image from "next/image";

const elementId = "why-in-demand";

export function WhyInDemand() {
  return (
    <div className={styles.container} id={elementId}>
      <Image
        className={styles.image}
        src={"/home/react.svg"}
        alt="react logo"
        width={500}
        height={500}
      />
      <h4 className={styles.text}>Learn the most in demand technologies.</h4>
    </div>
  );
}
