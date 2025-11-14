import { useEffect, useRef } from "react";

type Props = {
  guessedLetters: string[];
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  triesLeft: number;
  won: boolean;
};

export function HangmanKeyboard({
  guessedLetters,
  setGuessedLetters,
  triesLeft,
  won,
}: Props) {
  const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const keyboard = useRef<HTMLDivElement | null>(null);

  function handleKey(e: React.MouseEvent<HTMLButtonElement>) {
    const key = e.currentTarget.dataset.key;
    if (!key) return;
    if (triesLeft) setGuessedLetters(guessedLetters.concat(key));
  }

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      if (!e.repeat) {
        const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
        const letterIsRepetitive = lastGuessedLetter === e.key.toUpperCase();
        if (triesLeft && !won && !letterIsRepetitive) {
          const currentButton =
            keyboard.current?.querySelector<HTMLButtonElement>(
              `button[data-key="${e.key.toUpperCase()}"]`
            );

          currentButton?.click();
          currentButton?.style.setProperty("animation", "clicked 0.5s ease");
        }
      }
    };
    document.addEventListener("keypress", keyPressHandler);
    return () => document.removeEventListener("keypress", keyPressHandler);
  }, [guessedLetters]);
  return (
    <div className="keyboard" ref={keyboard}>
      {KEYS.map((key) => (
        <button
          key={key.toLowerCase()}
          data-key={key}
          onClick={(e) => handleKey(e)}
          style={
            !triesLeft || guessedLetters.includes(key) || won
              ? { pointerEvents: "none", opacity: 0.6 }
              : {}
          }
        >
          {key}
        </button>
      ))}
    </div>
  );
}
