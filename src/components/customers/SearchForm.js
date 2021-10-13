import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import Textfield from '../../components/FormsUI/Textfields';
import Select from '../../components/FormsUI/Selects';
import Button from '../../components/FormsUI/Buttons';

import { connect } from "react-redux";
import { CUSTOMER_FIND } from "../../actions/customerAction";
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const searchTypes={
  'id':'id',
  'name':'name',
  'imei':'imei',
  'patientStatus':'patientStatus',
  'phoneNumber':'phoneNumber'
}

const FORM_VALIDATION = Yup.object().shape({
  searchTerm: Yup.string()
    .required('Required'),
  searchBy:Yup.string().required('enter state name'),
});

const SearchForm = ({CUSTOMER_FIND,loading}) => {
  const classes = useStyles();

    const INITIAL_FORM_STATE = {
      searchTerm: '',
      searchBy: '',
    };

  return (
    <>
        <Typography variant='h6'>
          Search Patient
        </Typography>
          <div className={classes.formWrapper}>

            <Formik
              initialValues={ INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // console.log(values);
                CUSTOMER_FIND(values);
              }}
            >
              {({ values, errors, isSubmitting, isValid }) => (
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12} md={4}>
                    <Textfield
                      name="searchTerm"
                      label="Search Term"
                    />
                  </Grid>

                
                  <Grid item xs={12} md={2}>
                    <Select
                      name="searchBy"
                      label="searchBy"
                      options={searchTypes}
                    />
                  </Grid>

                  <Grid item xs={12} md={2}>
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
                      {loading ? 'Searching' : 'Search'}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
              )}
            </Formik>
          </div>
    </>
  );
};

const mapStateToProps = state => ({
  edit: state.customer.edit,
  customer:state.customer.customer,
  loading:state.customer.loading
});

export default connect(
  mapStateToProps,
  { CUSTOMER_FIND  }
)(SearchForm);