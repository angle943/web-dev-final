import styles from "./join-summary.module.scss";
import { useFormContext } from "react-hook-form";
import { FormSchemaType } from "@/components/join/join-form";
import clsx from "clsx";
import { JoinSummaryTestimonial } from "@/components/join/join-summary/join-summary-testimonial";
import { useColorContext } from "@/context/color-context";

export type JoinSummaryProps = {
  cost: string;
  seats: number;
};

export function JoinSummary({ cost, seats }: JoinSummaryProps) {
  const { isLightMode } = useColorContext();
  const { watch } = useFormContext<FormSchemaType>();

  const isTeamPlan = watch("isTeamPlan");
  const isYearlyPlan = watch("isYearlyPlan");

  const getItemName = () => {
    if (isTeamPlan) {
      return isYearlyPlan ? "Yearly Team" : "Monthly Team";
    }

    return isYearlyPlan ? "Yearly Plan" : "Monthly Plan";
  };

  const getDescription = () => {
    let output = "";
    if (isTeamPlan) {
      output += `${seats} seats, `;
    }
    output += "billed each ";
    if (isYearlyPlan) {
      output += "year";
    } else {
      output += "month";
    }
    return output;
  };

  return (
    <>
      <div
        className={clsx(styles["summary-container"], {
          [styles["summary-container--light-mode"]]: isLightMode,
        })}
      >
        <h6 className={styles.title}>Summary</h6>
        <div className={styles.row}>
          <span className={clsx("text-base", styles.bold)}>
            {getItemName()}
          </span>
          <span className={clsx("text-base")}>{cost}</span>
        </div>
        <span className={clsx("text-base", styles.description)}>
          {getDescription()}
        </span>
        <hr className={styles.hr} />
        <div className={styles.row}>
          <span className={clsx("text-base", styles.bold)}>Charged Today</span>
          <span className={clsx("text-base")}>{cost}</span>
        </div>
      </div>
      <JoinSummaryTestimonial />
    </>
  );
}
