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
				{/* <TableCell style={{ width: '10%' }} key='id'>
					<TableSortLabel
						active={valueToOrderBy === 'id'}
						direction={valueToOrderBy === 'id' ? orderDirection : 'asc'}
						onClick={createSortHandler('id')}
					>
						ID
					</TableSortLabel>
				</TableCell> */}
				<TableCell style={{ width: '15%' }} key='name'>
					<TableSortLabel
						active={valueToOrderBy === 'name'}
						direction={valueToOrderBy === 'name' ? orderDirection : 'asc'}
						onClick={createSortHandler('name')}
					>
						Name
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }} key='state'>
					<TableSortLabel
						active={valueToOrderBy === 'phoneNumber'}
						direction={valueToOrderBy === 'phoneNumber' ? orderDirection : 'asc'}
						onClick={createSortHandler('phoneNumber')}
					>
						Phone Number
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }} key='age'>
					<TableSortLabel
						active={valueToOrderBy === 'age'}
						direction={valueToOrderBy === 'age' ? orderDirection : 'asc'}
						onClick={createSortHandler('age')}
					>
						Age
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }} key='loyalCustomer'>
					<TableSortLabel
						active={valueToOrderBy === 'pulse'}
						direction={valueToOrderBy === 'pulse' ? orderDirection : 'asc'}
						onClick={createSortHandler('pulse')}
					>
						pulse
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'type'}
						direction={valueToOrderBy === 'type' ? orderDirection : 'asc'}
						onClick={createSortHandler('type')}
					>
						Type
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'patientStatus'}
						direction={valueToOrderBy === 'patientStatus' ? orderDirection : 'asc'}
						onClick={createSortHandler('patientStatus')}
					>
						PatientStatus
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'imei'}
						direction={valueToOrderBy === 'imei' ? orderDirection : 'asc'}
						onClick={createSortHandler('imei')}
					>
						Imei
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'bloodpressures'}
						direction={valueToOrderBy === 'bloodpressures' ? orderDirection : 'asc'}
						onClick={createSortHandler('bloodpressures')}
					>
						bloodpressures
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }}>
					Actions

				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default Pagination;
