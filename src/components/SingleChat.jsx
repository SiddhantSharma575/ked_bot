import React, { useState } from 'react'
import { Box, Card, CardContent, Modal, Typography } from "@mui/material"
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';


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
      
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
            justifyContent: isSender && "flex-end",
            marginRight: isSender && "10px"
        }}>
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
                    <SmartToyOutlinedIcon style={{
                        color: "blue",
                        marginRight: "16px"
                    }} />
                )
            }
            <Card style={{
                width: "300px",
                backgroundColor: isSender ? "#9bf2b2" : "#c9d4cd",
                borderRadius: "5px"
            }}>
                <CardContent>

                    <Typography>
                        {text}
                    </Typography>

                    {
                        productList !== undefined && productList.length > 0 && productList.map((prodcut) => (
                            <Card style={{
                                marginTop: "1rem",
                                alignItems: "center",
                                cursor: "pointer",
                                borderRadius: "5px"
                            }} onClick={() => {
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