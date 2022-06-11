import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Input } from '@mui/material';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { useFormik } from 'formik';
import { Formik } from 'formik';
import * as yup from "yup";
import axios from 'axios';
//import { Express } from 'express';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        alogan15
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();
const formValidationSchema = yup.object({
    firstName: yup
        .string("Enter your first name")
        .required("Your first name is required"),
    lastName: yup
        .string("Enter your last name")
        .required("Your last name is required"),
    email: yup
        .string("Enter your email")
        .email("Invalid email format")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .required("Password required")
})

export default function SignInSide() {

 /* 
  const app = express()
  const cors = require("cors")
  app.get('/', (req, res) => {
    res.s
  }
  )
  app.get("/data", (req, res) => {
    res.json({firstName: "", lastName: "", email: ""})
  })
  app.listen(8080)
*/

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    validationSchema: formValidationSchema,
    onSubmit:(values) => {
      axios.post('http://localhost:8080/signup', values)
      .then(response => {
        console.log(response);
      })
    }
  })
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        
        
        
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
              <ImportantDevicesIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up Page
            </Typography>

            <Stack sx={{m: 8}}direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" />
              <Button variant="contained" component="span">
                Upload Image Now
              </Button>
            </label>
            </Stack>

            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            
            <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />

              
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Re-enter Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
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


