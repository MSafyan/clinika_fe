import React from 'react'
import PageHeader from "../../components/general/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles,Toolbar } from '@material-ui/core';
import TableContent from '../../components/coupon/CTableContent'

import { connect } from "react-redux";
import { COUPON_LIST } from '../../actions/couponAction';

import Layout from '../../components/layout/Index'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))

function ORDER_List({COUPON_LIST,history}) {

    const classes = useStyles();
    React.useEffect(()=>{
        COUPON_LIST();
          // eslint-disable-next-line
    },[])

    return (
        <Layout>
            <PageHeader
                title="Coupon List"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <Toolbar>
                </Toolbar>
                    <TableContent history={history}/>
            </Paper>
        </Layout>
    )
}


const mapStateToProps = state => ({
    orderList:state.order.orderList
});

export default connect(
    mapStateToProps,
    { COUPON_LIST }
)(ORDER_List);
