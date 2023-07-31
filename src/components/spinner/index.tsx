import { BiLoaderAlt } from "react-icons/bi";
import styles from "./spinner.module.scss";
import clsx from "clsx";
import { useColorContext } from "@/context/color-context";

export type SpinnerProps = {
  className?: string;
};

export function Spinner({ className }: SpinnerProps) {
  const { isLightMode } = useColorContext();

  return (
    <BiLoaderAlt
      className={clsx(styles.spinner, className, {
        [styles["spinner--light-mode"]]: isLightMode,
      })}
    />
  );
}
