import * as React from 'react';

import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, CircularProgress} from '@mui/material'
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState, useRef } from "react";
import InputField from '../../components/Input';
import { appAuth, browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from '../../lib/db/firebase';
import Copyright from '../../components/Copyright';
import { useRouter } from 'next/router';








const defaultTheme = createTheme();

export default function login() {
  const [error, setError] = useState({
    emailErrorMessage: "",
    passwordErrorMessage: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const router = useRouter()

  const [form, setForm] = useState({
    email: "",
    password: "",
    isRemembered: false,
  })
  const handleSubmit = async(event) => {
    event.preventDefault();
    setError({})
    setIsLoading(true)
    try {

        console.log({
          email: form.email,
          password: form.password,
        });
        const persistence = form.isRemembered ? browserLocalPersistence : browserSessionPersistence
        await setPersistence(appAuth, persistence).then(async () => {
          // setIsLoading(false)

          await signInWithEmailAndPassword(appAuth, form.email, form.password)
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setIsLoading(false)
          if (error.message) {
          setError({
            ...error,
            emailErrorMessage: (error.message.includes("email") || error.message.includes("user-not-found"))&& error.message,
            passwordErrorMessage: error.message.includes("password") && error.message,
           })
          }
          console.log({
            errorCode: errorCode,
            errorMessage: errorMessage
          })
        })
        
    } catch (e) {
      console.log("errorsasdsd", e.message)
      setIsLoading(false)

        if (e.message) setError(e.message)
        
    }
  };
  const handleChange = (event) => {

    setForm((prev) => {

      return { ...prev, [event.target.name]: event.target.value };
    });
  };
 console.log("error", error, "isLoading", isLoading)
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange} 
                value={form.email} 
                autoFocus
                error={error.emailErrorMessage}
                helperText={error.emailErrorMessage}
              />
              {/* <InputField 
                name="email"
                id="email" 
                propsValue={form.email} 
               label="Email Address"
               handleChange={handleChange} 
               errorMessage={error}
               isError={error}
               type="email"
               inputRef={emailInputRef}
               /> */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={form.password} 
                label="Password"
                onChange={handleChange}   
                type="password"
                id="password"
                autoComplete="current-password"
                error={error.passwordErrorMessage}
                helperText={error.passwordErrorMessage}

              />
      
              <FormControlLabel
                control={<Checkbox checked={form.isRemembered} color="primary" onClick={() => setForm({...form, isRemembered: !form.isRemembered})} name="isRemembered"/>}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? <CircularProgress size={24}/> : "Sign In"}
                 </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={() => router.push("/signup")} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}