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

import { GoogleIcon, FacebookIcon } from './CustomIcons';

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
const textTheme = createTheme({
    components: {
        MuiInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#666',
                            borderRadius: '30px'
                        },
                        '&:hover fieldset': {
                            borderColor: '#666',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#666',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#000',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#333',
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
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);

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

            <Stack
                direction="column"
                component="main"
                sx={[
                    {
                        justifyContent: 'space-between',
                        height: { xs: 'auto', md: '100%' },
                    },
                    (theme) => ({
                        backgroundImage:
                            'radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                        backgroundSize: 'cover',
                        ...theme.applyStyles('dark', {
                            backgroundImage:
                                'radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                        }),
                    }),
                ]}
            >
                <Grid container spacing={4} sx={{
                    justifyContent: 'center',
                    p: 5,
                    m: 'auto',
                }}>
                    <Grid spacing={4} size={{ xs: 12, md: 6 }} className="bg-img"
                        sx={{ flexDirection: 'column', alignSelf: 'auto', gap: 4, color: '#fff', height: '65vh', padding: 6 }}
                    >
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
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} spacing={4}><Box sx={{ padding: 6 }}>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            {/* <SitemarkIcon /> */}
                        </Box>
                        <Typography
                            component="h1"
                            variant="h4"
                            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                        >
                            Sign in
                        </Typography>
                        <Box>
                            <Grid container sx={{ padding: 2 }}>
                                {/* Left Column */}
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box sx={{ padding: 2 }}>
                                        <ThemeProvider theme={secondaryButtonTheme}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="outlined"
                                                onClick={() => alert('Sign in with Facebook')}
                                                startIcon={<GoogleIcon />}
                                            >
                                                Sign in with Google
                                            </Button>
                                        </ThemeProvider>
                                    </Box>
                                </Grid>

                                {/* Right Column */}
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box sx={{ padding: 2 }}>
                                        <ThemeProvider theme={secondaryButtonTheme}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="outlined"
                                                onClick={() => alert('Sign in with Facebook')}
                                                startIcon={<FacebookIcon />}
                                            >
                                                Sign in with Facebook
                                            </Button>
                                        </ThemeProvider>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box><Divider>or</Divider>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
                        >
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <ThemeProvider theme={textTheme}>
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
                                        sx={{ ariaLabel: 'email' }}
                                    /></ThemeProvider>
                            </FormControl>
                            <FormControl>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                </Box>
                                <ThemeProvider theme={textTheme}>
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
                                        color={passwordError ? 'error' : 'primary'}
                                    />
                                </ThemeProvider>
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
                            <Typography sx={{ textAlign: 'center' }}>
                                Don&apos;t have an account?{' '}
                                <span>
                                    <Link
                                        href="/material-ui/getting-started/templates/sign-in/"
                                        variant="body2"
                                        sx={{ alignSelf: 'center' }}
                                    >
                                        Sign up
                                    </Link>
                                </span>
                            </Typography>
                        </Box>
                    </Box>

                    </Grid>
                </Grid>
            </Stack>
        </>



    );
}

export default Login;