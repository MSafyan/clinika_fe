import React from 'react'
import PageHeader from "../../components/general/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles,Toolbar } from '@material-ui/core';
import TableContent from '../../components/employees/TableContent'
import MaterialTable from 'material-table'

import { connect } from "react-redux";
import { EMPLOYEE_LIST,EMPLOYEE_COUNT } from "../../actions/employeeActions";

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

function EmployeeList({EMPLOYEE_LIST,history,employeeList,loading}) {

    const columns = [
        { title: "id", field: "id" },
        { title: "baMeryVoltage", field: "baMeryVoltage" },
        { title: "signalStrength", field: "signalStrength" },
        { title: "systolic", field: 'systolic' },
        { title: "diastolic", field: 'diastolic' },
        { title: "pulse", field: 'pulse' },
        { title: "unit", field: 'unit' },
        { title: "irregular", field: 'irregular' },
        { title: "imei", field: 'imei' },
        { title: "pulse", field: 'pulse' },
        { title: "stutus", field: 'status' , render: (rowData) => {
            return rowData.status == "danger" ? <p style={{ fontWeight: "bold",background:'#dc3545',borderRadius:'0.6rem',padding:'0.2rem',color:'white',textAlign:'center' }}>{rowData.status}</p> :
                rowData.status == "SUCCESS" ? <p style={{ color: "#008240", fontWeight: "bold" }}>{rowData.status}</p> :
                    <p style={{ color: "#B0B700", fontWeight: "bold" }}>{rowData.status}</p>
        }},
      ]

    const classes = useStyles();
    React.useEffect(()=>{
        EMPLOYEE_LIST();
        EMPLOYEE_COUNT();
          // eslint-disable-next-line
    },[])

    return (
        <Layout>
            {/* <PageHeader
                title="Employee List"
                subTitle="Click on action icon to update details"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <Toolbar>
                </Toolbar>
                    <TableContent history={history}/>
                    
            </Paper> */}
            {!loading ? <MaterialTable
                title="Game Logs"
                data={employeeList}
                columns={columns}
                options={{columnsButton:true,exportButton:true}}/> : 'loadding...' }
        </Layout>
    )
}


const mapStateToProps = state => ({
    employeeList:state.employee.employeeList,
    loading:state.employee.loading
});

export default connect(
    mapStateToProps,
    { EMPLOYEE_LIST,EMPLOYEE_COUNT}
)(EmployeeList);
