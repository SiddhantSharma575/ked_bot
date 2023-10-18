import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Card, CardContent, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from "react-router-dom"
import { commonComponentStyles } from './styles/components.styles';
import styles from "./styles/components.module.scss"
import { auth, db } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import CircularProgress from "@mui/joy/CircularProgress";
import { AuthContext } from '../context/AuthContext';

const RegisterTab = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState("")
    const [isValidUser, setIsValidUser] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { user, setUser } = useContext(AuthContext);


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

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value)
        if (event.target.value !== password) {
            setPasswordError("Password do not match")
        } else {
            setPasswordError("")
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!email || !password || !confirmPassword) {
            setIsValidUser("Please enter all fields!!");
            setTimeout(() => {
                setIsValidUser("")
            }, 2000);
            return;
        }
        // Implement your login logic here, e.g., submit data to an API or perform client-side validation
        setLoading(true)
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log("USER", res)
            setUser({
                uid: res.user?.uid,
                email: res.user?.email
            })
            await addDoc(collection(db, "users"), {
                userUid: res.user?.uid,
                email: res.user?.email
            })
            // await addDoc(collection(db, "chats"), {
            //     uid: res.user?.uid,
            //     chats: []
            // })
            // await setDoc(doc(db, "chats"), {
            //     uid : res.user?.uid,
            //     chats : []
            // });
            setLoading(false)
            navigate("/chats")
            console.log(`Email: ${email}, Password: ${password}`);
        } catch (error) {
            console.log("Error", error.message)
            setIsValidUser(error.message);
            setTimeout(() => {
                setIsValidUser("")
            }, 2000);
            setLoading(false)
        }
    };

    return (
        <div className={styles.loginContainer} >
            {
                loading && (
                    <Box ml={"50%"}>
                        <CircularProgress />
                    </Box>
                )
            }
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
                onChange={handleConfirmPasswordChange}
                margin="normal"
                error={passwordError}
                helperText={passwordError.length > 0 ? passwordError : ''}
            />
            <Button disabled={emailError || loading} style={commonComponentStyles.loginBtn} variant="contained" color="primary" onClick={handleLogin}>
                Register
            </Button>
            {
                isValidUser.length > 0 && (
                    <Card variant="outlined" style={commonComponentStyles.errorCard}>
                        <CardContent style={commonComponentStyles.errorCardContent}>
                            <InfoOutlinedIcon style={commonComponentStyles.infoOutlineIcon} />
                            <Typography variant="body2" color="error">
                                {isValidUser}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }
        </div>
    );
};

export default RegisterTab;