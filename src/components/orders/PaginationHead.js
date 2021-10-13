import React from 'react';
import {
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from '@material-ui/core';

const Pagination = (props) => {
	const { valueToOrderBy, orderDirection, handleRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		handleRequestSort(event, property);
	};
	return (
		<TableHead>
			<TableRow>
				<TableCell style={{ width: '5%' }} key='id'>
					<TableSortLabel
						active={valueToOrderBy === 'id'}
						direction={valueToOrderBy === 'id' ? orderDirection : 'asc'}
						onClick={createSortHandler('id')}
					>
						ID
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '8%' }} key='firstName'>
					<TableSortLabel
						active={valueToOrderBy === 'firstName'}
						direction={valueToOrderBy === 'firstName' ? orderDirection : 'asc'}
						onClick={createSortHandler('firstName')}
					>
						FirstName
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }} key='email'>
					<TableSortLabel
						active={valueToOrderBy === 'email'}
						direction={valueToOrderBy === 'email' ? orderDirection : 'asc'}
						onClick={createSortHandler('email')}
					>
						Email
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }} key='vehicleRegNo'>
					<TableSortLabel
						active={valueToOrderBy === 'vehicleRegNo'}
						direction={valueToOrderBy === 'vehicleRegNo' ? orderDirection : 'asc'}
						onClick={createSortHandler('vehicleRegNo')}
					>
						vehicleRegNo
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '8%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'price'}
						direction={valueToOrderBy === 'price' ? orderDirection : 'asc'}
						onClick={createSortHandler('price')}
					>
						Paid Amount
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '4%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'coupon'}
						direction={valueToOrderBy === 'coupon' ? orderDirection : 'asc'}
						onClick={createSortHandler('coupon')}
					>
						Coupon
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '8%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'addedBy'}
						direction={valueToOrderBy === 'addedBy' ? orderDirection : 'asc'}
						onClick={createSortHandler('addedBy')}
					>
						  Employee Email
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '8%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'status'}
						direction={valueToOrderBy === 'status' ? orderDirection : 'asc'}
						onClick={createSortHandler('status')}
					>
						Status
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'lowCategory'}
						direction={valueToOrderBy === 'lowCategory' ? orderDirection : 'asc'}
						onClick={createSortHandler('lowCategory')}
					>
						Service
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }}>
					Warranty
				</TableCell>
				<TableCell style={{ width: '10%' }}>
					Actions
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default Pagination;
