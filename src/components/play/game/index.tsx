import styles from "./game.module.scss";
import { useEffect, useState } from "react";
import { TypingArea } from "@/components/play/typing-area";
import { GameStatus } from "@/components/play/game-status";
import { useCountdown } from "usehooks-ts";
import { ButtonMain } from "@/components/buttons/button-main";
import { Container } from "@/components/container";
import clsx from "clsx";
import { useColorContext } from "@/context/color-context";

export enum GameState {
  notStarted = "not-started",
  inProgress = "in-progress",
  finished = "finished",
}

export enum Difficulty {
  easy = "Easy",
  medium = "Medium",
  hard = "Hard",
}

export function Game() {
  const { isLightMode } = useColorContext();
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.easy);
  const [gameState, setGameState] = useState<GameState>(GameState.notStarted);
  const [timer, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      isIncrement: true,
      countStart: 0,
      intervalMs: 10,
      countStop: Infinity,
    });

  useEffect(() => {
    if (gameState === GameState.notStarted) {
      resetCountdown();
    } else if (gameState === GameState.inProgress) {
      startCountdown();
    } else if (gameState == GameState.finished) {
      stopCountdown();
    }
  }, [gameState, startCountdown, stopCountdown, resetCountdown]);

  const incrementPlan = () => {
    if (gameState !== GameState.notStarted) {
      return;
    }

    switch (difficulty) {
      case Difficulty.easy: {
        setDifficulty(Difficulty.medium);
        break;
      }
      case Difficulty.medium: {
        setDifficulty(Difficulty.hard);
        break;
      }
      default: {
        setDifficulty(Difficulty.easy);
      }
    }
  };

  return (
    <Container className={styles.container}>
      <h1
        className={clsx(styles.title, {
          [styles["title--light-mode"]]: isLightMode,
        })}
      >
        Practice your skills
      </h1>
      <div
        className={clsx(styles["toggle-container"], {
          [styles["toggle-container--light-mode"]]: isLightMode,
        })}
        onClick={incrementPlan}
      >
        <div
          className={clsx(styles["toggle-white"], {
            [styles["toggle-white--medium"]]: difficulty === Difficulty.medium,
            [styles["toggle-white--hard"]]: difficulty === Difficulty.hard,
            [styles["toggle-white--light-mode"]]: isLightMode,
            [styles["toggle-white--disabled"]]:
              !isLightMode && gameState !== GameState.notStarted,
            [styles["toggle-white--disabled--light-mode"]]:
              isLightMode && gameState !== GameState.notStarted,
          })}
        />
        <span
          className={clsx("text-lg", styles["toggle-option"], {
            [styles["toggle-option--light-mode"]]: isLightMode,
            [styles["toggle-option--selected"]]:
              !isLightMode && difficulty === Difficulty.easy,
            [styles["toggle-option--selected--light-mode"]]:
              isLightMode && difficulty === Difficulty.easy,
          })}
        >
          Easy
        </span>
        <span
          className={clsx("text-lg", styles["toggle-option"], {
            [styles["toggle-option--light-mode"]]: isLightMode,
            [styles["toggle-option--selected"]]:
              !isLightMode && difficulty === Difficulty.medium,
            [styles["toggle-option--selected--light-mode"]]:
              isLightMode && difficulty === Difficulty.medium,
          })}
        >
          Medium
        </span>
        <span
          className={clsx("text-lg", styles["toggle-option"], {
            [styles["toggle-option--light-mode"]]: isLightMode,
            [styles["toggle-option--selected"]]:
              !isLightMode && difficulty === Difficulty.hard,
            [styles["toggle-option--selected--light-mode"]]:
              isLightMode && difficulty === Difficulty.hard,
          })}
        >
          Hard
        </span>
      </div>
      <div className={styles["game-section"]}>
        <GameStatus gameState={gameState} timer={timer} />
        <TypingArea
          gameState={gameState}
          setGameState={setGameState}
          difficulty={difficulty}
        />
        <div className={styles["button-container"]}>
          {gameState === GameState.finished ? (
            <ButtonMain
              variant="secondary"
              onClick={() => setGameState(GameState.notStarted)}
            >
              Restart
            </ButtonMain>
          ) : null}
        </div>
      </div>
      <p
        className={clsx(styles["bigger-screen"], {
          [styles["bigger-screen--light-mode"]]: isLightMode,
        })}
      >
        Unfortunately you need a bigger screen to play this typing game. True
        programmers only type in screens bigger than 1024px, so come back to
        this page when you have the right gear.
      </p>
    </Container>
  );
}
