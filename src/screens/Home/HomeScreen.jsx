import React, { useContext, useEffect, useState } from 'react'
import styles from  "./homeScreen.module.scss"
import AppBar from '../../components/AppBar'
import { Box, Typography } from '@mui/material'
import ChatItem from '../../components/ChatItem'
import { ChatList } from '../../data/chatList'
import { AuthContext } from '../../context/AuthContext'
import {auth, db} from "../../firebase"
import { collection, getDocs } from 'firebase/firestore'

const HomeScreen = () => {
  const { user,setUser } = useContext(AuthContext);
  const [chatList,setChatList] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const homeChats = []
    const querySnapshot = await getDocs(collection(db, "chats"));
    querySnapshot.forEach((doc) => {
      if(doc.data()?.uid  === auth.currentUser?.uid) {
        const newChat = {
          id : doc.data().id,
          recentChat  : doc.data().recentChat,
          timestamps : doc.data().timestamps,
          uid : doc.data().uid,
          allChats : doc.data().allChats
        }
        homeChats.push(newChat)
      }
    })
    console.log("hoom----->", homeChats)
    setChatList(homeChats)
  }

  return (
    <div className={styles.container}>
        <AppBar isRightShown={true} />
        <Box width={'50%'} margin={'auto'}>
          <Typography mt={'15px'} fontSize={'18px'} component={'h1'} fontWeight={'bold'}>Recent Chats</Typography>
        </Box>
        <Box width={'50%'} margin={'auto'}>
            {
              chatList.map((chat) => (
                <ChatItem chat={chat} />
              ))
            }
        </Box>
    </div>
  )
}

export default HomeScreen