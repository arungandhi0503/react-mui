import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ForgotPassword from './ForgetPassword';
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom";

const primaryButtonTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000',
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                    color: '#fff',
                    padding: '20px 20px',
                    borderRadius: '30px',
                    '&:hover': {
                        backgroundColor: '#333',
                    },
                },
            },
        },
    },
});
const secondaryButtonTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                    color: '#000',
                    padding: '20px 20px',
                    borderRadius: '30px',
                    '&:hover': {
                        backgroundColor: '#fff',
                    },
                },
            },
        },
    },
});
const items = [
    {
        icon: "",
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
];

function Login() {
    const navigate = useNavigate();
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleFormRegistration = (e) => {
        e.preventDefault();
        navigate("/form-registration");
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    return (
        <>

            <Grid container spacing={4} sx={{
                justifyContent: 'center',
                p: 2,
                m: 'auto',
            }}>
                <Grid spacing={4} size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, flexDirection: 'column', alignSelf: 'auto', gap: 4, color: '#fff', height: '100vh', padding: 6 }} className="bg-img">
                        {items.map((item, index) => (
                            <Stack key={index} direction="row" sx={{ gap: 2 }}>
                                {item.icon}
                                <div>
                                    <Typography gutterBottom sx={{ fontWeight: 'medium', fontSize: '3rem' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        ))}
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} spacing={4}><Box sx={{ padding: 2 }}>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        {/* <SitemarkIcon /> */}
                    </Box>
                    <Typography
                        component="h1"
                        variant="h3"
                        sx={{ width: '100%', fontSize: '2rem', fontWeight: '700' }}
                    >
                        Sign in
                    </Typography>
                    <Box>
                        <Grid container sx={{ padding: 1 }}>
                            {/* Left Column */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={{ padding: 1 }}>
                                    <ThemeProvider theme={secondaryButtonTheme}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="outlined"
                                            onClick={() => alert('Sign in with Apple')}
                                            startIcon={<AppleIcon />}
                                        >
                                            Sign in with Apple
                                        </Button>
                                    </ThemeProvider>
                                </Box>
                            </Grid>

                            {/* Right Column */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={{ padding: 1 }}>
                                    <ThemeProvider theme={secondaryButtonTheme}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="outlined"
                                            onClick={() => alert('Sign in with Google')}
                                            startIcon={<GoogleIcon />}
                                        >
                                            Sign in with Google
                                        </Button>
                                    </ThemeProvider>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box><Box sx={{ width: '100%', position: 'relative', mt: 2, mb: 2 }}>
                        <Divider>
                            <Typography variant="body1" sx={{ textAlign: 'left', width: '100%' }}>
                                OR LOGIN WITH
                            </Typography>
                        </Divider>
                    </Box>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                error={emailError}
                                helperText={emailErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={emailError ? 'error' : 'primary'}
                                sx={{
                                    ariaLabel: 'email', '& .MuiOutlinedInput-root': {
                                        borderRadius: '30px', // Apply border-radius here
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormLabel htmlFor="password">Password</FormLabel>
                            </Box>
                            <TextField
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '30px', // Apply border-radius here
                                    },
                                }}
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Link
                                component="button"
                                onClick={handleClickOpen}
                                variant="body2"
                                sx={{ alignSelf: 'baseline' }}
                            >
                                Forgot your password?
                            </Link>
                        </Box>
                        <ThemeProvider theme={primaryButtonTheme}>
                            <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>Sign in</Button>
                        </ThemeProvider>
                        <ForgotPassword open={open} handleClose={handleClose} />
                        <Typography sx={{ textAlign: 'left' }}>
                            Don&apos;t have an account?{' '}
                            <span>
                                <Link
                                    href="/material-ui/getting-started/templates/sign-in/"
                                    variant="body2"
                                    sx={{ alignSelf: 'center' }}
                                    onClick={handleFormRegistration}
                                >
                                    Sign up
                                </Link>
                            </span>
                        </Typography>
                    </Box>
                </Box>

                </Grid>
            </Grid >
        </>



    );
}

export default Login;