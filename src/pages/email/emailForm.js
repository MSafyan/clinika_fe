import React from 'react';
import Header from '../../components/FormsUI/Headers';
import {ErrorMessage, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Button,
  FormGroup,
  Box,
  Typography
  // CircularProgress
} from '@material-ui/core';
import Select from 'react-select'

import Textfield from '../../components/FormsUI/Textfields';

import Layout from '../../components/layout/Index'
import { connect } from "react-redux";
import {NEW_EMAIL} from '../../actions/customerAction'

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const FORM_VALIDATION = Yup.object().shape({
  subject: Yup.string().required(),
  body: Yup.string().required(),
  customerType: Yup.string().required(),
  method: Yup.string().required(),

});

const CouponForm = ({NEW_EMAIL,loading,history}) => {
  const classes = useStyles();

  const formState=()=>{

    const EDIT_FORM_STATE={
      subject:'',
      body:'',
      customerType:'',
      method:'',
    }
      return EDIT_FORM_STATE;
  }


  return (
    <Layout>
    <Grid container>
      <Grid item xs={12}>
        <Header title={'New Email'}/>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={ formState()}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // console.log(values);
                NEW_EMAIL(values)
              }}
              enableReinitialize
            >
              {({setFieldValue, values, errors, isSubmitting, isValid }) => (
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Textfield
                      name="subject"
                      label="subject"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="body"
                      label="body"
                      multiline
                    
                    />
                    <ErrorMessage component='div' style={{color:"red"}} name="subject" />
                  </Grid>

                  <Grid item xs={6}>
                  <Box marginBottom={2}>
                  <FormGroup>
                  <Typography variant='body1' style={{marginRight:'auto',maginLeft:'8px'}}>
                    Customer Type
                  </Typography>
                  <Select
                    label="customerType"
                    options={
                      [{label:"Loyalty Customers Only",value:'loyalcustomer'},
                      {label:'All Customers',value:"both"}]}
                    onChange={
                      value=>{setFieldValue('customerType',value.value)}}
                  />
                   <ErrorMessage component='div' style={{color:"red"}} name="loyalcustomer" />
                   </FormGroup>
                   </Box>
                  </Grid>

                  <Grid item xs={6}>
                  <Box marginBottom={2}>
                  <FormGroup>
                  <Typography variant='body1' style={{marginRight:'auto',maginLeft:'8px'}}>
                    Notification Method
                  </Typography>
                  <Select
                    label="method"
                    options={
                      [{label:"email Only",value:'email'},
                      {label:'Email & SMS',value:"both"}]}
                    onChange={
                      value=>{setFieldValue('method',value.value)}}
                  />
                  </FormGroup>
                  </Box>
                  </Grid>

                  <Grid item xs={12}>
                      <Button
                      // disabled={loading}
                      type="submit"
                      variant="contained"
                      color="primary"
                      // startIcon={
                      //   loading ? (
                      //     <CircularProgress size="1rem" />
                      //   ) : undefined
                      // }
                    >
                      {loading ? 'Submitting' : 'Send Email'}
                    </Button>
                  </Grid>
                </Grid>
                {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}

              </Form>
              )}

            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
    </Layout>
  );
};

const mapStateToProps = state => ({
  loading:state.customer.loading
});

export default connect(
  mapStateToProps,
  {NEW_EMAIL}
)(CouponForm);