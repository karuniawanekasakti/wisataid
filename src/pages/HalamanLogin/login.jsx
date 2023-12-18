// eslint-disable-next-line no-unused-vars
import * as React from "react";
import {Avatar, Container, Box} from "@mui/material";
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import TextInput from "../../components/TextInput/TextInput.jsx";
import Typography from "@mui/material/Typography";
import ButtonComponentLgn from "../../components/Button/ButtonComponentLgn.jsx";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import AllertMessage from "../../components/AlertMessage/AllertMessage.jsx";
import {useNavigate} from "react-router-dom";
import ButtonComponent from "../../components/Button/ButtonComponent.jsx";
import {useTheme} from "@mui/material/styles";

export default function Login(props) {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const theme = useTheme();


    const handleBack = () => {
        navigate(-1);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const email = data.get('email');
        const password = data.get('password');

        fetch('http://47.128.153.249:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    // eslint-disable-next-line react/prop-types
                    props.onLogin(data.token);
                    setIsSuccess(true);
                    setTimeout(() => {
                        navigate('/add-wisata');
                    }, 2000);
                } else {
                    setErrorMessage(data.message);
                    setIsFailed(true);
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setIsFailed(true);
            });
    }

    const handleClose = () => {
        setIsSuccess(false);
        setIsFailed(false);
        setErrorMessage();
    }
    return (
        // <ThemeProvider theme={theme}>
        <>
            <ButtonComponent
                variant="outlined"
                text='Kembali'
                size='medium'
                style={{
                    left: '25px',
                    top:'50px',
                    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#3F51B5' // Ubah warna teks berdasarkan mode
                }}
                onClick={handleBack}
            />
        <Container maxWidth="xs">
            <Box sx={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
                 component="form"
                 onSubmit={handleSubmit}
            >
                <Avatar
                    sx={{backgroundColor: "white", bottom: '7%', position: 'relative', width: '60px', height: '60px'}}>
                    <CloudDoneIcon sx={{color: 'primary.main', fontSize: '2rem'}}/>
                </Avatar>
                <Typography component={"h1"} variant={"h5"}>
                    Sign in
                </Typography>
                <TextInput
                    id="email"
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    required
                    autoFocus
                    margin="normal"
                    name="email"
                    type="text"
                    sx={{
                        backgroundColor: 'transparent',
                        '&.Mui-focused': {
                            backgroundColor: 'transparent',
                        },
                        '&:active': {
                            backgroundColor: 'transparent',
                        },
                    }}
                />
                <div style={{display: 'flex', width: '100%', position: 'relative'}}>
                    <TextInput
                        id="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        required
                        autoFocus
                        margin="normal"
                        name="password"
                        type={isShowPassword ? 'text' : 'password'}
                        sx={{
                            backgroundColor: 'transparent',
                            '&.Mui-focused': {
                                backgroundColor: 'transparent',
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    />
                    <div
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        // style={{position: 'absolute', right: '0', top: '0', cursor:'pointer'}
                    >
                        {isShowPassword ? (
                            <VisibilityOff fontSize="medium"
                                           style={{position: 'absolute', right: '15', top: '33', cursor: 'pointer'}}/>
                        ) : (
                            <Visibility fontSize="medium"
                                        style={{position: 'absolute', right: '15', top: '33', cursor: 'pointer'}}/>
                        )}
                    </div>
                </div>
                <ButtonComponentLgn
                    type="submit"
                    fullWidth
                    text="Sign In"
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    style={{top:'10px'}}
                />
                <AllertMessage
                    label="Berhasil Login"
                    open={isSuccess}
                    onClose={handleClose}
                    severity="success"
                />
                <AllertMessage
                    label={`Gagal Login. Email: ${errorMessage}`}
                    open={isFailed}
                    onClose={handleClose}
                    severity="error"
                />
            </Box>
        </Container>
        </>
        // </ThemeProvider>
    )
}
