import React, {useState} from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import DisplayContext from "../contexts/DisplayContext"

export default function Game () {
    const [displayText, setDisplayText] = useState("")

    return(
        <DisplayContext.Provider value={{displayText, setDisplayText}}>
            <div className="game">
                <Display />
                <Buttons />
            </div>
        </DisplayContext.Provider>
    )

}