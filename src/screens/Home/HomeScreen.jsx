import React from 'react'
import './homeScreen.scss'
import AppBar from '../../components/AppBar'
import { Box, Typography } from '@mui/material'
import ChatItem from '../../components/ChatItem'
import { ChatList } from '../../data/chatList'

const HomeScreen = () => {
  return (
    <div className='container'>
        <AppBar />
        <Box width={'50%'} margin={'auto'}>
          <Typography mt={'15px'} fontSize={'18px'} component={'h1'} fontWeight={'bold'}>Recent Chats</Typography>
        </Box>
        <Box width={'50%'} margin={'auto'}>
            {
              ChatList.map((chat) => (
                <ChatItem chat={chat} />
              ))
            }
        </Box>
    </div>
  )
}

export default HomeScreen