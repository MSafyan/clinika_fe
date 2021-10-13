import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaginationHead from './PaginationHead';
import {
	Table,
	TableRow,
	TableCell,
	TablePagination,
	TableFooter,
	TableContainer,
	IconButton,
	Button
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

import Link from '@material-ui/core/Link';

import { connect } from "react-redux";
import { CUSTOMER_EDIT,DELETE } from "../../actions/customerAction";
import {EMPLOYEE_LIST} from '../../actions/employeeActions'


const useStyles = makeStyles((theme) => ({
	footer: {
		fontSize: 'larger',
		marginTop: '1rem',
	},
}));

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

const sortedRowInformation = (rowArray, comparator) => {
	const stabilizedRowArray = rowArray.map((el, index) => [el, index]);
	stabilizedRowArray.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedRowArray.map((el) => el[0]);
};

const TableContent = ({EMPLOYEE_LIST,CUSTOMER_EDIT,customerList,loading,history,DELETE}) => {
	const classes = useStyles();

	const [orderDirection, setOrderDirection] = useState('asc');
	const [valueToOrderBy, SetValueToOrderBy] = useState('ID');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleRequestSort = (event, property) => {
		const isAccessending =
			valueToOrderBy === property && orderDirection === 'asc';
		SetValueToOrderBy(property);
		setOrderDirection(isAccessending ? 'desc' : 'asc');
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value), 10);
		setPage(0);
	};

	return (
		<div>
			{!loading && customerList!==null && customerList?.length > 0 ? (
				<>
					<TableContainer>
						<Table>
							<PaginationHead
								valueToOrderBy={valueToOrderBy}
								orderDirection={orderDirection}
								handleRequestSort={handleRequestSort}
							/>
							{sortedRowInformation(
								customerList,
								getComparator(orderDirection, valueToOrderBy)
							)
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((person, index) => (
									person && <TableRow key={index}>
										{/* just add the name of cells you want the data about */}
										{/* <TableCell>{person.id}</TableCell> */}
										<TableCell>
											{person.name}
										</TableCell>
										<TableCell>
											{person.phoneNumber}
										</TableCell>
										<TableCell>
											{person.age}
										</TableCell>
										<TableCell>
											{person.pulse}
										</TableCell>
										<TableCell>
											{person.type==='Danger'? <Button variant='outlined' style={{ fontWeight: "bold",background:'#dc3545',borderRadius:'0.6rem',padding:'0.2rem',color:'white',textAlign:'center' }}> Danger </Button>:<Button variant='outlined' style={{ fontWeight: "bold",background:'green',borderRadius:'0.6rem',padding:'0.2rem',color:'white',textAlign:'center' }}>Normal</Button>}
										</TableCell>
										<TableCell>
											{person.patientStatus}
										</TableCell>
										<TableCell>
											{person.imei}
										</TableCell>
										<TableCell>
											{person.bloodpressures?.length || 0}
										</TableCell>
										<TableCell>
											<div style={{display:'flex'}}>
											<Link onClick={()=>{history.push('/newcustomer');return CUSTOMER_EDIT(person)}}>
													<IconButton >
														<EditIcon/>
													</IconButton>
											</Link>
											<Link onClick={
												()=>{history.push('/employees') 
												console.log(person.id)
												EMPLOYEE_LIST(person.id)}
										}>
													<IconButton >
														<IconLibraryBooks/>
													</IconButton>
											</Link>
											<Link onClick={()=>{
												return DELETE(person.id)}}>
													<IconButton>
														<DeleteIcon color='secondary'/>
													</IconButton>
											</Link>
											</div>
										</TableCell>
									</TableRow>
								))}
						</Table>
					</TableContainer>
					<TableFooter>
						<TablePagination
							className={classes.footer}
							color='primary'
							rowsPerPageOptions={[1, 5, 10]}
							component='div'
							count={customerList.length}
							rowsPerPage={rowsPerPage}
							// showFirstButton
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</TableFooter>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
  customerList:state.customer.customerList,
	loading:state.customer.loading
});

export default connect(
	mapStateToProps,
	{ CUSTOMER_EDIT,DELETE,EMPLOYEE_LIST}
)(TableContent);
