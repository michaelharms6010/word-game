import React, {useState, useContext, useEffect} from "react";
import DisplayContext from "../contexts/DisplayContext"

export default function Buttons() {
    const {displayText, setDisplayText} = useContext(DisplayContext)
    const [buttonState, setButtonState] = useState({
        b1: {clicked: false, value: "ita-"},
        b2: {clicked: false, value: "-nos"},
        b3: false,
        b4: false,
        b5: false,
        b6: false,
        b7: false
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
            <button onClick={_ => toggleButton("b1")}>🦓</button>
            <button onClick={_ => toggleButton("b2")}>💸</button>
            <button>🚒</button>
            <button>🍊</button>
            <button>🌊</button>
            <button>🌟</button>
            <button>🥩</button>
        </div>
    )

}