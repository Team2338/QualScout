import React from "react";
import CategoryInput from "./CategoryInput";
import TextBox from "./TextBox";
import { Button } from "@mui/material";


function QualitativePage() {
    return (
        <>
        <CategoryInput /> 
        <TextBox />
        <Button variant="contained">Submit Notes</Button>
        
        </>
    )
}
export default QualitativePage;


