import React from 'react';
import {FormGroup,Avatar,CircularProgress} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { ErrorMessage,Field, Form, Formik} from 'formik';
import { object, string,ref } from 'yup';

import { connect } from "react-redux";
import { SIGN_UP } from "../../actions/authActions";

const initialValues = {
  username:'',
  email: '',
  password: '',
  confirmPassword:'',
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp({isAuthenticated,loading,history, SIGN_UP}) {
  const classes = useStyles();
  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/login');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <Container style={{padding:'1rem'}} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          validationSchema={
            object({
              email: string().required('Your email is mandatory!!!').min(5).max(100),
              username: string().required('Your name is mandatory!!!').min(5).max(100),
              password: string().required('password should be minimum 8character!!!').min(8),
              confirmPassword:string()
              .oneOf([ref('password'), null], 'Passwords must match')
            })
          }
        initialValues={initialValues}
        onSubmit={async (values) => {
          // console.log(values);
          SIGN_UP(values);
        
        }}>
          {({ isSubmitting, isValidating }) => (
            <Form className={classes.form}>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="username" as={TextField} label="Your username" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="username" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="email" as={TextField} label="Your Email Address" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="email" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field type="password" name="password" as={TextField} label="password" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="password" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field type="password" name="confirmPassword" as={TextField} label="confirm password" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="confirmPassword" />
                </FormGroup>
              </Box>
            
              <Button
                disabled={loading}
                type="submit"
                variant="contained"
                color="primary"
                startIcon={
                  loading ? (
                    <CircularProgress size="1rem" />
                  ) : undefined
                }
              >
                {loading ? 'Submitting' : 'Submit'}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated || false,
  loading:state.auth.loading
});

export default connect(
  mapStateToProps,
  { SIGN_UP }
)(SignUp);