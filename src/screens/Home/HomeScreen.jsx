import React, { useContext, useEffect } from 'react'
import styles from  "./homeScreen.module.scss"
import AppBar from '../../components/AppBar'
import { Box, Typography } from '@mui/material'
import ChatItem from '../../components/ChatItem'
import { ChatList } from '../../data/chatList'
import { AuthContext } from '../../context/AuthContext'
import {auth} from "../../firebase"

const HomeScreen = () => {
  const { user,setUser } = useContext(AuthContext);
  
  return (
    <div className={styles.container}>
        <AppBar isRightShown={true} />
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