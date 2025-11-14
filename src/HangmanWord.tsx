type Props = {
  wordToGuess: string;
  guessedLetters: string[];
  won: boolean;
};

export function HangmanWord({ wordToGuess, guessedLetters, won }: Props) {
  return (
    <div className="word">
      {wordToGuess.split("").map((letter: string, i: number) => {
        return (
          <div key={i} className="letter">
            <span
              style={{
                borderBottom: "0.1em solid white",
                width: "2rem",
              }}
            >
              <span
                style={
                  guessedLetters.includes(letter)
                    ? {
                        visibility: "visible",
                        color: won ? "lightgreen" : "white",
                      }
                    : {
                        visibility: "hidden",
                        color: "tomato",
                      }
                }
              >
                {letter}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
