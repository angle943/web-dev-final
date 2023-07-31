import { UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import styles from "./input.module.scss";
import { useColorContext } from "@/context/color-context";

export type InputProps = {
  className?: string;
  label: string;
  error?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  register?: UseFormRegisterReturn;
  id: string;
};

export function Input({
  className,
  label,
  error,
  type = "text",
  placeholder,
  register,
  id,
}: InputProps) {
  const { isLightMode } = useColorContext();

  return (
    <div
      className={clsx(styles["input-set"], className, {
        [styles["input-set--light-mode"]]: isLightMode,
      })}
    >
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <input
        autoComplete="off"
        className={clsx(styles.seat, {
          [styles["input-error"]]: !!error,
        })}
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
      />
      <span className="text-base">{error}&nbsp;</span>
    </div>
  );
}
