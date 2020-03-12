import React from "react";
import DisplayContext from "../contexts/DisplayContext"

export default function Display() {
    const {displayText, setDisplayText} = React.useContext(DisplayContext)

    return(
        <h1>{displayText}</h1>
    )

}