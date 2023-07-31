import { useFormContext } from "react-hook-form";
import { FormSchemaType } from "@/components/join/join-form";
import styles from "./join-checkout.module.scss";
import { ButtonMain } from "@/components/buttons/button-main";
import { Input } from "@/components/input";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

export type JoinCheckoutProps = {
  cost: string;
  handlePrevState(): void;
};

export function JoinCheckout({ cost, handlePrevState }: JoinCheckoutProps) {
  const { isLightMode } = useColorContext();
  const { formState, register } = useFormContext<FormSchemaType>();
  const { errors, touchedFields } = formState;

  const stateIsValid =
    touchedFields.cardName &&
    touchedFields.cardNumber &&
    !errors.cardName &&
    !errors.cardNumber;

  return (
    <>
      <h6
        className={clsx(styles.title, {
          [styles["title--light-mode"]]: isLightMode,
        })}
      >
        Payment method
      </h6>
      <Input
        className={styles.input}
        label="Name on card"
        id="input-card-name"
        register={register("cardName")}
        error={errors.cardName?.message}
      />
      <Input
        className={styles.input}
        label="Credit card"
        id="input-card-number"
        register={register("cardNumber")}
        error={errors.cardNumber?.message}
        placeholder="1234 5678 9012 1234"
      />
      <div className={styles["button-container"]}>
        <ButtonMain variant="secondary" onClick={handlePrevState}>
          Back
        </ButtonMain>
        <ButtonMain variant="primary" disabled={!stateIsValid} type="submit">
          Sign up and pay {cost}
        </ButtonMain>
      </div>
    </>
  );
}
