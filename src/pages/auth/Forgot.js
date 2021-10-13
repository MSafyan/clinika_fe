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
import { object, string } from 'yup';

import { connect } from "react-redux";
import { FORGOT_PASSWORD } from "../../actions/authActions";

const initialValues = {
  email: '',
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Forgot({FORGOT_PASSWORD,loading}) {
  const classes = useStyles();

  return (
    <Container style={{padding:'1rem'}} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Password Forgot
        </Typography>
        <Formik
          validationSchema={
            object({
              email: string().required('Your email is mandatory!!!').min(2).max(100),
            })
          }
        initialValues={initialValues}
        onSubmit={async (values) => {
          FORGOT_PASSWORD(values);
        
        }}>
          {({ isSubmitting, isValidating }) => (
            <Form className={classes.form}>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="email" as={TextField} label="Your Email Address" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="email" />
                </FormGroup>
              </Box>
              <Button 
              type="submit"   
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit} 
              disabled={isSubmitting || isValidating}
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
                  <Link href="/login" variant="body2">
                    Already have an account? Sign In
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading:state.auth.loading
});

export default connect(
  mapStateToProps,
  { FORGOT_PASSWORD }
)(Forgot);