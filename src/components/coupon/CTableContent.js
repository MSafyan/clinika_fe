import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaginationHead from './CPaginationHead';
import {
	Table,
	TableRow,
	TableCell,
	TablePagination,
	TableFooter,
	TableContainer,
} from '@material-ui/core';


import { connect } from "react-redux";
import { COUPON_LIST } from '../../actions/couponAction';


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

const TableContent = ({COUPON_LIST,couponList,loading,history}) => {
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
						<Table>
							<PaginationHead
								valueToOrderBy={valueToOrderBy}
								orderDirection={orderDirection}
								handleRequestSort={handleRequestSort}
							/>
							{sortedRowInformation(
								couponList,
								getComparator(orderDirection, valueToOrderBy)
							)
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((person, index) => (
									<TableRow key={index}>
										{/* just add the name of cells you want the data about */}
										<TableCell>{person.id}</TableCell>
										<TableCell>{person.name || ''}</TableCell>
										<TableCell>
											{person.serviceName.map((val)=><div key={person.id}>{val}</div>)}
										</TableCell>
										<TableCell>
											{person.percent}
										</TableCell>
										<TableCell>
											{person.orderAmount}
										</TableCell>
										<TableCell>
											{person.expiryDate}
										</TableCell>
										<TableCell>
											{person.loyaltyOnly}
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
							count={couponList.length}
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
  couponList:state.coupon.couponList,
	loading:state.coupon.loading
});

export default connect(
	mapStateToProps,
	{ COUPON_LIST }
)(TableContent);
