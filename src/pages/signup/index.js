import React, { useState } from 'react';
import 'firebase/auth';
import 'firebase/storage';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { appAuth, createUserWithEmailAndPassword, firebaseAppDB, firebaseStorage } from '../../lib/db/firebase';
import { doc, setDoc } from 'firebase/firestore';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../../components/Copyright';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from '../../components/MuiAlerts';
import { useRouter } from 'next/router';
const defaultTheme = createTheme();

const SignUpForm = () => {
    const [form, setForm] = useState({
        email: '',
        firstName: null,
        lastName: null,
        password: ''
    })
    const router = useRouter()

  const [file, setFile] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false)
  const [error, setError] = useState({
    emailErrorMessage: "",
    passwordErrorMessage: ""
  });
  const [open, setOpen] = useState(false); //snackbar
  const handleChange = (event) => {

    setForm((prev) => {

      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSubmit(false)
    setError({})
    try {
      // Create user account to authentication firebase
      const userCredential = await createUserWithEmailAndPassword(appAuth,form.email, form.password);
        setIsSubmit(true)

      const user = userCredential.user;
      const userDocument = doc(firebaseAppDB, 'users', user.uid)
      // Upload file to Firebase Storage
      const storageRef = ref(firebaseStorage, `profilePictures/${user.uid}`);
      await uploadBytes(storageRef,file)
      const downloadURL = await getDownloadURL(storageRef);

      // Store user data (including profile picture URL) in Firestore

      await setDoc(userDocument, {
        email: user.email,
        password: form.password,
        name: form.firstName + " " + form.lastName,
        profilePicture: downloadURL,
      }).then(() => {
        setOpen(true)
      }).catch((error) => {
        console.log("error in setDoc", error)
      })
      console.log('User signed up successfully!');
    } catch (error) {
        setError({
            ...error,
            emailErrorMessage: (error.message.includes("email") || error.message.includes("user-not-found"))&& error.message,
            passwordErrorMessage: error.message.includes("password") && error.message,
           })
      console.log('Error signing up:', error);
    }
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={!form.firstName && isSubmit}
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange} 
                value={form.firstName} 
                helperText={!form.firstName && isSubmit ? "Firstname is required!" : ""}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={!form.lastName && isSubmit}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={handleChange} 
                value={form.lastName} 
                helperText={!form.lastName && isSubmit ? "Lastname is required!" : ""}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={(!form.email && isSubmit) || error.emailErrorMessage}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange} 
                value={form.email} 
                helperText={!form.email && isSubmit ?  "Email is required!" : error.emailErrorMessage }

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={(!form.password && isSubmit) || error?.passwordErrorMessage}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange} 
                value={form.password} 
                helperText={!form.email && isSubmit ?  "Password is required!" : error.passwordErrorMessage }
              />
            </Grid>
            <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            id="profilePicture"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: 'none' }}
            required
          />
          <label htmlFor="profilePicture">
            <Button component="span" variant="contained" color="primary" sx={{ width: '100%' }}>
              Upload Profile Picture
            </Button>
          </label>
            <Typography variant="caption" color={!file && isSubmit && "error"}>
            {!file ? 
              "Please upload a profile picture." : file.name
          }
            </Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => router.push("/login")} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
      <Stack spacing={2} sx={{ width: '100%' }}>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      </Stack>
    </Container>
  </ThemeProvider>
  );
};

export default SignUpForm;