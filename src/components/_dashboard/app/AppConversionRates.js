import { merge } from 'lodash';
import React from 'react'
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@material-ui/core';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';
import { connect } from "react-redux";

// ----------------------------------------------------------------------


function AppConversionRates({customerYearly,loading}) {
  if(loading || !customerYearly){
    return <div>loading.....</div>
  }
const CHART_DATA = [{ data: customerYearly? customerYearly.customers:[] }];
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 }
    },
    xaxis: {
      categories: customerYearly.months
    }
  });



  return (
    <Card>
      <CardHeader title="Customers" subheader="Numbers of Customers per Month" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}


const mapStateToProps = state => ({
  loading:state.customer.loading,
  customerYearly:state.customer.customerYearly
});

export default connect(
  mapStateToProps,
  null
)(AppConversionRates);