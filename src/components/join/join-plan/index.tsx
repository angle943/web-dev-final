import { useFormContext } from "react-hook-form";
import { FormSchemaType } from "@/components/join/join-form";
import { RadioGroup } from "@headlessui/react";
import styles from "./join-plan.module.scss";
import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ButtonMain } from "@/components/buttons/button-main";
import { Input } from "@/components/input";
import { useColorContext } from "@/context/color-context";

export type JoinPlanProps = {
  handleNextState(): void;
};

export function JoinPlan({ handleNextState }: JoinPlanProps) {
  const { isLightMode } = useColorContext();
  const { register, setValue, watch, formState, resetField } =
    useFormContext<FormSchemaType>();
  const { errors } = formState;

  const isTeamPlan = watch("isTeamPlan");
  const isYearlyPlan = watch("isYearlyPlan");

  const handleTeamPlanChange = (value: boolean): void => {
    resetField("seats");
    setValue("isTeamPlan", value);
  };

  const getPricePerMonth = (yearlyPlan: boolean): string => {
    if (!isTeamPlan && !yearlyPlan) {
      return "35.00";
    }
    if (!isTeamPlan && yearlyPlan) {
      return "29.17";
    }
    if (!yearlyPlan) {
      return "30.00";
    } else {
      return "25.00";
    }
  };

  const getInvoiceDescription = (yearlyPlan: boolean): string => {
    if (!isTeamPlan && !yearlyPlan) {
      return "$35 billed monthly";
    }
    if (!isTeamPlan && yearlyPlan) {
      return "$350 billed annually";
    }
    if (!yearlyPlan) {
      return "$30 billed monthly per user";
    } else {
      return "$300 billed annually per user";
    }
  };

  const getPriceRate = (): string => {
    if (!isTeamPlan) {
      return "/month";
    }
    return "/seat /month";
  };

  const stateIsValid =
    !errors.isTeamPlan && !errors.isYearlyPlan && !errors.seats;

  const handleContinueButton = () => {
    if (!stateIsValid) return;

    handleNextState();
  };

  return (
    <>
      <RadioGroup
        className={styles["radio-group"]}
        value={isTeamPlan}
        onChange={handleTeamPlanChange}
      >
        <RadioGroup.Label
          className={clsx(styles["radio-group-label"], "text-xl", {
            [styles["radio-group-label--light-mode"]]: isLightMode,
          })}
        >
          Select your plan
        </RadioGroup.Label>
        <RadioGroup.Option
          value={false}
          className={clsx(styles["radio-group-option"], {
            [styles["radio-group-option--selected"]]:
              !isLightMode && !isTeamPlan,
            [styles["radio-group-option--light-mode"]]: isLightMode,
            [styles["radio-group-option--selected--light-mode"]]:
              isLightMode && !isTeamPlan,
          })}
        >
          <>
            <h6 className={styles["radio-group-option-title"]}>Individual</h6>
            <p className={styles["radio-group-option-description"]}>
              Join the community of 10,000 students and accelerate your skills
              as a developer.
            </p>
            {!isTeamPlan && (
              <BsFillCheckCircleFill
                className={styles["radio-group-option-checkmark"]}
              />
            )}
          </>
        </RadioGroup.Option>
        <RadioGroup.Option
          value={true}
          className={clsx(styles["radio-group-option"], {
            [styles["radio-group-option--selected"]]:
              !isLightMode && isTeamPlan,
            [styles["radio-group-option--light-mode"]]: isLightMode,
            [styles["radio-group-option--selected--light-mode"]]:
              isLightMode && isTeamPlan,
          })}
        >
          <>
            <h6 className={styles["radio-group-option-title"]}>Team</h6>
            <p className={styles["radio-group-option-description"]}>
              Join together with your team of 5+ people, and save 14% per
              person.
            </p>
            {isTeamPlan && (
              <BsFillCheckCircleFill
                className={styles["radio-group-option-checkmark"]}
              />
            )}
          </>
        </RadioGroup.Option>
      </RadioGroup>
      <RadioGroup
        className={styles["radio-group"]}
        value={isYearlyPlan}
        onChange={(value) => setValue("isYearlyPlan", value)}
      >
        <RadioGroup.Label
          className={clsx(styles["radio-group-label"], "text-xl", {
            [styles["radio-group-label--light-mode"]]: isLightMode,
          })}
        >
          Select your billing cycle
        </RadioGroup.Label>
        <RadioGroup.Option
          value={false}
          className={clsx(styles["radio-group-option"], {
            [styles["radio-group-option--selected"]]:
              !isLightMode && !isYearlyPlan,
            [styles["radio-group-option--light-mode"]]: isLightMode,
            [styles["radio-group-option--selected--light-mode"]]:
              isLightMode && !isYearlyPlan,
          })}
        >
          <>
            <h6 className={styles["radio-group-option-title"]}>Monthly</h6>
            <div className={styles["pricing-per-month"]}>
              <h5 className={styles.price}>${getPricePerMonth(false)}</h5>
              <span className="text-base">{getPriceRate()}</span>
            </div>
            <p className={clsx(styles["price-description"], "text-base")}>
              {getInvoiceDescription(false)}
            </p>
            {!isYearlyPlan && (
              <BsFillCheckCircleFill
                className={styles["radio-group-option-checkmark"]}
              />
            )}
          </>
        </RadioGroup.Option>
        <RadioGroup.Option
          value={true}
          className={clsx(styles["radio-group-option"], {
            [styles["radio-group-option--selected"]]:
              !isLightMode && isYearlyPlan,
            [styles["radio-group-option--light-mode"]]: isLightMode,
            [styles["radio-group-option--selected--light-mode"]]:
              isLightMode && isYearlyPlan,
          })}
        >
          <>
            <h6 className={styles["radio-group-option-title"]}>Yearly</h6>
            <div className={styles["pricing-per-month"]}>
              <h5 className={styles.price}>${getPricePerMonth(true)}</h5>
              <span className="text-base">{getPriceRate()}</span>
            </div>
            <p className={clsx(styles["price-description"], "text-base")}>
              {getInvoiceDescription(true)}
            </p>
            {isYearlyPlan && (
              <BsFillCheckCircleFill
                className={styles["radio-group-option-checkmark"]}
              />
            )}
          </>
        </RadioGroup.Option>
      </RadioGroup>
      {isTeamPlan && (
        <Input
          className={styles["seat-input"]}
          label="Number of users"
          id="input-seat"
          register={register("seats", { valueAsNumber: true })}
          type="number"
          error={errors.seats?.message}
        />
      )}
      <div className={styles["button-container"]}>
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
