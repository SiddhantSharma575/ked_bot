import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, CardContent, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useNavigate} from 'react-router-dom'
import { commonComponentStyles } from './styles/components.styles';
import styles from "./styles/components.module.scss"
import {auth} from "../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import { AuthContext } from '../context/AuthContext';

const LoginTab = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [isValidUser, setIsValidUser] = useState("")
    const navigate = useNavigate()
    const { user,setUser } = useContext(AuthContext);


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

    const handleLogin = async () => {
        // Implement your login logic here, e.g., submit data to an API or perform client-side validation
        // setIsValidUser(true)
       try {
        const res  = await signInWithEmailAndPassword(auth,email,password);
        console.log("User", res.user)
        setUser({
            uid : res.user?.uid,
            email : res.user?.email
        })
        navigate("/chats")
        console.log(`Email: ${email}, Password: ${password}`);
       } catch (error) {
        console.log("ERROR", error)
        setIsValidUser(error.message + "!Please Register and try again");
        setTimeout(() => {
            setIsValidUser("")
        }, 2000);
       }
    };

    return (
        <div className={styles.loginContainer} >
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
            <Button style={commonComponentStyles.loginBtn} variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
            {
                isValidUser.length > 0 && (
                    <Card variant="outlined" style={commonComponentStyles.errorCard}>
                        <CardContent style={commonComponentStyles.errorCardContent}>
                            <InfoOutlinedIcon style={commonComponentStyles.infoOutlineIcon} />
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