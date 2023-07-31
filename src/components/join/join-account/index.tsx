import styles from "./join-account.module.scss";
import { useFormContext } from "react-hook-form";
import { FormSchemaType } from "@/components/join/join-form";
import { Input } from "@/components/input";
import { ButtonMain } from "@/components/buttons/button-main";

export type JoinAccountProps = {
  handlePrevState(): void;
  handleNextState(): void;
};
export function JoinAccount({
  handlePrevState,
  handleNextState,
}: JoinAccountProps) {
  const { formState, register } = useFormContext<FormSchemaType>();
  const { errors, touchedFields } = formState;

  const stateIsValid =
    touchedFields.email &&
    touchedFields.password &&
    touchedFields.confirmPassword &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword;

  const handleContinueButton = () => {
    if (!stateIsValid) return;

    handleNextState();
  };

  return (
    <>
      <Input
        className={styles.input}
        label="Email"
        id="input-email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        className={styles.input}
        label="Password"
        id="input-password"
        register={register("password")}
        error={errors.password?.message}
        type="password"
      />
      <Input
        className={styles.input}
        label="Confirm Password"
        id="input-confirm-password"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
        type="password"
      />
      <div className={styles["button-container"]}>
        <ButtonMain variant="secondary" onClick={handlePrevState}>
          Back
        </ButtonMain>
        <ButtonMain
          variant="primary"
          disabled={!stateIsValid}
          onClick={handleContinueButton}
        >
          Continue
        </ButtonMain>
      </div>
    </>
  );
}
