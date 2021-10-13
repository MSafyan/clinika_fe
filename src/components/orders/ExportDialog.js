import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {
  Grid,
  IconButton,
} from '@material-ui/core';

import DateTimePicker from '../FormsUI/DataTimePickers';
// import Button from '../../components/FormsUI/Buttons';
import GetAppIcon from '@material-ui/icons/GetApp';
import Export from './Export'
import { connect } from "react-redux";
import { ORDER_FIND } from "../../actions/orderAction";

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
    borderRadius:'0.3rem'
  }
}));

function SimpleModal({ORDER_FIND,loading}) {
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
        startDate: '',
        endDate: '',
        searchBy:'csv'
      };


  return (
    <span>
      <IconButton onClick={handleOpen}>
        <GetAppIcon/>
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
              ORDER_FIND(values);
            }}
          >
            {({ values, errors, isSubmitting, isValid }) => (
            <Form>

              <Grid container spacing={2}>

                <Grid item xs={12}>
                    <DateTimePicker
                      name="startDate"
                      label="Start Date"
                    />
                </Grid>

                <Grid item xs={12}>
                    <DateTimePicker
                      name="endDate"
                      label="End Date"
                    />
                </Grid>

                <Grid item xs={12}>
                    <span className={classes.spanButton} onClick={()=>ORDER_FIND(values)}>
                      {loading ? 'Downloading' : 'Get File'}
                    </span>
                    {!loading && <Export/>
                    }
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
  loading:state.order.loading
});

export default connect(
  mapStateToProps,
  { ORDER_FIND  }
)(SimpleModal);