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

export default function ButtonAppBar({ isRightShown }) {
    return (
        <Box width={'50%'} margin={'auto'} sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{
                backgroundColor: '#fff'
            }}>
                <Toolbar style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
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
                            <div style={{
                                backgroundColor: '#7fc795',
                                width: '120px',
                                // height : '30px',
                                display: 'flex',
                                flexDirection: 'row',
                                padding: '5px',
                                justifyContent: 'center',
                                borderRadius: '10px',
                                cursor: 'pointer'
                            }}>
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