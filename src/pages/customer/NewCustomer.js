import React from 'react';
import Header from '../../components/FormsUI/Headers';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  CircularProgress
} from '@material-ui/core';
import Textfield from '../../components/FormsUI/Textfields';
import Select from '../../components/FormsUI/Selects';

import Button from '../../components/FormsUI/Buttons';

import Layout from '../../components/layout/Index'

import { connect } from "react-redux";
import { NEW_CUSTOMER,CUSTOMER_UPDATE, CUSTOMER_LIST } from "../../actions/customerAction";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));



const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
    phoneNumber: Yup.number()
    .required('Required'),
    age: Yup.number()
    .integer()
    .required('Required'),
    patientStatus: Yup.string()
    .required(),
    imei: Yup.number()
    .required('Required'),
});

const NewCustomer = ({success,NEW_CUSTOMER,CUSTOMER_UPDATE,customer,loading,edit,history}) => {
  const classes = useStyles();
  React.useEffect(()=>{
    // if(success){
    //   history.push('/')
    // }
    // eslint-disable-next-line
  },[success])
  const formState=()=>{
    const INITIAL_FORM_STATE = {
      name: '',
      phoneNumber: '',
      age: '',
      patientStatus: '',
      imei: '',
    };

    const EDIT_FORM_STATE={
      name:customer?.name || '',
      phoneNumber:customer?.phoneNumber || '',
      age:customer?.age || '',
      patientStatus:customer?.patientStatus || '',
      imei:customer?.imei || '',
    }

    if(!edit){
      return INITIAL_FORM_STATE;
    }else{
      return EDIT_FORM_STATE;
    }
  }

 
  const types={
    "active":"active",
    "unactive":'unactive',
  }


  return (
    <Layout>
    <Grid container>
      <Grid item xs={12}>
        <Header title={edit?'Update Patient':'New Patient'}/>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={ formState()}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // console.log(values);
                if(edit) {
                  CUSTOMER_UPDATE(values).then(()=>{
                    // CUSTOMER_LIST();
                  });
                  history.push('/')
                }else{
                  NEW_CUSTOMER(values)
                  }
              }}
              enableReinitialize
            >
              {({ values, errors, isSubmitting, isValid }) => (
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={6} md={6}>
                    <Textfield
                      name="name"
                      label="Name"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      name="phoneNumber"
                      label="PhoneNumber"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      name="age"
                      label="Age"
                    />
                  </Grid>

                  <Grid item xs={12}  md={6}>
                    <Select
                      name="patientStatus"
                      label="PatientStatus"
                      options={types}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      name="imei"
                      label="Imei"
                      />
                  </Grid>

                  <Grid item xs={12} >
                    {
                      edit?
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
                      {loading ? 'Submitting' : 'Update Patient'}
                    </Button>:
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
                    {loading ? 'Submitting' : 'Add Patient'}
                  </Button>
                    }
                    
                  </Grid>
                </Grid>

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
  edit: state.customer.edit,
  customer:state.customer.customer,
  loading:state.customer.loading,
  success:state.customer.success,
});

export default connect(
  mapStateToProps,
  { NEW_CUSTOMER,CUSTOMER_UPDATE,CUSTOMER_LIST }
)(NewCustomer);