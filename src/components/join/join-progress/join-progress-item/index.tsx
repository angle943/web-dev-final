import styles from "./join-progress-item.module.scss";
import { JoinState } from "@/constants/join-state";
import clsx from "clsx";
import { useColorContext } from "@/context/color-context";

export type JoinProgressItemProps = {
  selectedState: JoinState;
  state: JoinState;
  setJoinState(joinState: JoinState): void;
};

export function JoinProgressItem({
  selectedState,
  state,
  setJoinState,
}: JoinProgressItemProps) {
  const { isLightMode } = useColorContext();

  const isSelected = selectedState === state;

  let isSelectable = false;
  if (
    state === JoinState.plan &&
    (selectedState === JoinState.account ||
      selectedState === JoinState.checkout)
  ) {
    isSelectable = true;
  } else if (
    state === JoinState.account &&
    selectedState === JoinState.checkout
  ) {
    isSelectable = true;
  }

  const onClick = () => {
    if (!isSelectable) {
      return;
    }

    setJoinState(state);
  };

  return (
    <button
      className={clsx(styles.button, "text-lg", {
        [styles["button--light-mode"]]: isLightMode,
        [styles["button--selected"]]: !isLightMode && isSelected,
        [styles["button--selectable"]]: !isLightMode && isSelectable,
        [styles["button--selected--light-mode"]]: isLightMode && isSelected,
        [styles["button--selectable--light-mode"]]: isLightMode && isSelectable,
      })}
      disabled={!isSelectable}
      onClick={onClick}
    >
      {state}
    </button>
  );
}
