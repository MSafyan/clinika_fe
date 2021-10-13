import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {
  Grid,
  IconButton,
  Typography,
  Button,
  CircularProgress
} from '@material-ui/core';
import Select from 'react-select'

import EditIcon from '@material-ui/icons/Edit';


import { connect } from "react-redux";
import {UPDATE_ORDER} from '../../actions/orderAction'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const status=[
  {value:'processing',label:'processing'},
  {value:'canceled',label:'canceled'},
  {value:'completed',label:'completed'
}]

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
    margin:'0px auto'
  }
}));

function SimpleModal({id,UPDATE_ORDER,loading}) {
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
    status: Yup.string()
      .required('Required'),
  });
  

      const INITIAL_FORM_STATE = {
        id:id,
        status:''
      };


  return (
    <span>
      <IconButton onClick={handleOpen}>
        <EditIcon/>
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
              UPDATE_ORDER(values);
            }}
          >
            {({ values,setFieldValue, errors, isSubmitting, isValid }) => (
            <Form>

              <Grid container spacing={2}>

              <Grid item xs={12}>
                  <Typography variant='body1'>
                    Payment Status
                  </Typography>
                  <Select
                    label="Status"
                    options={status}
                    onChange={value=>setFieldValue('status',value.value)}
                    defaultValue={{label:"processing",value:"processing"}}
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
                    {loading ? 'Sending' : 'Update Status'}
                  </Button>
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
  {  UPDATE_ORDER }
)(SimpleModal);