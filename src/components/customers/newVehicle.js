import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import { array,  object, string } from 'yup';

import TextfieldWrapper from '../FormsUI/Textfields';

import Layout from '../../components/layout/Index'

import { connect } from "react-redux";
import { NEW_VEHICLE,VEHICLE_UPDATE,NOTLOADING_VEHICLE } from "../../actions/vehicleAction";
import {NOTLOADING_CUSTOMER} from '../../actions/customerAction'

const emptyVehicle = { 
  vehicleMake: '',
  vehicleRegNo: '',
  vehicleModel: ''
};

const useStyles = makeStyles((theme) => ({
  errorColor: {
    color: theme.palette.error.main,
  },
  noWrap: {
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'nowrap',
    },
  },
}));


function NewVehicle({NOTLOADING_CUSTOMER,NOTLOADING_VEHICLE, VEHICLE_UPDATE,NEW_VEHICLE,customer,loading,edit,history}) {
  const classes = useStyles();

  
const formState=()=>{
  const INITIAL_FORM_STATE = {
    firstName: customer?.firstName || `Id: ${customer?.id}` || 'Go to Previous page',
    vehicles: [emptyVehicle],
  };

  const EDIT_FORM_STATE={
    firstName: customer?.firstName || `Id: ${customer?.id}` || 'Go to Previous page',
    vehicles: customer.vehicles,
  }

  if(!edit){
    return INITIAL_FORM_STATE;
  }else{
    return EDIT_FORM_STATE;
  }
}

  return (
    <Layout>
    <Card>
      <CardContent>
        <Formik
          initialValues={formState()}
          validationSchema={object({
            firstName: string(),
            vehicles: array(
              object({
                vehicleMake: string()
                  .required('Vehicle Manufacturer name needed')
                  .min(3, 'Vehicle Manufacturer needs to be at least 3 characters')
                  .max(
                    20,
                    'Vehicle Manufacturer needs to be at most 10 characters'
                  ),
                  vehicleRegNo: string()
                  .required('Vehicle Registration number needed')
                  .min(3, 'Vehicle Registration number needs to be at least 3 characters')
                  .max(
                    20,
                    'Vehicle Registration number needs to be at most 10 characters'
                  ),
                  vehicleModel: string()
                  .required('Vehicle Model needed')
                  .min(3, 'Vehicle Model needs to be at least 3 characters')
                  .max(
                    20,
                    'Vehicle Model needs to be at most 10 characters'
                  ),
              })
            ).min(1,'One vehicle in compulsory')
          })}
          onSubmit={async (values) => {
            // console.log(values);
            values.vehicles.forEach((val)=>{
              if(val.id){
                // console.log(val.id);
                return VEHICLE_UPDATE(val);
              }
              return NEW_VEHICLE(val);
            });
            NOTLOADING_VEHICLE();
            NOTLOADING_CUSTOMER();
          }}
        >
          {({ values, errors, isSubmitting, isValid }) => (
            <Form autoComplete="off">
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextfieldWrapper
                    name="firstName"
                    label="First Name"
                    disabled
                  />
                </Grid>

                <FieldArray name="vehicles">
                  {({ push, remove }) => (
                    <React.Fragment>
                      <Grid item>
                        <Typography variant="body2">
                          All your Vehicles
                        </Typography>
                      </Grid>

                      {values.vehicles.map((_, index) => (
                        <Grid
                          container
                          item
                          className={classes.noWrap}
                          key={index}
                          spacing={2}
                        >
                          <Grid item container spacing={2} xs={12} sm="auto">

                            <Grid item xs={12} sm={6}>
                              <TextfieldWrapper
                                name={`vehicles.${index}.vehicleMake`}
                                label="Vehicle Manufacturer"
                              />
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                              <TextfieldWrapper
                                name={`vehicles.${index}.vehicleRegNo`}
                                label="Vehicle Registration number"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextfieldWrapper
                                name={`vehicles.${index}.vehicleModel`}
                                label="Vehicle Model"
                              />
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm="auto">
                            {!edit && 
                            <Button
                              disabled={isSubmitting}
                              onClick={() => remove(index)}
                            >
                              Delete
                            </Button>
                            }
                          </Grid>
                        </Grid>
                      ))}

                      <Grid item>
                        {typeof errors.vehicles === 'string' ? (
                          <Typography color="error">
                            {errors.vehicles}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item>
                        <Button
                          disabled={isSubmitting}
                          variant="contained"
                          onClick={() => push(emptyVehicle)}
                        >
                          Add Vehicle
                        </Button>
                      </Grid>
                    </React.Fragment>
                  )}
                </FieldArray>

                <Grid item>
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
                    {loading ? 'Submitting' : 'Submit Vehicles'}
                  </Button>
                </Grid>
              </Grid>

              {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
    </Layout>
  );
}

const mapStateToProps = state => ({
  edit: state.customer.edit,
  customer:state.customer.customer,
  loading:state.vehicle.loading
});

export default connect(
  mapStateToProps,
  { NEW_VEHICLE,VEHICLE_UPDATE,NOTLOADING_VEHICLE,NOTLOADING_CUSTOMER }
)(NewVehicle);