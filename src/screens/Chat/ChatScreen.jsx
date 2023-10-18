import React, { useEffect, useRef, useState } from 'react'
import AppBar from '../../components/AppBar'
import { Box, IconButton, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import SingleChat from '../../components/SingleChat';
import { Chats } from '../../data/chats';
import styles from "./chatScreen.module.scss"
import { useParams } from 'react-router-dom';
import { query, collection, where, getDocs, updateDoc, arrayUnion, doc, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { productIds } from '../../data/productCard';

const ChatScreen = () => {
  const [chat, setChat] = useState("")
  const [chats, setChats] = useState([])
  const params = useParams()
  console.log("Params", params.id)
  const containerRef = useRef(null)

  // const fetchChats = async () => {
  //   const q = query(collection(db, "chats"), where("id", "==", params.id));
  //   const querySanpsots = await getDocs(q)
  //   querySanpsots.forEach((doc) => {
  //     setChats(doc.data().allChats)
  //   })
  // }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  }, [chats])

  useEffect(() => {
    const chatsRef = collection(db, 'chats');

    const unsubscribe = onSnapshot(chatsRef, (querySnapshot) => {
      ;
      querySnapshot.forEach((doc) => {
        if (doc.data().id === params.id) {
          console.log("hello", doc.data().allChats)
          setChats(doc.data().allChats)
        }
      });
    });
    if (containerRef.current) {
      containerRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }

    // This unsubscribe function is important to prevent memory leaks.
    return () => unsubscribe();
    // fetchChats()
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

  }
  function stringContainsAnyElement(string, array) {
    for (const element of array) {
      if (string.includes(element)) {
        return element;
      }
    }
    return false;
  }

  const sendAutomatedMesssage = async (chat) => {
    let res = stringContainsAnyElement(chat, productIds);
    if (res.length > 0) {
      let selectedProductList = []
      const q1  =  query(collection(db, "productList"), where("id", "==", res));
      const productDos = await getDocs(q1);
      productDos.forEach((docum) => {
        selectedProductList.push(docum.data())
      })
      const q = query(collection(db, "chats"), where("id", "==", params.id));
      const docs = await getDocs(q);
      docs.forEach((docum) => {
        const docRef = doc(db, "chats", docum.id);
        updateDoc(docRef, {
          allChats: arrayUnion({
            id: docum.data().allChats.length + 1,
            text: "Certainly! Here are all the matching products that matches your criteria",
            isSender: false,
            productList: selectedProductList
          }),
          recentChat: "Certainly! Here are all the matching products that matches your criteria",
          timestamps: Timestamp.fromDate(new Date())
        }).then(() => {
          console.log("Message send succesfully")
          // fetchChats()
        })
          .catch((error) => console.log(error))
      })

    } else {
      const q = query(collection(db, "chats"), where("id", "==", params.id));
      const docs = await getDocs(q);
      docs.forEach((docum) => {
        const docRef = doc(db, "chats", docum.id);
        let idText = "";
        productIds.forEach((ele, index) => {
          if (index !== productIds.length - 1)
            idText += ele + ", "
          else
            idText += ele
        })
        updateDoc(docRef, {
          allChats: arrayUnion({
            id: docum.data().allChats.length + 1,
            text: `Please provide us valid product id, Here are list of id's ${idText}`,
            isSender: false,
            productList: []
          }),
          recentChat: `Please provide us valid product id, Here are list of id's ${idText}`,
          timestamps: Timestamp.fromDate(new Date())
        }).then(() => {
          console.log("Message send succesfully")
          // fetchChats()
        })
          .catch((error) => console.log(error))
      })
    }
  }

  const sendChat = async () => {
    const chatCollectionRef = collection(db, "chats");
    const q = query(collection(db, "chats"), where("id", "==", params.id));
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
        allChats: arrayUnion({
          id: docum.data().allChats.length + 1,
          text: chat,
          isSender: true,
          productList: []
        }),
        recentChat: chat,
        timestamps: Timestamp.fromDate(new Date())
      }).then(() => {
        console.log("Message send succesfully")
        // fetchChats()
        let recentChat = chat;
        setTimeout(() => {
          sendAutomatedMesssage(recentChat);
        }, 2000)
        setChat("")
      })
        .catch((error) => console.log(error))
    })
  }
  return (
    <div className={styles.container}>
      <AppBar isRightShown={false} />
      <div className={styles.inner_container}>
        <div className={styles.chat_container} >
          {
            chats.map((chat) => (
              <SingleChat key={chat.id} text={chat.text} isSender={chat.isSender} productList={chat.productList} />
            ))
          }
          <div ref={containerRef} />
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