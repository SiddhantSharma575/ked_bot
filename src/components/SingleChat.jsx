import React, { useState } from 'react'
import { Box, Card, CardContent, Modal, Typography } from "@mui/material"
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import styles from "./styles/components.module.scss"
import { commonComponentStyles } from './styles/components.styles';


const SingleChat = ({ text, isSender, productList }) => {
    const [open, setOpen] = useState(false);
    const [image,setImage] = useState("")
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };
      
      console.log("productList", productList)
    return (
        <div style={commonComponentStyles.chatContainer(isSender)}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                   <img src={image} alt="product..." />
                </Box>
            </Modal>
            {
                !isSender && (
                    <SmartToyOutlinedIcon style={commonComponentStyles.toyOutline} />
                )
            }
            <Card style={commonComponentStyles.chatCard(isSender)}>
                <CardContent>

                    <Typography>
                        {text}
                    </Typography>

                    {
                        productList !== undefined && productList.length > 0 && productList.map((prodcut) => (
                            <Card style={commonComponentStyles.listCard} onClick={() => {
                                 setOpen(!open);
                                 setImage(prodcut.img)
                             }}>
                                <CardContent style={{
                                    display: "flex"
                                }}>
                                    <div style={{
                                        flex: 3
                                    }}>
                                        <p style={{
                                            fontSize: "18px",
                                        }} >{prodcut.title}</p>
                                        <p style={{
                                            fontSize: "14px",
                                        }}>{prodcut.id}</p>
                                    </div>
                                    <ZoomInOutlinedIcon />
                                </CardContent>
                            </Card>
                        ))
                    }
                </CardContent>
            </Card>
        </div>
    )
}

export default SingleChat