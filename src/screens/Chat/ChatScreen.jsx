import React, { useState } from 'react'
import AppBar from '../../components/AppBar'
import { Box, IconButton, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import SingleChat from '../../components/SingleChat';
import { Chats } from '../../data/chats';
import styles from "./chatScreen.module.scss"

const ChatScreen = () => {
  const [chat, setChat] = useState("")
  const [chats, setChats] = useState(Chats)

  const handleSend = () => {
    let item = {
      id: Chats.length + 1,
      text: chat,
      isSender: true,
      productList: []
    }
    setChats([...chats, item])
    setChat("")
  }
  return (
    <div className={styles.container}>
      <AppBar isRightShown={false} />
      <div className={styles.inner_container}>
        <div className={styles.chat_container}>
          {
            chats.map((chat) => (
              <SingleChat key={chat.id} text={chat.text} isSender={chat.isSender} productList={chat.productList} />
            ))
          }
        </div>
        <Box zIndex={9999} marginLeft={5} marginTop={3} marginRight={3}>
          <TextField
            // label="Email"
            placeholder='Type a Message'
            variant="outlined"
            value={chat}
            fullWidth
            onChange={(e) => setChat(e.target.value)}
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleSend}>
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