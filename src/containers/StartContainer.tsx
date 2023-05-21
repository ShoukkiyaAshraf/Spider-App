import React from "react";
import TextInputForm, { TextInptFromProps } from "../components/TextInputForm/TextInptFrom";

function StartContainer(props: TextInptFromProps){
    return(
        <>
        <div className="start-body">
            <p className="mb-2  start-head">
                Enter a word or phrase for other players to guess.
            </p>
            <TextInputForm {...props} />
        </div>
         <div className="word-background"></div>
         </>
    );
}

export default StartContainer;