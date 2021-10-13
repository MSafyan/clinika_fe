import React from 'react';
import { Typography } from '@material-ui/core';
import { Formik, Form,FieldArray } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select'
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  CircularProgress,
  Button,
  FormGroup
} from '@material-ui/core';
import {PersonAdd} from '@material-ui/icons'
import Textfield from '../../components/FormsUI/Textfields';
// import Button from '../../components/FormsUI/Buttons';
import SearchForm from '../../components/customers/SearchForm';
import Layout from '../../components/layout/Index'

import { connect } from "react-redux";
import { NEW_CUSTOMER,CUSTOMER_UPDATE,CUSTOMER_EDIT } from "../../actions/customerAction";
import { NEW_ORDER,NOTLOADING } from "../../actions/orderAction";
import {vehicleType,midCategory,serviceName, services} from '../../components/data/orderService'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  SubmitButton:{
    marginTop:'0.5rem'
  },
  customerBDiv:{
    display:'flex',
    justifyContent:'flex-end'
  },
  fitContent:{
    width:"fit-content"
  },
  spanButton:{
    background:'black',
    color:"white",
    padding:'0.4rem',
    fontSize:'1rem',
    borderRadius:'0.3rem'
  },
  notloyalty:{
    backgroundColor:"red",
    borderRadius:'0.3rem'
  },
  loyalty:{
    backgroundColor:"green",
    borderRadius:'0.3rem'
  },

}));

// var userTemp;

const emptyService = { 
  vehicleType: '',
  serviceName: '',
  discountPrice: '',
  servicePrice: ''
};

const status=[
  {value:'processing',label:'processing'},
  {value:'canceled',label:'canceled'},
  {value:'completed',label:'completed'
}]

const paidBy=[{
  value:'cash',label:'cash'},
  {value:'debitCard',label:'debitCard'},
  {value:'check',label:'cheque'
}]

const NewOrder = ({NOTLOADING,couponList, customer,loading,user,NEW_ORDER,history,CUSTOMER_EDIT}) => {
  const classes = useStyles();

  let data=[];
  let coupons=[];

  React.useEffect(()=>{
    // console.log('order useeffect')
    NOTLOADING();
    if(customer?.vehicles?.length>0){

      customer.vehicles.forEach((val)=>{
        data.push({value: val.id, label: val.vehicleMake || 'undefinedMaker'})
      })
    }
    if(couponList?.length>0){
      couponList.forEach((val)=>{
        coupons.push({value: val.id, label: val.name || 'undefined'})
      })
    }
          // eslint-disable-next-line
  },[customer])
  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
      .required('Please search for Customer first (on Top)'),
    lastName: Yup.string()
      .required('Please search for Customer first (on Top)'),
    email: Yup.string()
      .email('Invalid email.')
      .required('Please search for Customer first (on Top)'),
    contactNo1: Yup.number()
      .integer()
      .typeError('Please enter a valid phone number')
      .required('Please search for Customer first (on Top)'),
    address: Yup.string()
      .required('Please search for Customer first (on Top)'),
    vehicleId: Yup.string()
      .required('Please select a vehicle'),
      price: Yup.number()
      .integer()
      .typeError('Please enter a valid number')
      .required('Please select Vehicle Type and low Category'),
    discount: Yup.number()
      .integer()
      .typeError('Please enter a valid number (no symbols)')
      .test((discount,_)=>{
        if(user && !user.type){
          return new Yup.ValidationError(
            `not Authorized user`,
            undefined,
            'discount'
          );
        }
        else if(user?.type==='manager' && discount > 10){
          return new Yup.ValidationError(
            `manager can only give discount up to 10 percent`,
            undefined,
            'discount'
          );
        }
        else if(user?.type==='supervisor' && discount > 7){
          return new Yup.ValidationError(
            `supervisor can only give discount up to 7 percent`,
            undefined,
            'discount'
          );
        }
        else if(user?.type==='admin' && discount > 20){
          return new Yup.ValidationError(
            `admin can only give discount up to 20 percent`,
            undefined,
            'discount'
          );
        }
        else if(user?.type==='sales' && discount > 2){
          return new Yup.ValidationError(
            `sales can only give discount up to 2 percent`,
            undefined,
            'discount'
          );
        }
        return true;
      }),
    paidAmount: Yup.number()
      .integer()
      .typeError('Please enter a valid number')
      .required('Please enter ammount paid by customer')
      .test((paidAmount,_)=>{
        if(paidAmount > _.parent?.price){
          return new Yup.ValidationError(
            `paid Amount ${paidAmount} is greater than Price ${_.parent.price}`,
            undefined,
            'paidAmount'
          );
        }
        return true;
      }),
      paidBy:Yup.string().required().test((paidBy,_)=>{
        if(paidBy ==='check' && ! user?.type!=='admin'){
          return new Yup.ValidationError(
            `Only admin can take cheques as payment`,
            undefined,
            'paidBy'
          );
        }
        return true;
      })
  });
  const formState=()=>{
    const INITIAL_FORM_STATE = {
      id:customer?.id || '',
      firstName:customer?.firstName || '',
      lastName:customer?.lastName || '',
      email:customer?.email || '',
      contactNo1:customer?.contactNo1 || '',
      address:customer?.address || '',
      vehicles:customer?.vehicles || [],
      services:[{
        vehicleType:'',
        servicePrice:'',
        discountPrice:'',
      }],
      price:'0',
      discount:'0',
      paidAmount:'0',
      servicePrice:'0',
      description:''
    };
      return INITIAL_FORM_STATE;
  }

