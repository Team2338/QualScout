import React from "react";
import { TextField } from "@mui/material";


function TextBox() {
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
        />

        </>
    )
}

export default TextBox; 