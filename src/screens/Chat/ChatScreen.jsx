import React, { useState } from 'react'
import AppBar from '../../components/AppBar'
import { Box, IconButton, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import SingleChat from '../../components/SingleChat';

const ChatScreen = () => {
  const [productList,setProductList] = useState([
    {
      id : "AD1023-12",
      title : "White Super fine",
      img : "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
    },
    {
      id : "AD1023-12",
      title : "White Super fine",
      img : "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
    },
    {
      id : "AD1023-12",
      title : "White Super fine",
      img : "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
    },
  ])

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
          <SingleChat isSender={false} text={"Hello there! How may I assist you today? To get started,please provide the ProductI ID you'd like information about"} />
          <SingleChat isSender={true} text={"Hi, I am fine"} />
          <SingleChat isSender={false} productList={productList} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
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