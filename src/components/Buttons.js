import React, {useState, useContext, useEffect} from "react";
import DisplayContext from "../contexts/DisplayContext"

export default function Buttons() {
    const {displayText, setDisplayText} = useContext(DisplayContext)
    const [buttonState, setButtonState] = useState({
        b1: {clicked: false, value: "mak-"},
        b2: {clicked: false, value: "-esu"},
        b3: {clicked: false, value: "-rey"},
        b4: {clicked: false, value: "tak-"},
        b5: {clicked: false, value: "eab-"},
        b6: {clicked: false, value: "rea-"},
        b7: {clicked: false, value: "k!-"}
    })

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
        console.log(buttonState)
    }

    return(
        <div className="button-container">
            <button className={buttonState.b1.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b1")}>🦓</button>
            <button className={buttonState.b2.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b2")}>💸</button>
            <button className={buttonState.b3.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b3")}>🚒</button>
            <button className={buttonState.b4.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b4")}>🍊</button>
            <button className={buttonState.b5.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b5")}>🌊</button>
            <button className={buttonState.b6.clicked ? "activebutton" : "button"} onClick={_ => toggleButton("b6")}>🌟</button>
            <button className={buttonState.b7.clicked ? "activebutton" : "button"}onClick={_ => toggleButton("b7")}>🥩</button>
        </div>
    )

}