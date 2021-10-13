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

import queryString from 'query-string';
import { ErrorMessage,Field, Form, Formik} from 'formik';
import { object, string,ref } from 'yup';

import { connect } from "react-redux";
import { RESET_PASSWORD } from "../../actions/authActions";

const initialValues = {
  password: '',
  passwordConfirmation: '',
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

function SignIn({isAuthenticated,loading,history, RESET_PASSWORD}) {
  const classes = useStyles();

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);

  return (
    <Container style={{padding:'1rem'}} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Formik
          validationSchema={
            object({
              password: string().required('password should be minimum 8character!!!').min(8),
              passwordConfirmation:string().required()
              .oneOf([ref('password'), null], 'Passwords must match')
            })
          }
        initialValues={initialValues}
        onSubmit={async (values,{setSubmitting}) => {
          const parsed = queryString.parse(history.location.search);
          // console.log({...values,code:parsed.code});
          return RESET_PASSWORD({...values,code:parsed.code}).then(()=>history.push('/'))
          ;
        
        }}>
          {({ isSubmitting, isValidating }) => (
            <Form className={classes.form}>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="password" type="password" as={TextField} label="Your password" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="password" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="passwordConfirmation" type="password" as={TextField} label="passwordConfirmation" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="passwordConfirmation" />
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
  { RESET_PASSWORD }
)(SignIn);