import React, { useMemo, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import Spider from "../components/Spider/Spider";


const MAX_INCORRECT = 8;

type PlayContainerProps = {
    text ?: string;
};

function PlayContainer({text} : PlayContainerProps){

    const history = useNavigate();

    useEffect( () => {
        if(!text){
            history('/start');
        }
    }, [history,text]);

    const [usedLetters, setUsedLetters] = useState<string[]>([]);

    const textLetters = useMemo(
        () => ( (text || '')
                            .split('')
                            .reduce(
                                (obj,letter) => ({...obj, [letter] : true}),
                                {} as { [letter :string] :boolean}
                            )),
            [text]
        );

    const [correctCount, incorrectCount] = useMemo(
        () => usedLetters.reduce(
            ([correct,incorrect],letter) => {
                return textLetters[letter] ? [correct + 1,incorrect] : [correct,incorrect+1];
            },[0,0])
        ,
        [textLetters,usedLetters]
    )

    const handleClick = (letter: string | undefined) => {
        if(letter){
            setUsedLetters( previous => [...previous , letter]);
        } 
    };

    const looser = incorrectCount === MAX_INCORRECT;
    const winner = correctCount === Object.keys(textLetters).length;

    return (
        <><div className="App container mx-auto">
            {
                winner && (<div className="p-6 bg-blue-200 border border-blue-500 rounded-md">
                    Congratulations! You won!{' '}
                    <span role="img" aria-label="smiley emoji">
                        😁
                    </span>
                </div>)
            }
            {looser && (<div className="p-6 bg-red-200 border border-red-500 rounded-md">
                    Sorry. You lost.{' '}
                    <span role="img" aria-label="sad emoji">
                        😢
                    </span>
            </div>)
            }
            <div className="mb-6 py-4 border-b border-gray-500 text-center">
                <MaskedText text={text}
                usedLetters={usedLetters}
                />
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <Spider step={incorrectCount} />
                <LetterButtons
                    onClick={handleClick}
                    text={text}
                    usedLetters={usedLetters}
                />
            </div>
            </div>
        </>
    );
}

export default PlayContainer;