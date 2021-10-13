import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaginationHead from './PaginationHead';
import EasyInvoiceSample from './downloadInvoice';
import {
	Table,
	TableRow,
	TableCell,
	TablePagination,
	TableFooter,
	TableContainer,
	Button,
	Typography
} from '@material-ui/core';

import Edit from './Edit';

import { connect } from "react-redux";
import { EMPLOYEE_EDIT } from "../../actions/employeeActions";
import {INVOICE_DOWNLOAD} from '../../actions/orderAction'
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
	footer: {
		fontSize: 'larger',
		marginTop: '1rem',
	},
	statusButton:{
		fontSize:'0.7rem',
		padding:'0.1rem'
	}
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

const TableContent = ({type,EMPLOYEE_EDIT,orderList,loading,history}) => {
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
const warrentyPredictor=(per)=>{
	console.log(per.created_at)
	if(!per.services){
		return;
	}
	return per?.services.map((val,i)=>{
		
		var myArray = /(\d)(Y)/g.exec(val.serviceName);

			// console.log(myArray);
			if(!myArray){
				return <Typography variant='body1' color='secondary'>No warranty</Typography>
			}
			return <div key={i}><Moment add={{years:myArray[1]}} format="YYYY/MM/DD">{val.created_at}</Moment></div>})
		
}
	return (
		<div>
			{!loading && orderList?.length>0 ? (
				<>
					<TableContainer>
						<Table>
							<PaginationHead
								valueToOrderBy={valueToOrderBy}
								orderDirection={orderDirection}
								handleRequestSort={handleRequestSort}
							/>
							{sortedRowInformation(
								orderList,
								getComparator(orderDirection, valueToOrderBy)
							)
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((person, index) => (
									<TableRow key={index}>
										{/* just add the name of cells you want the data about */}
										<TableCell>{person.id}</TableCell>
										<TableCell>
											{person.customer?.firstName || ''}
										</TableCell>
										<TableCell>
											{person.customer?.email}
										</TableCell>
										<TableCell>
											{person.vehicle?.vehicleRegNo || ''}
										</TableCell>
										<TableCell>
											{person.paidAmount}
										</TableCell>
										<TableCell>
											{person.coupon?.name || 'none'}
										</TableCell>
										<TableCell>
											{person.addedBy || 'Anonymous'}
										</TableCell>
										<TableCell>
											<Button className={classes.statusButton} variant='contained' color={person?.status==='processing'?'primary':'secondary'}>
												{person.status || 'null'}
											</Button>
										</TableCell>
										<TableCell>
											{person?.services && person.services.map((val,i)=>(<div key={i}>{val?.serviceName}</div>))}
										</TableCell>

										<TableCell>
											{warrentyPredictor(person)}
										</TableCell>

										<TableCell>
											<Edit id={person.id}/>		

											<EasyInvoiceSample person={person}/>
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
							count={orderList.length}
							rowsPerPage={rowsPerPage}
							// showFirstButton
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</TableFooter>
				</>
			) : (
				<h3>Loading... Mrs {type} </h3>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
  orderList:state.order.orderList,
	loading:state.order.loading,
	type:state.auth.user.type
});

export default connect(
	mapStateToProps,
	{ EMPLOYEE_EDIT ,INVOICE_DOWNLOAD}
)(TableContent);
