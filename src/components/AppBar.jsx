import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { AccountCircle } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from 'react-router-dom';
import { commonComponentStyles } from './styles/components.styles';
import styles from "./styles/components.module.scss"
import {auth, db} from "../firebase"
import { addDoc, collection } from 'firebase/firestore';

export default function ButtonAppBar({ isRightShown }) {
    const navigate = useNavigate()

    const handleNavigation = async (event) => {
        event.preventDefault();
        if(auth.currentUser) {
            alert("Please Login")
            return;
        }
        try {
            const id = Math.floor(Math.random() * 999);
            navigate(`/chat/${id}`)   
        } catch (error) {
           
        }
    }
    return (
        <Box width={'50%'} margin={'auto'} sx={{ flexGrow: 1 }} mt={5}>
            <AppBar position="static" style={commonComponentStyles.appBar}>
                <Toolbar style={commonComponentStyles.toolbar}>
                    <Box display={'flex'} flexDirection={'row'}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            style={{
                                color: '#000'
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box
                            component={'div'}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            width={16}
                            height={16}
                            padding={3}
                            bgcolor="#7fc795"
                            borderRadius={5}>
                            <SmartToyOutlinedIcon style={{
                                color: "blue"
                            }} />
                        </Box>
                    </Box>
                    {
                        isRightShown && (
                            <div className={styles.appBarRightContainer} onClick={handleNavigation}>
                                <ChatIcon style={{
                                    color: '#000'
                                }} />
                                <Typography color={'#000'} marginLeft={'10px'} component={'div'}>
                                    New Chat
                                </Typography>
                            </div>
                        )
                    }
                </Toolbar>

            </AppBar>
        </Box>
    );
}