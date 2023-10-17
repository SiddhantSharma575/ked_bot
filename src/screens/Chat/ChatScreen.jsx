import React from 'react'
import AppBar from '../../components/AppBar'
import { Box, IconButton, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const ChatScreen = () => {
  return (
    <div className='container'>
      <AppBar isRightShown={false} />
      <div style={{
        margin: 'auto',
        width: '50%',
        height: '80vh',
        backgroundColor: '#fff',
        marginTop: '2rem',
      }}>
        <div style={{
          height : '65vh',
          overflowY : 'scroll'
        }}>
           
        </div>
        <Box zIndex={9999} marginLeft={5} position={'absolute'} width={'45%'} bottom={55}>
        <TextField
          // label="Email"
          placeholder='Type a Message'
          variant="outlined"
          // value={email}
          fullWidth
          // onChange={handleEmailChange}
          margin="normal"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SendIcon />
              </IconButton>
            ),
          }}
          // error={emailError}
          // helperText={emailError ? 'enter a valid email address' : ''}
        />
        </Box>
      </div>
    </div>
  )
}

export default ChatScreen