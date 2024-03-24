import React, { useEffect, useState } from "react";
import { Button, MenuItem, Select, Popover, FormControl, InputLabel, TextField, Typography } from "@mui/material";
import { sendNotes } from "../../app/Actions";
import { useAppDispatch } from "../../app/Hooks";


export default function QualitativePage({ addToArray }) {
    const menuItems = [ 
        "Select Category...", 
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
       const helpItems = [
        "Select the category you would like to write your notes on above. ",
        "Note what the bot does during auto. Include starting position, path, scores, and possible A-STOPS. ",
        "Note how the bot collects. Examples: Floor intake, direct into robot, etc.",
        "Note the robot's preferences and consistency when shooting into the speaker.",
        "Note the robot's preferences and consistency when delivering to the amp.",
        "Note how the robot travels across the field, especially if they are able to travel under the chain.",
        "Note how the bot plays defense and its effectiveness (if applicable). Also note how the bot responds to defense and its effectiveness.",
        "Note how the robot climbs the chain. What mechanism do they use, and is it very sturdy? Can they climb with other bots on the same chain?" ,
        "Note how the team plays the human player. Where are they stationed? What do the do?  " ,
        "Note when and how the bot obtained any penalties. ",
        "Note how the driver plays i.e. their experience and preferences.",
        "Note any other things about the robot not listed in the categories i.e. breakage, comm issues, etc. If your team would like to note something else, also use this category."
      ]  
      const dispatch = useAppDispatch();  
      const [helpText, setHelpText] = useState(helpItems[0])
    
      const [text, setText] = useState('')
     
    

      const handleText = (event) => {
        setText(event.target.value)
      }
    
       const handleOptionChange = (event) => {
        const value = event.target.value;
        const index = menuItems.indexOf(value);
        setButtonText(value)
          setHelpText(helpItems[index])

      };

      
      
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
      
      const [open, setOpen] = useState(false);
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


        function NoteStatus() {
          const red = '#EE4444';
          const green = '#75FA61';
          // if menu item has text attributed to it (i.e. text to button text,) display green. Otherwise, display red. Repeat for all buttons
          // can i check the appstate from here? If so, use that for the attribution 
          // clicking the button will load the text back into the text box
          // esentially, the best idea is to access and mutate the appstate directly, but I don't know if that is easily possible
          
          return (
            <div>
              {menuItems.map((option, index) => (
              <Button key={index} value={option} variant="contained">
                {option}
              </Button>
            ))}
          
            </div>
          )
          
        }
       return ( 
        <div className="background">   
        <FormControl fullWidth>
          <InputLabel id='selectlabel' style={{color:'#ff5000'}}>
            <Typography variant="subtitle1" style={{margin: '6px 0'}}>{menuItems[0]}</Typography>
          </InputLabel>
          <Select
          labelId="select-label"
          id="select"
          value={buttonText}
          onChange={handleOptionChange}
          renderValue={(value) => value}>
            {menuItems.map((option, index) => (
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
                    open={open}
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
        <div className="grid">
          <NoteStatus />
        </div>    
           
        <Button type='submit' variant='contained' onClick={submit}>Submit Note</Button>
            
            
         
        </div>
       )
}



