import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import {emailtemplates} from '../../components/data/orderService'


import Textfield from '../../components/FormsUI/Textfields';
// import Button from '../../components/FormsUI/Buttons';
import EmailIcon from '@material-ui/icons/Email';

import { connect } from "react-redux";
import { CUSTOMER_EMAIL } from "../../actions/customerAction";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  spanButton:{
    background:'black',
    color:"white",
    padding:'0.4rem',
    fontSize:'1rem',
    borderRadius:'0.3rem',
    margin:'0px 1rem',
  }
}));

function SimpleModal({email,contactNo1,CUSTOMER_EMAIL,loading}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const FORM_VALIDATION = Yup.object().shape({
    searchTerm: Yup.string()
      .required('Required'),
    searchBy:Yup.string().required('enter state name'),
  });
  

      const INITIAL_FORM_STATE = {
        email: email,
        contactNo1:contactNo1,
        text: 'hello from admin',
      };


  return (
    <span>
      <IconButton onClick={handleOpen}>
        <EmailIcon/>
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
        <div className={classes.formWrapper}>

          <Formik
            initialValues={ INITIAL_FORM_STATE}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {
              CUSTOMER_EMAIL(values);
            }}
          >
            {({ values,setFieldValue, errors, isSubmitting, isValid }) => (
            <Form>

              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <Textfield
                    name="email"
                    email="Search Term"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Textfield
                    name="contactNo1"
                    email="Phone Number"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Textfield
                    name="text"
                    label="Text for email"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12}>
                    <span className={classes.spanButton} onClick={()=>CUSTOMER_EMAIL({...values,method:'email'})}>
                      {loading ? 'Sending' : 'Send Email'}
                    </span>
                    <span className={classes.spanButton} onClick={()=>CUSTOMER_EMAIL({...values,method:'sms'})}>
                      {loading ? 'Sending' : 'Send Sms'}
                    </span>
                    {/* <Button
                    disabled={loading}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={()=>console.log('hell')}
                    startIcon={
                      loading ? (
                        <CircularProgress size="1rem" />
                      ) : undefined
                    }
                  >
                    {loading ? 'Sending' : 'Sent Email'}
                  </Button> */}
                </Grid>
              </Grid>
            </Form>
            )}
          </Formik>
          </div>
        </div>
      </Modal>
    </span>
  );
}

const mapStateToProps = state => ({
  loading:state.customer.loading
});

export default connect(
  mapStateToProps,
  { CUSTOMER_EMAIL  }
)(SimpleModal);