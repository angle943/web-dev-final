import { JoinState } from "@/constants/join-state";
import styles from "./join-progress.module.scss";
import { JoinProgressItem } from "@/components/join/join-progress/join-progress-item";
import clsx from "clsx";

export type JoinProgressTypes = {
  className: string;
  joinState: JoinState;
  setJoinState(joinState: JoinState): void;
};

export function JoinProgress({
  className,
  joinState,
  setJoinState,
}: JoinProgressTypes) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <JoinProgressItem
        state={JoinState.plan}
        selectedState={joinState}
        setJoinState={setJoinState}
      />
      <JoinProgressItem
        state={JoinState.account}
        selectedState={joinState}
        setJoinState={setJoinState}
      />
      <JoinProgressItem
        state={JoinState.checkout}
        selectedState={joinState}
        setJoinState={setJoinState}
      />
    </div>
  );
}
