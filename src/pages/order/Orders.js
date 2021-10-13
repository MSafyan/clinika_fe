import React from 'react'
import PageHeader from "../../components/general/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles,Toolbar } from '@material-ui/core';
import TableContent from '../../components/orders/TableContent'
import SearchForm from '../../components/orders/SearchForm';
import { connect } from "react-redux";
import { ORDER_COUNT,ORDER_LIST } from "../../actions/orderAction";
import ExportDialog from '../../components/orders/ExportDialog';

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

function ORDER_List({type,ORDER_LIST,ORDER_COUNT,history}) {

    const classes = useStyles();
    React.useEffect(()=>{
        ORDER_LIST();
        // ORDER_COUNT();
          // eslint-disable-next-line
    },[])

    return (
        <Layout>
            <SearchForm/>
            {
                type==='admin' && <ExportDialog/>
            }
            
            <PageHeader
                title="ORDER List"
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
    orderList:state.order.orderList,
    type:state.auth.user.type
});

export default connect(
    mapStateToProps,
    { ORDER_LIST,ORDER_COUNT }
)(ORDER_List);
