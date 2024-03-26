import React, { useEffect, useState } from "react";
import { Button, MenuItem, Select, Popover, FormControl, InputLabel, TextField, Typography } from "@mui/material";
import { sendNotes } from "../../app/Actions";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";


export default function QualitativePage({ addToArray }) {
    const menuItems = [ 
        "None Selected", 
        "Auto", 
        "Collection", 
        "Shooting",
        "Amp",
        "Path", 
        "Defense", 
        "Endgame", 
        "Human Player", 
        "Penalties",
        "Drivers",
        "Other"]
        
       const [buttonText, setButtonText] = useState(menuItems[0]);
       
      const dispatch = useAppDispatch();  
      
    
      const [text, setText] = useState('')
     
    

      const handleText = (event) => {
        setText(event.target.value)
      }
    

      
      
      const submit = (event) => {
        event.preventDefault()
        if (text.trim() !== '' && buttonText.trim() !== menuItems[0]) {

            dispatch(sendNotes(buttonText, text))
            const submittedText = { text, buttonText }
            addToArray(submittedText)
            setText('')
            setButtonText(menuItems[0])
        
        }
        else {
            console.log("please don't leave this empty :( -the dev")
        }
        
        }
      
      const TextFieldStyle = {
        width: '100%', 
        marginBottom: '16px',
        }
        const auto = useAppSelector(state => state.notes.auto);
          const collection = useAppSelector(state => state.notes.collection);
          const shooting = useAppSelector(state => state.notes.shooting);
          const amp = useAppSelector(state => state.notes.amp);
          const path = useAppSelector(state => state.notes.path);
          const defense = useAppSelector(state => state.notes.defense);
          const endgame = useAppSelector(state => state.notes.endgame);
          const humanPlayer = useAppSelector(state => state.notes.humanPlayer);
          const penalties = useAppSelector(state => state.notes.penalties);
          const drivers = useAppSelector(state => state.notes.drivers);
          const other = useAppSelector(state => state.notes.other);

        function NoteStatus() {
          const handleAutoButton = () => {
            setText(auto);
            setButtonText(menuItems[1])
          }
          const handleCollectionButton = () => {
            setText(collection);
            setButtonText(menuItems[2])
          }
          const handleShootingButton = () => {
            setText(shooting);
            setButtonText(menuItems[3])
          }
          const handleAmpButton = () => {
            setText(amp);
            setButtonText(menuItems[4])
          }
          const handlePathButton = () => {
            setText(path);
            setButtonText(menuItems[5])
          }
          const handleDefenseButton = () => {
            setText(defense);
            setButtonText(menuItems[6])
          }
          const handleEndgameButton = () => {
            setText(endgame);
            setButtonText(menuItems[7])
          }
          const handleHumanPlayerButton = () => {
            setText(humanPlayer);
            setButtonText(menuItems[8])
          }
          const handlePenaltiesButton = () => {
            setText(penalties);
            setButtonText(menuItems[9])
          }
          const handleDriversButton = () => {
            setText(drivers);
            setButtonText(menuItems[10])
          }
          const handleOtherButton = () => {
            setText(other);
            setButtonText(menuItems[11])
          }
          return (
            <div className="grid">
              <Button variant='contained' onClick={handleAutoButton}> Auto </Button>
              <Button variant='contained' onClick={handleCollectionButton}> Collection </Button>
              <Button variant='contained' onClick={handleShootingButton}> Shooting </Button>
              <Button variant='contained' onClick={handleAmpButton}> Amp </Button>
              <Button variant='contained' onClick={handlePathButton}> Path </Button>
              <Button variant='contained' onClick={handleDefenseButton}> Defense </Button>
              <Button variant='contained' onClick={handleEndgameButton}> Endgame </Button>
              <Button variant='contained' onClick={handleHumanPlayerButton}> Human Player </Button>
              <Button variant='contained' onClick={handlePenaltiesButton}> Penalties </Button>
              <Button variant='contained' onClick={handleDriversButton}> Drivers </Button>
              <Button variant='contained' onClick={handleOtherButton}> Other </Button>
          
            </div>
          )
          
        }
       return ( 
        <div className="background">   
          <div>
            <NoteStatus />
          </div>

         <p><strong>Selected Category:</strong> {buttonText}</p>
    
          <div>
          </div>
          <TextField 
            label="Enter your text here..."
            value={text}
            onChange={handleText}
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
           
        <Button type='submit' variant='contained' onClick={submit}>Submit Note</Button>
               
        <h1>Submitted Notes but BETTER</h1>
        <ul className="list">
            <li><strong>Auto:</strong> {auto}</li>
            <li><strong>Collection:</strong> {collection}</li>
            <li><strong>Shooting:</strong> {shooting}</li>
            <li><strong>Amp:</strong> {amp}</li>
            <li><strong>Path:</strong> {path}</li>
            <li><strong>Defense:</strong> {defense}</li>
            <li><strong>Endgame:</strong> {endgame}</li>
            <li><strong>Human Player:</strong> {humanPlayer}</li>
            <li><strong>Penalties:</strong> {penalties}</li>
            <li><strong>Drivers:</strong> {drivers}</li>
            <li><strong>Other:</strong> {other}</li>
        </ul>
        </div>
       )
}



