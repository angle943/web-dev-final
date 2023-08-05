import styles from "./typing-area.module.scss";
import { JetBrains_Mono } from "next/font/google";
import clsx from "clsx";
import {
  ChangeEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useEventListener } from "usehooks-ts";
import { Difficulty, GameState } from "@/components/play/game";
import { useColorContext } from "@/context/color-context";

const mono = JetBrains_Mono({ subsets: ["latin"] });

type TextData = {
  text: string;
  spaces: number;
};

const hardTextData: TextData[] = [
  { text: `export type HeaderNavProps = {`, spaces: 0 },
  { text: `className?: string;`, spaces: 2 },
  { text: `isMobile?: boolean;`, spaces: 2 },
  { text: `};`, spaces: 0 },
  { text: "", spaces: 0 },
  {
    text: `export function HeaderNav({ className, isMobile }: HeaderNavProps) {`,
    spaces: 0,
  },
  {
    text: `const { isLightMode, toggleLightMode } = useColorContext();`,
    spaces: 2,
  },
  { text: `const pathname = usePathname();`, spaces: 2 },
  {
    text: `const disableLightBulb = pathname.includes(PageRoute.courses);`,
    spaces: 2,
  },
  { text: ``, spaces: 2 },
  { text: `return (`, spaces: 2 },
  { text: `<nav`, spaces: 4 },
  { text: `className={clsx(styles.nav, className, {`, spaces: 6 },
  { text: `[styles["nav-mobile"]]: isMobile,`, spaces: 8 },
  { text: `})}`, spaces: 6 },
  { text: `>`, spaces: 4 },
  {
    text: `<HeaderNavLink label="Courses" href={PageRoute.courses} />`,
    spaces: 6,
  },
  { text: `<HeaderNavLink label="Blog" href={PageRoute.blog} />`, spaces: 6 },
  { text: `<HeaderNavLink label="Play" href={PageRoute.play} />`, spaces: 6 },
  { text: `<HeaderNavLink label="Join" href={PageRoute.join} />`, spaces: 6 },
  { text: `{!disableLightBulb && (`, spaces: 6 },
  { text: `<button`, spaces: 8 },
  { text: `className={clsx(styles.light, {`, spaces: 10 },
  { text: `[styles["light-mode"]]: isLightMode,`, spaces: 12 },
  { text: `})}`, spaces: 10 },
  { text: `onClick={toggleLightMode}`, spaces: 10 },
  { text: `>`, spaces: 8 },
  { text: `<BsFillLightbulbFill />`, spaces: 10 },
  { text: `</button>`, spaces: 8 },
  { text: `)}`, spaces: 6 },
  { text: `</nav>`, spaces: 4 },
  { text: `);`, spaces: 2 },
  { text: `}`, spaces: 0 },
];

const mediumTextData: TextData[] = [
  { text: `function reverse(str: string): string {`, spaces: 0 },
  { text: `let output = "";`, spaces: 2 },
  { text: ``, spaces: 2 },
  { text: `for (let i = str.length - 1; i >= 0; i--) {`, spaces: 2 },
  { text: `output += str[i];`, spaces: 4 },
  { text: `}`, spaces: 2 },
  { text: ``, spaces: 2 },
  { text: `return output;`, spaces: 2 },
  { text: `}`, spaces: 0 },
];

const easyTextData: TextData[] = [
  { text: `const output = "Hello World";`, spaces: 0 },
  { text: `console.log(output);`, spaces: 0 },
];

export type TypingAreaProps = {
  gameState: GameState;
  setGameState(gameState: GameState): void;
  difficulty: Difficulty;
};

export function TypingArea({
  gameState,
  setGameState,
  difficulty,
}: TypingAreaProps) {
  const { isLightMode } = useColorContext();

  const textData =
    difficulty === Difficulty.easy
      ? easyTextData
      : difficulty === Difficulty.hard
      ? hardTextData
      : mediumTextData;
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("");
  const { text } = textData[currentLine];

  const focusOnInput = useCallback(() => {
    if (gameState !== GameState.finished) {
      const inputEl = document.getElementById("hidden-input");
      inputEl?.focus();
    }
  }, [gameState]);

  useEffect(() => {
    focusOnInput();
    if (gameState === GameState.notStarted) {
      setCurrentLine(0);
      setTypedText("");
    }
  }, [focusOnInput, gameState]);

  useEventListener("keypress", (evt) => {
    if (evt.key === "Enter" && typedText === text) {
      if (currentLine + 1 === textData.length) {
        setGameState(GameState.finished);
        return;
      } else if (textData[currentLine + 1].text.length === 0) {
        setCurrentLine(currentLine + 2);
      } else {
        setCurrentLine(currentLine + 1);
      }
      setTypedText("");
    }
  });

  const renderTypedText = (): ReactNode => {
    let output = "";
    for (let i = 0; i < typedText.length; i++) {
      const typedChar = typedText[i];
      const actualChar = text[i];
      if (typedChar === actualChar) {
        output += typedChar;
        continue;
      } else {
        return (
          <>
            {output}
            <span className={styles.error}>{typedText.substring(i)}</span>
          </>
        );
      }
    }
    return output;
  };

  const renderCursor = () => {
    return (
      <span
        className={clsx(styles.cursor, {
          [styles["cursor--hidden"]]: gameState === GameState.finished,
        })}
      >
        |
      </span>
    );
  };

  const handleType: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (gameState === GameState.notStarted) {
      setGameState(GameState.inProgress);
    }
    setTypedText(e.target.value);
  };

  const renderFinishedLines = (currentLine: number) => {
    let output = "";
    for (let i = 0; i < currentLine; i++) {
      const { text, spaces } = textData[i];

      if (text.length === 0) {
        output += "\n";
        continue;
      }

      for (let i = 0; i < spaces; i++) {
        output += " ";
      }

      output += text;

      if (i + 1 !== currentLine) {
        output += "\n";
      }
    }

    return output;
  };

  const renderSpaces = (currentLine: number) => {
    const { spaces } = textData[currentLine];
    return " ".repeat(spaces);
  };

  const getTextString = () => {
    let output = "";
    for (const { text, spaces } of textData) {
      if (text.length === 0) {
        output += "\n";
        continue;
      }

      for (let i = 0; i < spaces; i++) {
        output += " ";
      }

      output += text;
      output += "\n";
    }

    return output;
  };

  return (
    <>
      <div
        className={clsx(mono.className, styles["background-text"], {
          [styles["background-text--light-mode"]]: isLightMode,
        })}
        onClick={focusOnInput}
      >
        {getTextString()}
        <div className={clsx(styles["typed-section"])}>
          <div
            className={clsx(styles["finished-lines"], {
              [styles["finished-lines--light-mode"]]: isLightMode,
            })}
          >
            {renderFinishedLines(currentLine)}
          </div>
          <div
            className={clsx(styles["current-line"], {
              [styles["current-line--light-mode"]]: isLightMode,
            })}
          >
            {renderSpaces(currentLine)}
            {renderTypedText()}
            {renderCursor()}
          </div>
        </div>
      </div>
      <input
        className={styles.hidden}
        onChange={handleType}
        autoFocus={true}
        id="hidden-input"
        value={typedText}
        onBlur={focusOnInput}
        autoComplete="off"
      />
    </>
  );
}
