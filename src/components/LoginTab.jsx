import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, CardContent, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const LoginTab = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [isValidUser, setIsValidUser] = useState(false)

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);

        // Check if the email is valid
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
        setEmailError(!isEmailValid);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Implement your login logic here, e.g., submit data to an API or perform client-side validation
        setIsValidUser(true)
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div style={{
            width: "300px",
            height: "400px",
            flexDirection: "column"
        }}  >
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={handleEmailChange}
                margin="normal"
                error={emailError}
                helperText={emailError ? 'enter a valid email address' : ''}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                margin="normal"
            />
            <Button style={{
                width: "100%",
                backgroundColor: "#000",
                marginTop: "1rem"
            }} variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
            {
                isValidUser && (
                    <Card variant="outlined" style={{
                        marginTop: "1rem",
                        borderColor: "red"
                    }}>
                        <CardContent style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <InfoOutlinedIcon style={{
                                color: "red",
                                marginRight: "0.5rem"
                            }} />
                            <Typography variant="body2" color="error">
                                The email you entered is invalid.
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }
        </div>
    );
};

export default LoginTab;