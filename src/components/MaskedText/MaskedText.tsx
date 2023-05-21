import React, { useMemo } from "react";

type MaskedTextProps = {
    text?: string;
    usedLetters?: string[];
};

function MaskedText({text,usedLetters} : MaskedTextProps){
    const words = useMemo(() => getCharacters(text, usedLetters).split(' '), [text, usedLetters]);
    const parts = words
                      .map((part,index) => {
                        const letters = part.split('').map((letter,i) => (
                            <span 
                                key={`Letter-${i}`} 
                                className="inline-block my-0 ml-0 mr-2">
                                    {letter}
                            </span>
                        ));
                        return (
                            <span
                                key={`Word-${index}`}
                                className="whitespace-no-wrap"
                            >
                                {letters}
                            </span>
                        );
                      })
                      .reduce(
                        (arr, part, index) => [
                            ...arr,
                            part,
                            <span key={`Space-${index}`}>&nbsp;</span>
                        ],
                        [] as JSX.Element[]
                        )
                        .slice(0,1);
        return parts.length ? (
            <div className="MaskedText text-4xl md:text-6xl">{parts}</div>
        ) : null;


}

export default MaskedText;

export function getCharacters(word : string = '', letters : string[] = []){

    // word = text to be find; letters = guessed letters;
    // convert the array to object to map for better lookup

    const usedLetters = letters.reduce(
        (obj,letter) => ({...obj, [letter]: true}),
        {} as {[key: string] : boolean}
    );

    const characters = word
                        .toUpperCase()
                        .split('')
                        .map(letter => {
                            const code = letter.charCodeAt(0);
                            // check if it is A-Z
                            if( code >= 65 && code <= 90){
                                return usedLetters[letter] ? letter : '_';
                            }
                            return letter;
                        });
                    return characters.join('');
}