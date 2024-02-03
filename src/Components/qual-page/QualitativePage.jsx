import React, { useState } from "react";
import { Button, MenuItem, Select, Popover, FormControl, InputLabel, TextField, Typography } from "@mui/material";
import { sendNotes } from "../../app/Actions";
import { useDispatch } from "react-redux";



export default function QualitativePage() {
    const MenuItems = [ 
        "Select Category...", 
        "Auto", 
        "Collection", 
        "Shooting Position",
        "Shooting Consistency",
        "Path", 
        "Defense", 
        "Climbing" , 
        "Human Player" , 
        "Penalties",]
       const [buttonText, setButtonText] = useState(MenuItems[0]);
       const HelpItems = [
        "Select the category you would like to write your notes on above. ",
        "Note what the bot does during auto. Include starting position, path, scores, and possible A-STOPS. ",
        "Note how the bot collects. Examples: Floor intake, direct into robot, etc.",
        "Note where the bot likes to shoot towards the speaker and amp.",
        "Note how consistent the bot is shooting. Do they miss many shots?",
        "Note how the robot travels across the field, especially if they are able to travel under the chain.",
        "Note how the bot plays defense and its effectiveness (if applicable). Also note how the bot responds to defense and its effectiveness.",
        "Note how the robot climbs the chain. What mechanism do they use, and is it very sturdy? Can they climb with other bots on the same chain?" ,
        "Note how the team plays the human player. Where are they stationed? What do the do?  " ,
        "Note when and how the bot obtained any penalties. ",
      ]  
      const dispatch = useDispatch(); //TODO write dispatch function 
      const [helpText, setHelpText] = useState(HelpItems[0])
    
      const [text, setText] = useState('')
    
      const [submittedText, setSubmittedText] = useState([])
    

      const handleText = (event) => {
        setText(event.target.value)
      }
    
       const handleOptionChange = (event) => {
        const value = event.target.value;
        const index = MenuItems.indexOf(value);
        setButtonText(value)
          setHelpText(HelpItems[index])
      
      };
      
      const Submit = (event) => {
        event.preventDefault()
        if (text.trim() !== '' && buttonText.trim() !== MenuItems[0]) {
        const submittedText = { text, buttonText }
        dispatch(sendNotes(buttonText, text))
        setSubmittedText((oldText) => [...oldText, submittedText])
        setText('')
        setButtonText(MenuItems[0])
        
        }
        else {
            console.log("please don't leave this empty :( -the dev")
        }
        
        }
      
      const [Open, setOpen] = useState(false);
        const [anchorEl, setAnchorEl] = useState(null);
    
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
            setOpen(true);
        };
        const handleClose = () => {
            setAnchorEl(null);
            setOpen(false);
        };
      const TextFieldStyle = {
        width: '100%', 
        marginBottom: '16px',
    }
    
       return ( 
        <div className="background">   
        <FormControl fullWidth>
          <InputLabel id='select label' style={{color:'#ff5000'}}>
            <Typography variant="subtitle1" style={{margin: '6px 0'}}>{MenuItems[0]}</Typography>
          </InputLabel>
          <Select
          labelId="select-label"
          id="select"
          value={buttonText}
          onChange={handleOptionChange}
          renderValue={(value) => value}>
            {MenuItems.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={handleClick}>
                    ?
                </Button>
                <Popover
                    open={Open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    PaperProps={{
                        style: {
                            color: '#FF5000',
                            backgroundColor: '#01233D',
                            padding: '2px'
                        }
                    }}
                >
                    {helpText}
                </Popover>
          
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
        <Button type='submit' variant='contained' onClick={Submit}>Submit Notes</Button>
    
    
          <div>
            <h1 className="title">Submitted Notes</h1>
            <ul>
              {submittedText.map((notes, index) => (
                <li key={index}>
                  <strong>{notes.buttonText}:</strong> {notes.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
       )
}



