import React from 'react'
import PageHeader from "../../components/general/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles,Toolbar } from '@material-ui/core';
import TableContent from '../../components/customers/TableContent'
import SearchForm from '../../components/customers/SearchForm'
import { connect } from "react-redux";
import { CUSTOMER_LIST,CUSTOMER_COUNT } from "../../actions/customerAction";

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

function CustomerList({CUSTOMER_LIST,history,token,redirect}) {

    const classes = useStyles();
    // const [records] = useState(employeeService.getAllEmployees())
    // const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    // const handleSearch = e => {
    //     let target = e.target;
    //     setFilterFn({
    //         fn: items => {
    //             if (target.value === "")
    //                 return items;
    //             else
    //                 return items.filter(x => x.fullName.toLowerCase().includes(target.value))
    //         }
    //     })
    // }
    React.useEffect(()=>{
        // CUSTOMER_COUNT();
        // if(token===null){
        //     history.push('/login')
        // }else{
        //     setTimeout(()=>{

        //     },1000)
        // }
        CUSTOMER_LIST().then(()=>{
            // if(redirect.length>0){
            //     history.push(redirect);
            // }
        })

          // eslint-disable-next-line
    },[])

    return (
        <Layout>
            <PageHeader
                title="Patient List"
                subTitle="list of Patients,click on patient for more details"
                history={history}
                icon={<PeopleOutlineTwoToneIcon fontSize="large"  />}
            />
            <Paper className={classes.pageContent}>
                <SearchForm/>
                <Toolbar>
                    {/* <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    /> */}
                </Toolbar>
                    <TableContent history={history}/>
            </Paper>
        </Layout>
    )
}

const mapStateToProps = state => ({
    customerList:state.customer.customerList,
    token:state.auth.token,
    redirect:state.customer.redirect
});

export default connect(
    mapStateToProps,
    { CUSTOMER_LIST,CUSTOMER_COUNT }
)(CustomerList);
