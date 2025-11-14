import { useState, useEffect } from "react";
import words from "./wordlist.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { HangmanKeyboard } from "./HangmanKeyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(
    words[Math.floor(Math.random() * words.length)].toUpperCase()
  );

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [triesLeft, setTriesLeft] = useState<number>(6);
  const [won, setWon] = useState<boolean>(false);

  function checkIfWon(): void {
    if (
      wordToGuess.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      setWon(true);
    }
  }

  function revealAnswer(): void {
    const lettersOnBoard = document.querySelectorAll<HTMLSpanElement>(
      ".letter > span > span"
    );
    lettersOnBoard.forEach(
      (letterDOM) => (letterDOM.style.visibility = "visible")
    );
  }

  function showResult(won: boolean): string {
    if (triesLeft === 0) {
      revealAnswer();
      return "Nice Try! Refresh page to try again.";
    }

    if (won) return "Good job! you saved the man. Refresh to play again.";
    else return "Save the man from hanging";
  }

  useEffect(() => {
    checkIfWon();
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
    if (lastGuessedLetter && !wordToGuess.split("").includes(lastGuessedLetter))
      setTriesLeft(triesLeft - 1);
  }, [guessedLetters]);

  return (
    <main>
      <div className="lose-win-text">{showResult(won)}</div>
      <HangmanDrawing triesLeft={triesLeft} />
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        won={won}
      />
      <HangmanKeyboard
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        triesLeft={triesLeft}
        won={won}
      />
    </main>
  );
}

export default App;
