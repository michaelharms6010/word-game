import React, {useState, useContext, useEffect} from "react";
import DisplayContext from "../contexts/DisplayContext"
import puzzles from "./data.js"
let level = 0;

export default function Buttons() {
    const {displayText, setDisplayText} = useContext(DisplayContext)
    const [buttonState, setButtonState] = useState(puzzles[0])
    

    const [winMessage, setWinMessage] = useState("")

    useEffect( _ => {
        if (displayText=== buttonState.solution) {
            setWinMessage("Nice job!")
            setTimeout(_ =>{
                level += 1
                setDisplayText("")
                if (level <= puzzles.length-1) {
                    setButtonState(puzzles[level])
                } else {
                    setWinMessage("You solved 'em all!")
                setDisplayText("🌟wooooooooooo🌟")
                }
            }, 3000)
        } else if (level <= puzzles.length-1) {
            setWinMessage("")
        }
    }, [displayText])

    const toggleButton = button => {
        setButtonState({...buttonState, [button]: {...buttonState[button], clicked: !buttonState[button].clicked}})
        if (buttonState[button].clicked) {
            setDisplayText(displayText.replace(buttonState[button].value.replace('-', ""), ""))
        } else {
            if (buttonState[button].value.slice(0,1) === "-") {
                setDisplayText(displayText + buttonState[button].value.substr(1))
            } else {
                setDisplayText(buttonState[button].value.slice(0, -1) + displayText)
            }
        }
    }

    return(
        <>
        <div className="button-container">
            <button className={buttonState.b1.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b1")}>🦓</button>
            <button className={buttonState.b2.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b2")}>💸</button>
            <button className={buttonState.b3.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b3")}>🚒</button>
            <button className={buttonState.b4.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b4")}>🍊</button>
            <button className={buttonState.b5.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b5")}>🌊</button>
            <button className={buttonState.b6.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b6")}>🌟</button>
            <button className={buttonState.b7.clicked ? "activebutton" : "button"}onClick={_ => toggleButton("b7")}>🥩</button>
        </div>
        {winMessage ? <h1 className="victory-message">{winMessage}</h1> : null}
        </>
    )

}