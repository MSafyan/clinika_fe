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
				<TableCell style={{ width: '10%' }} key='id'>
					<TableSortLabel
						active={valueToOrderBy === 'id'}
						direction={valueToOrderBy === 'id' ? orderDirection : 'asc'}
						onClick={createSortHandler('id')}
					>
						ID
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }} key='baMeryVoltage'>
					<TableSortLabel
						active={valueToOrderBy === 'baMeryVoltage'}
						direction={valueToOrderBy === 'baMeryVoltage' ? orderDirection : 'asc'}
						onClick={createSortHandler('baMeryVoltage')}
					>
						baMeryVoltage
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }} key='signalStrength'>
					<TableSortLabel
						active={valueToOrderBy === 'signalStrength'}
						direction={valueToOrderBy === 'signalStrength' ? orderDirection : 'asc'}
						onClick={createSortHandler('signalStrength')}
					>
						signalStrength
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '5%' }} key='systolic'>
					<TableSortLabel
						active={valueToOrderBy === 'systolic'}
						direction={valueToOrderBy === 'systolic' ? orderDirection : 'asc'}
						onClick={createSortHandler('systolic')}
					>
						systolic
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'diastolic'}
						direction={valueToOrderBy === 'diastolic' ? orderDirection : 'asc'}
						onClick={createSortHandler('diastolic')}
					>
						diastolic
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'pulse'}
						direction={valueToOrderBy === 'pulse' ? orderDirection : 'asc'}
						onClick={createSortHandler('pulse')}
					>
						pulse
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'unit'}
						direction={valueToOrderBy === 'unit' ? orderDirection : 'asc'}
						onClick={createSortHandler('unit')}
					>
						unit
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'irregular'}
						direction={valueToOrderBy === 'irregular' ? orderDirection : 'asc'}
						onClick={createSortHandler('irregular')}
					>
						irregular
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '10%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'imei'}
						direction={valueToOrderBy === 'imei' ? orderDirection : 'asc'}
						onClick={createSortHandler('imei')}
					>
						imei
					</TableSortLabel>
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default Pagination;