const applyCoupon=(setFieldValue,values,value,index)=>{
  setFieldValue('coupon',value);

  debugger;
  let sum=0;
  let couponIndex=1;
  let arr=[];
  for(let coupon of couponList){
    if(coupon.id===value){
      
      if((coupon.loyaltyOnly === "true" && customer?.loyalCustomer !== "false") || coupon.orderAmount > values.servicePrice){
        return;
      }
      for(let service of coupon.serviceName){
        let localindex=0;

        for(let localservice of values.services){
          
          if(localservice.serviceName && (localservice.serviceName === service || service==="All")){
            const per= +localservice.servicePrice - ( +localservice.servicePrice * (coupon.percent/100))
            setFieldValue(`services.${localindex}.discountPrice`,per)
            arr[localindex]=true;
              sum=sum+ +per;
          }
          // else{
          //   if(coupon.serviceName.length===couponIndex && !arr[11]){
          //     sum=sum + +(values.services[localindex].servicePrice);
          //   }
          // }
          localindex=localindex+1;
          couponIndex=couponIndex+1;
        }
      }
    }
  }
  values.services.forEach((val,i)=>{
    if(!arr[i]){
      sum=sum+ +val.servicePrice;
      setFieldValue(`services.${i}.discountPrice` ,val.servicePrice);
    }
  })
  setFieldValue('servicePrice',sum)
  setFieldValue('price',sum)
  setFieldValue('paidAmount',sum)
}
const pricePredictor=(setFieldValue,index,values,value,name)=>{
  var sum=0;
  if(name==='serviceName'){
    setFieldValue('coupon','');
    setFieldValue(`services[${index}].serviceName`,value.value)
    for(let service of services){
      if(service.ServiceName===value.value){
        // debugger;
        setFieldValue(`services[${index}].servicePrice`,service[values.services[index].vehicleType]);
        setFieldValue(`services[${index}].discountPrice`,service[values.services[index].vehicleType]);
        sum=sum+ +(service[values.services[index].vehicleType])
        // applyCoupon(setFieldValue,values,values.coupon,index)
      }
    }
  }  if(name==='vehicleType'){
    setFieldValue(`services[${index}].vehicleType`,value.value)
    for(let service of services){
      if(service.ServiceName===values.services[index].serviceName){
        // debugger;
          setFieldValue(`services[${index}].servicePrice`,service[value.value]);
          setFieldValue(`services[${index}].discountPrice`,service[value.value]);
          // setFieldValue('price',service[value.value]);
        sum=sum+ +(service[value.value])
      }
    }
  }
  // debugger;
  values.services.forEach((ser,i)=>{
    if(i!==index)
    sum=sum+ (+ser.servicePrice);
  })
  setFieldValue('servicePrice',sum)
  setFieldValue('price',sum)
  setFieldValue('paidAmount',sum)
}

  return (
    <Layout>

          <div className={classes.formWrapper}>
            <SearchForm/>
            <Formik
              initialValues={ formState()}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // console.log(values);
                NEW_ORDER(values);
              }}
              enableReinitialize
            >
              {({ handleBlur,touched, values,setFieldValue,errors,isSubmitting }) => (
              <Form>
                
                <Grid container spacing={2}>
                  <Grid item xs={12}>

                    <div className={classes.customerBDiv}>
                        
                      {
                        customer && 
                      <NavLink to='/newcustomer'>
                        <Button
                        className={classes.fitContent}
                        variant="contained"
                        color="primary"
                        onClick={()=> {return CUSTOMER_EDIT(customer)}}
                      >
                        update Customers
                      </Button>
                      </NavLink>

                      }
                      <NavLink to='/newcustomer'>
                        <Button
                        type="button"
                        className={classes.fitContent}
                        variant="contained"
                        color="primary"
                        onClick={()=>history.push('/')}
                        endIcon={<PersonAdd size="1rem" color='secondary'/>}
                        >

                        Add Customer
                      </Button>
                        </NavLink>
                    </div>
                  </Grid>
                  <Grid item xs={12}> 
                  <Typography variant='h6'>
                    Customer Info
                  </Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Textfield
                      name="id"
                      label="id"
                      disabled
                    />
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <Textfield
                      name="firstName"
                      label="First Name"
                      disabled
                    />
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <Textfield
                      name="lastName"
                      label="Last Name"
                      disabled

                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Textfield
                      name="email"
                      label="Email"
                      disabled

                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Textfield
                      name="contactNo1"
                      label="Contact No.1"
                      disabled
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      name="address"
                      label="Address"
                      disabled
                      />
                  </Grid>
                  <Grid item xs={12} md={2} style={{margin:'auto',padding:'0.5rem'}}>
                    <Typography variant='body2' className={customer?.loyalCustomer==='true' ? classes.loyalty : classes.notloyalty}>Loyalty Customer</Typography>
                  </Grid>
                </Grid>
              
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant='h6'>
                      vehicle Info
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Select
                      label="vehicleId"
                      onBlur={handleBlur}
                      options={data}
                      onChange={value=>setFieldValue('vehicleId',value.value)}
                    />
                     <Grid item>
                        {touched['vehicleId'] && typeof errors.vehicleId === 'string' ? (
                          <Typography color="error">
                            {errors.vehicleId}
                          </Typography>
                        ) : null}
                      </Grid>
                  </Grid>
                  <FieldArray name="vehicles">
                  {() => (
                    <React.Fragment>
                      {values.vehicles?.length > 0 && values.vehicles.map((vehicle,index)=>{
                        if(vehicle.id===values.vehicleId){
                          return <>
                            <Grid key={index} item xs={12} md={3}>
                              <Textfield
                                name={`vehicles.${index}.vehicleMake`}
                                label="Vehicle Manufacturer"
                                disabled
                              />
                            </Grid>
                            
                            <Grid item xs={12} md={4}>
                              <Textfield
                                name={`vehicles.${index}.vehicleRegNo`}
                                label="Vehicle Registration number"
                                disabled
                              />
                            </Grid>
  
                            <Grid item xs={12} md={3}>
                              <Textfield
                                name={`vehicles.${index}.vehicleModel`}
                                label="Vehicle Model"
                                disabled
                              />
                            </Grid>
                          </>
                        }else{
                          return null;
                        }
                        }
                      )}
                    </React.Fragment>
                  )}
                  </FieldArray>
                </Grid>
                <FieldArray name="services">
                  {({ push, remove }) => (
                    <React.Fragment>
                      <Grid item>
                        <Typography variant="h6">
                          Services
                        </Typography>
                      </Grid>

                      {values.services.map((_, index) => (
                        <Grid
                          container
                          item
                          className={classes.noWrap}
                          key={index}
                          spacing={2}
                        >
                          <Grid item container spacing={2} xs={12} sm="auto">
                            <Grid item xs={12} md={2}>
                            <FormGroup>
                              <Typography variant='body1' style={{marginRight:'auto',maginLeft:'8px'}}>
                                Vehicle Type
                              </Typography>
                              <Select
                                label="vehicleType"
                                options={vehicleType}
                                onChange={value=>{
                                  pricePredictor(setFieldValue,index,values,value,'vehicleType')
                              }}
                              />
                              </FormGroup>
                            </Grid>
                            
                          
                            <Grid item xs={12} md={2}>
                            <FormGroup>
                              <Typography variant='body1' style={{marginRight:'auto',maginLeft:'8px'}}>
                                Mid Category
                              </Typography>
                              <Select
                                label="mid Category"
                                options={midCategory}
                                onChange={value=>{
                                  setFieldValue(`services[${index}].midCategory`,value.value)
                                }}
                              />
                              </FormGroup>
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <FormGroup>
                              <Typography variant='body1' style={{marginRight:'auto',maginLeft:'8px'}}>
                                Service Name
                              </Typography>
                              <Select
                                label="Service Name"
                                options={serviceName.filter((val)=>{
                                  return val.JobID.includes(values.services[index].midCategory)
                                })}
                                onChange={value=>pricePredictor(setFieldValue,index,values,value,'serviceName')}
                              />
                              </FormGroup>
                            </Grid>
                            <Grid item md={2}>
                            <Textfield
                              label="ServicePrice"
                              name={`services.${index}.servicePrice`}
                              disabled
                              />
                            </Grid>
                            <Grid item md={2}>
                            <Textfield
                              label="CouponDiscountPrice"
                              name={`services.${index}.discountPrice`}
                              disabled
                              />
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm="auto">
                          <Button
                          className={classes.spanButton}
                            onClick={() => remove(index)}
                            >
                              Delete
                            </Button>
                          </Grid>
                        </Grid>
                      ))}
                      <Grid item>
                        {typeof errors.services === 'string' ? (
                          <Typography color="error">
                            {errors.services}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item>
                        <Button
                          className={classes.spanButton}
                          onClick={() => push(emptyService)}
                        >
                          Add Service
                        </Button>
                      </Grid>
                    </React.Fragment>
                  )}
                </FieldArray>
                <Grid container spacing={2}>
                  <Grid item xs={12}>

                  </Grid>
                    <Grid item container xs={12} md={3} spacing={2}> 
                      <Grid item xs={12}>
                      <Textfield
                        name='servicePrice'
                        label="servicePrice"
                        disabled
                        onChange={value=>{
                          setFieldValue('servicePrice',value.target.value)
                        }}
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <Textfield
                        name='discount'
                        label="discount"
                        disabled={values.servicePrice === 'Quote on inspection'}
                        onChange={value=>{
                          // debugger;
                          setFieldValue('discount',value.target.value);
                            const sugPrice= +values.servicePrice;
                            const discount= +value.target.value;
                            if(discount !==0){
                              const per= sugPrice * (discount / 100) 
                              if(+values.servicePrice){
                                setFieldValue('price', sugPrice - per)
                              }
                            }
                          // }
                        }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                      <Textfield
                        name='price'
                        label="price"
                        disabled={values.servicePrice !== 'Quote on inspection'}
                      />
                      </Grid>
                    </Grid>
                    <Grid item container xs={12} md={3} spacing={2}>
                  {
                    couponList.length>0 && 
                      <Grid item xs={12}>
                        <FormGroup>
                        <Typography variant='body1' style={{marginRight:'auto',maginLeft:'8px'}}>
                          Coupons:
                        </Typography>
                        <Select
                          label="Coupon"
                          options={coupons}
                          onChange={value=>{
                            applyCoupon(setFieldValue,values,value.value)
                          }}
                        />
                        </FormGroup>
                      </Grid>
                  }
                      <Grid item xs={12}>
                      <FormGroup>
                        <Typography variant='body1' style={{marginRight:'auto',maginLeft:'8px'}}>
                          Payment Status
                        </Typography>
                        <Select
                          label="Status"
                          options={status}
                          onChange={value=>setFieldValue('status',value.value)}
                          defaultValue={{label:"processing",value:"processing"}}
                        />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12}>
                      <FormGroup>
                        <Typography variant='body1' style={{marginRight:'auto',maginLeft:'8px'}}>
                      Payment method
                      </Typography>
                        <Select
                          label="PaidBy"
                          options={paidBy}
                          onBlur={handleBlur}
                          onChange={value=>setFieldValue('paidBy',value.value)}
                          defaultValue={{label:"cash",value:"cash"}}
                        />
                        </FormGroup>
                      </Grid>
                      <Grid item>
                        {typeof errors.paidBy === 'string' ? (
                          <Typography color="error">
                            {errors.paidBy}
                          </Typography>
                        ) : null}
                      </Grid>
 
                    </Grid>
                    <Grid container item xs={12} md={6} spacing={2}>
                      <Grid item xs={12}>
                        <Textfield
                          name='paidAmount'
                          label="paidAmount"
                        />
                        </Grid>
                      <Grid item xs={12}>
                      <Textfield
                        name='description'
                        label="description"
                        multiline
                        rows={4}
                      />
                      </Grid>
                    </Grid>
                  </Grid>
                  
                  <Grid item xs={12} style={{marginTop:'0.5rem'}}>
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
                    {loading ? 'Submitting' : 'Create Order'}
                  </Button>
                    
                  </Grid>
                  {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
              </Form>
              )}
            </Formik>

          </div>
    </Layout>
  );
};

const mapStateToProps = state => ({
  edit: state.customer.edit,
  customer:state.customer.customer,
  loading:state.order.loading,
  couponList:state.coupon.couponList,
  user:state.auth.user
});

export default connect(
  mapStateToProps,
  { NEW_CUSTOMER,CUSTOMER_UPDATE,NEW_ORDER,CUSTOMER_EDIT,NOTLOADING }
)(NewOrder);