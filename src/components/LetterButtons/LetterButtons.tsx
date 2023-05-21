import React, {SyntheticEvent, useMemo} from "react";

const ALPHABET = new Array(26)
                     .fill('')
                     .map((_, index) => String.fromCharCode(65 + index));

type LetterButtonProps = {
    text ?: string;
    usedLetters ?: string[];
    onClick ?: (letter?: string | undefined) => void;
}

function LetterButtons({text,usedLetters,onClick}: LetterButtonProps){

    const handleClick = (e: SyntheticEvent) => {
        const character = (e.target as any).value;
        onClick?.(character);
    };

    const letters = useMemo(
        () => getLettersMap((text || '').toUpperCase().split('')),
        [text]
    );

    const selectedLetters = useMemo(
        () => getLettersMap(usedLetters),
        [usedLetters]
    );

    const buttons = ALPHABET.map(
        letter => (
            <button
                key={letter}
                className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white border${selectedLetters[letter] && !letters[letter]
                ? ' bg-red bg-red-600 border-red-700 hover:bg-red-700 hover:border-red-800'
                : ' bg-black bg-black-600 border-black-700 hover:bg-black-700 hover:border-black-800'
                }${
                    selectedLetters[letter] ? ' opacity-25 cursor-not-allowed' : ''
                }`}
                value={letter}
                onClick={handleClick}
                disabled={!!selectedLetters[letter]}
            >
                {letter}
            </button>
        )
    );

    return <div className="LetterButtons">{buttons}</div>

}

export default LetterButtons;

function getLettersMap(letters: string[] = []){
    return letters.reduce(
        (obj,letter) => ({...obj, [letter] : true}),
        {} as {[key : string] : boolean}
    )
}