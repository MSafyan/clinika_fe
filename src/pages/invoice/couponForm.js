import React from 'react';
import Header from '../../components/FormsUI/Headers';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  CircularProgress,
  Button,
  FormGroup,
  Typography
} from '@material-ui/core';
import Select from 'react-select'

import Textfield from '../../components/FormsUI/Textfields';
import DateTimePicker from '../../components/FormsUI/DataTimePickers';

import Layout from '../../components/layout/Index'
import { serviceName } from '../../components/data/orderService';
import { connect } from "react-redux";
import {NEW_COUPON} from '../../actions/couponAction'

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const FORM_VALIDATION = Yup.object().shape({
  serviceName: Yup.array().required(),
  percent: Yup.string().required(),
  orderAmount: Yup.string().required(),
  expiryDate: Yup.string().required(),
  loyaltyOnly: Yup.string().required(),
  name: Yup.string().required(),
});

const CouponForm = ({NEW_COUPON,loading,history}) => {
  const classes = useStyles();

  const formState=()=>{

    const EDIT_FORM_STATE={
      serviceName:[],
      percent:'',
      orderAmount:'',
      expiryDate:'',
      loyaltyOnly:'false',
      name:''
    }
      return EDIT_FORM_STATE;
  }


  return (
    <Layout>
    <Grid container>
      <Grid item xs={12}>
        <Header title={'New Coupon'}/>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={ formState()}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
                NEW_COUPON(values)
              }}
              enableReinitialize
            >
              {({setFieldValue, values, errors, isSubmitting, isValid }) => (
              <Form>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                  <FormGroup>
                  <Typography variant='body1' style={{marginRight:'auto',maginLeft:'8px'}}>
                    Services
                  </Typography>
                  <Select
                    isMulti
                    label="serviceName"
                    defaultValue={{label:"All",value:"All"}}
                    options={[...serviceName,{label:'All',value:'All'}]}
                    onChange={
                      value=>{
                        if(value.length>0){
                          var values=[];
                          for(let val of value){
                            values.push(val.value)
                          }
                          // console.log(value[0].value)
                          setFieldValue('serviceName',values)}
                          else{
                          setFieldValue('serviceName',[])
                        }
                      }
                    }
                  />
                  </FormGroup>
                  </Grid>

                  <Grid item xs={12} md={6}>
                  <FormGroup>
                  <Typography variant='body1' style={{marginRight:'auto',maginLeft:'8px'}}>
                    Loyalty Customer Only
                  </Typography>
                  <Select
                    label="loyaltyOnly"
                    options={
                      [{label:"true",value:'true'},{label:'false',value:"false"}]}
                    onChange={
                      value=>{setFieldValue('loyaltyOnly',value.value)}}
                  />
                  </FormGroup>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      name="name"
                      label="name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield
                      name="percent"
                      label="percent"
                      type='number'
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      name="orderAmount"
                      label="orderAmount"
                      type='number'
                    />
                  </Grid>




                  <Grid item xs={12} md={6}>
                    <DateTimePicker
                      name="expiryDate"
                      label="End Date"
                    />
                </Grid>

                  <Grid item xs={12}>
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
                      {loading ? 'Submitting' : 'Create Coupon'}
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
  loading:state.coupon.loading,
  type:state.auth.user?.type
});

export default connect(
  mapStateToProps,
  {NEW_COUPON}
)(CouponForm);