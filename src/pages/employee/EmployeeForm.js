import React from 'react';
import Header from '../../components/FormsUI/Headers';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  // CircularProgress
} from '@material-ui/core';
import Textfield from '../../components/FormsUI/Textfields';
import Select from '../../components/FormsUI/Selects';
// import DateTimePicker from '../../components/FormsUI/DataTimePickers';
import Button from '../../components/FormsUI/Buttons';

import Layout from '../../components/layout/Index'

import { connect } from "react-redux";
import { EMPLOYEE_UPDATE } from "../../actions/employeeActions";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    ,
  email: Yup.string()
    .email('Invalid email.')
    ,
  type:Yup.string(),
});

const EmployeeForm = ({EMPLOYEE_UPDATE,employee,loading,edit,history}) => {
  const classes = useStyles();

  const types={
    "none":"none",
    "admin":'admin',
    'Manager':'Manager ',
    'supervisor':'supervisor',
    'sales':'sales',
  }

  const formState=()=>{

    const EDIT_FORM_STATE={
      username:employee?.username || '',
      email:employee?.email || '',
      type:employee?.type || '',
    }
      return EDIT_FORM_STATE;
  }

 



  return (
    <Layout>
    <Grid container>
      <Grid item xs={12}>
        <Header title={edit?'Employee Details':'Employee Details'}/>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={ formState()}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // console.log(values);
                  EMPLOYEE_UPDATE(values).then(()=>history.push('/employees'));
              }}
              enableReinitialize
            >
              {({ values, errors, isSubmitting, isValid }) => (
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      name="username"
                      label="username"
                      disabled
                    />
                  </Grid>

                  <Grid item xs={12}  md={6}>
                    <Textfield
                      name="email"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={12}  md={6}>
                    <Select
                      name="type"
                      label="Type"
                      options={types}
                    />
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
                      {loading ? 'Submitting' : 'Update Employee'}
                    </Button>
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
  employeeList:state.employee.employeeList,
  employee:state.employee.employee,
  loading:state.employee.loading
});

export default connect(
  mapStateToProps,
  {EMPLOYEE_UPDATE}
)(EmployeeForm);