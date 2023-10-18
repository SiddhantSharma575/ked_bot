import React, { useEffect, useState } from 'react'
import AppBar from '../../components/AppBar'
import { Box, IconButton, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import SingleChat from '../../components/SingleChat';
import { Chats } from '../../data/chats';
import styles from "./chatScreen.module.scss"
import { useParams } from 'react-router-dom';
import { query,  collection, where, getDocs, updateDoc, arrayUnion, doc } from 'firebase/firestore';
import { db } from '../../firebase';

const ChatScreen = () => {
  const [chat, setChat] = useState("")
  const [chats, setChats] = useState([])
  const params = useParams()
  console.log("Params" , params.id)

  const fetchChats = async () => {
    const q = query(collection(db,"chats"), where("id" , "==", params.id));
    const querySanpsots = await getDocs(q)
    querySanpsots.forEach((doc) => {
      setChats(doc.data().allChats)
    })
  }

  useEffect(() => {
    fetchChats()
  }, [])

  const handleSend = () => {
       sendChat()
    // let item = {
    //   id: Chats.length + 1,
    //   text: chat,
    //   isSender: true,
    //   productList: []
    // }
    // setChats([...chats, item])
    // setChat("")
  }

  const sendChat = async () => {
    const chatCollectionRef =  collection(db, "chats");
    const q = query(collection(db,"chats"), where("id" , "==", params.id));
    const docs = await getDocs(q);
    docs.forEach((docum) => {
      const data = docum.data();
      // const newArray = [...data.allChats]
      // newArray.push({
      //   id: docs.length+1,
      //   text: chat,
      //   isSender: true,
      //   productList: []
      // })
      const docRef = doc(db, "chats", docum.id);

      updateDoc(docRef, {
        allChats : arrayUnion({
          id: docum.data().allChats.length+1,
          text: chat,
          isSender: true,
          productList: []
        })
      }).then(() => console.log("Message send succesfully"))
      .catch((error) => console.log(error))
    })
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