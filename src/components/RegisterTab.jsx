import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, CardContent, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from "react-router-dom"
import { commonComponentStyles } from './styles/components.styles';
import styles from "./styles/components.module.scss"

const RegisterTab = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate()

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
        navigate("/chats")
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className={styles.loginContainer} >
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                fullWidth
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
            <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={confirmPassword}
                fullWidth
                onChange={(e) => setConfirmPassword(e.target.value)}
                margin="normal"
            />
            <Button style={commonComponentStyles.loginBtn} variant="contained" color="primary" onClick={handleLogin}>
                Register
            </Button>
        </div>
    );
};

export default RegisterTab;