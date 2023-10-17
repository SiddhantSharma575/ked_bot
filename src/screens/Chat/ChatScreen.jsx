import React, { useState } from 'react'
import AppBar from '../../components/AppBar'
import { Box, IconButton, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import SingleChat from '../../components/SingleChat';
import { Chats } from '../../data/chats';

const ChatScreen = () => {
  const [productList,setProductList] = useState()


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
          {
            Chats.map((chat) => (
              <SingleChat key={chat.id} text={chat.text} isSender={chat.isSender} productList={chat.productList} />
            ))
          }
        </div>
        <Box zIndex={9999} marginLeft={5} marginTop={3} marginRight={3}>
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