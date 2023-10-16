import React, { useState } from 'react'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../../components/TabPanel';
import LoginTab from '../../components/LoginTab';
import RegisterTab from '../../components/RegisterTab';

const AuthScreen = () => {
    const [tabValue, setTabValue] = useState(0)
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
        <Box
            flexDirection={"column"}
            display={"flex"}
            width={"100vw"}
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={16}
                height={16}
                padding={3}
                bgcolor="#7fc795"
                borderRadius={5}>
                <SmartToyOutlinedIcon style={{
                    color : "blue"
                }} />
            </Box>
            <Tabs style={{
                marginTop: "1rem"
            }} indicatorColor={null} value={tabValue} onChange={handleTabChange} centered>
                <Tab label="Login" style={{
                    backgroundColor: tabValue === 0 ? "#47b568" : "#ccc",
                    color: "#000",
                    borderRadius: "10px"
                }} />
                <Tab label="Register" style={{
                    backgroundColor: tabValue === 1 ? "#47b568" : "#ccc",
                    color: "#000",
                    marginLeft: "10px",
                    borderRadius: "10px"
                }} />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
                <LoginTab />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <RegisterTab />
            </TabPanel>
        </Box>
    )
}

export default AuthScreen