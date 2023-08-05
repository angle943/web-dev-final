import styles from "./game-status.module.scss";
import { GameState } from "@/components/play/game";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

export type GameStatusProps = {
  gameState: GameState;
  timer: number;
};

export function GameStatus({ gameState, timer }: GameStatusProps) {
  const { isLightMode } = useColorContext();
  const getTime = () => {
    return (timer / 100).toFixed(2);
  };

  const renderNotStarted = () => {
    return `Begin typing to get started...`;
  };

  const renderInProgress = () => {
    return `${getTime()}`;
  };

  const renderFinished = () => {
    return `Final Time: ${getTime()}`;
  };

  const renderMap = {
    [GameState.notStarted]: renderNotStarted,
    [GameState.inProgress]: renderInProgress,
    [GameState.finished]: renderFinished,
  };

  return (
    <p
      className={clsx(styles.container, {
        [styles["container--light-mode"]]: isLightMode,
      })}
    >
      {renderMap[gameState]()}
    </p>
  );
}
