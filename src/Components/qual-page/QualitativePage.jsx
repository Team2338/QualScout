import React, { useState } from "react";
import { Button, MenuItem, Select, Popover, FormControl, InputLabel, TextField, Typography } from "@mui/material";
import { sendNotes } from "../../app/Actions";
import { useAppDispatch } from "../../app/Hooks";
import {styled} from "@mui/material/styles";



export default function QualitativePage({ addToArray }) {
    const menuItems = [ 
        "Select Category...", 
        "Auto", 
        "Collection", 
        "Shooting Position",
        "Shooting Consistency",
        "Path", 
        "Defense", 
        "Climbing" , 
        "Human Player" , 
        "Penalties",
        "Drivers"]
        
       const [buttonText, setButtonText] = useState(menuItems[0]);
       const helpItems = [
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
        "Note how the driver plays i.e. their experience and preferences."
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
        width: '98%', 
        marginBottom: '16px',
        }
      const CustomTextField = styled(TextField)({
       '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#BABFB7'
        },
        '&:hover fieldset': {
          borderColor: 'white'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#FE5000'
        },
       }, 
      })
       return ( 
        <div className="background">   
        <FormControl fullWidth>
          <InputLabel id='selectlabel' style={{color:'#ff5000', marginLeft:'auto'}}>
            <Typography variant="subtitle1" style={{margin: '6px 0'}}>{menuItems[0]}</Typography>
          </InputLabel>
          <Select
          style={{width: TextFieldStyle.width, marginLeft: 'auto', marginRight: 'auto'}}
          labelId="select-label"
          id="select"
          value={buttonText}
          onChange={handleOptionChange}
          renderValue={(value) => value}>
            {menuItems.map((option, index) => (
              <MenuItem key={index} value={option} style={{color: 'black'}}>
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
          
          <CustomTextField 
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
    
    
          <div>
          </div>
        </div>
       )
}



