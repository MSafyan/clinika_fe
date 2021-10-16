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
	IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import Link from '@material-ui/core/Link';

import EditIcon from '@material-ui/icons/Edit';

import { connect } from "react-redux";
import { EMPLOYEE_EDIT } from "../../actions/employeeActions";
import {DELETE} from '../../actions/authActions'


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

const TableContent = ({EMPLOYEE_EDIT,employeeList,loading,history,DELETE}) => {
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
			{!loading ? (
				<>
					<TableContainer>
						<Table style={{ width: '800px' }}>
							<PaginationHead
								valueToOrderBy={valueToOrderBy}
								orderDirection={orderDirection}
								handleRequestSort={handleRequestSort}
							/>
							{sortedRowInformation(
								employeeList,
								getComparator(orderDirection, valueToOrderBy)
							)
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((person, index) => (
									<TableRow key={index}>
										{/* just add the name of cells you want the data about */}
										<TableCell style={{ width: '10%' }}>{person.id}</TableCell>
										<TableCell style={{ width: '20%' }}>
											{person.baMeryVoltage}
										</TableCell>
										<TableCell style={{ width: '15%' }}>
											{person.signalStrength}
										</TableCell>
										<TableCell style={{ width: '5%' }}>
											{person.systolic || ''}
										</TableCell>
										<TableCell style={{ width: '15%' }}>
											{person.diastolic}
										</TableCell>
										<TableCell style={{ width: '15%' }}>
											{person.pulse}
										</TableCell>
										<TableCell style={{ width: '15%' }}>
											{person.unit}
										</TableCell>
										<TableCell style={{ width: '15%' }}>
											{person.irregular}
										</TableCell>
										<TableCell style={{ width: '15%' }}>
											{person.imei}
										</TableCell>
										<TableCell style={{ width: '15%' }}>
											{person.status}
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
							count={employeeList.length}
							rowsPerPage={rowsPerPage}
							// showFirstButton
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</TableFooter>
				</>
			) : (
				<><h3>Loading...</h3>
				<h3>Or No Record Found</h3></>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
  employeeList:state.employee.employeeList,
	loading:state.employee.loading
});

export default connect(
	mapStateToProps,
	{ EMPLOYEE_EDIT,DELETE }
)(TableContent);
