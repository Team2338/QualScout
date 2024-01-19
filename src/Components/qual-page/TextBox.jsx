import React, { useState } from "react";
import { TextField } from "@mui/material";


function TextBox() {
    const [autoText, setAutoText] = useState('')
    const [collectionText, setCollectionText] = useState('')
    const [shootPosText, setShootPosText] = useState('')
    const [shootConsText, setshootConsText] = useState('')
    const [pathText, setPathText] = useState('')
    const [defenseText, setDefenseText] = useState('')
    const [climbingText, setClimbingText] = useState('')
    const [HPText, setHPText] = useState('')
    const [penaltiesText, setPenaltiesText]  = useState('')
    const TextFieldStyle = {
        width: '100%', 
        marginBottom: '16px',
    }
    return (
        <>
        <TextField 
        label="Enter your text here..."
        multiline
        rows={10}
        variant="outlined"
        style={TextFieldStyle}
        InputLabelProps={{
            style: {
                color: '#ff5000',
            }
        }}
        />

        </>
    )
}

export default TextBox; 