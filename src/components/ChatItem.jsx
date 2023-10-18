import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {useNavigate} from "react-router-dom"

const ChatItem = ({chat}) => {
    const navigate = useNavigate()

    const handleChange  = () => {
        navigate(`/chat/${chat.id}`)
    }
    console.log("heello", new Date(chat.timestamps.seconds*1000).toDateString())
    return (
        <Card sx={{ minWidth: 275 }} style={{
            cursor : 'pointer',
            marginTop : '1rem'
        }} onClick={handleChange}>
            <CardContent style={{
                display : 'flex',
            }}>
                <ChatIcon style={{
                    color: '#ccc'
                }} />
                <Box marginLeft={2} flex={'3'}>
                    <Typography fontSize={'18px'} color={'black'}>
                       {chat.recentChat}
                    </Typography>
                    <Typography mt={'10px'}>
                        {new Date(chat.timestamps.seconds*1000).toDateString()}
                    </Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon style={{
                    marginTop : '20px'
                }} />
            </CardContent>
        </Card>
    )
}

export default ChatItem