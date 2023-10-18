import React, { useState } from 'react'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../../components/TabPanel';
import LoginTab from '../../components/LoginTab';
import RegisterTab from '../../components/RegisterTab';
import styles from "./authScreen.module.scss"
import { AuthStyles } from './auth.styles';
import logo from "../../assets/chat_icon.png"

const AuthScreen = () => {
    const [tabValue, setTabValue] = useState(0)
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
       <div className={styles.container}>
          <Box mt={10}>
          <Box
            flexDirection={"column"}
            display={"flex"}
            width={"50%"}
            // height={"60vh"}
            marginTop={5}
            justifyContent={"center"}
            alignItems={"center"}
            margin={"auto"}
            mt={"10%"}
            bgcolor={"#fff"}
            >
            {/* <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={16}
                height={16}
                padding={3}
                bgcolor="#7fc795"
                borderRadius={5}
                mt={3}>
                <SmartToyOutlinedIcon style={{
                    color : "blue"
                }} />
            </Box> */}
            <img src={logo} width={64} height={48} alt="logo" style={{ marginTop : "1rem" }} />
            <Tabs style={{
                marginTop: "1rem"
            }} indicatorColor={null} value={tabValue} onChange={handleTabChange} centered>
                <Tab LinkComponent={"div"} label="Login" style={AuthStyles.loginTab(tabValue)}  />
                <Tab label="Register" style={AuthStyles.registerTab(tabValue)} />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
                <LoginTab />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <RegisterTab />
            </TabPanel>
          </Box>
          </Box>
        </div>
    )
}

export default AuthScreen