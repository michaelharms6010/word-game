import React from "react";
import DisplayContext from "../contexts/DisplayContext"

export default function Display() {
    const {displayText, setDisplayText} = React.useContext(DisplayContext)

    const spaceBreaker = str => {
        return str.slice(0,4) + " " + str.slice(4, 8) + " " + str.slice(8, 11)
    }

    return(
        <div className="display">
            <h1>{displayText}</h1>
        </div>
    )

}