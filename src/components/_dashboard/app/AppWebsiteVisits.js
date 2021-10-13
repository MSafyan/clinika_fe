import { merge } from 'lodash';
import React from 'react'
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { BaseOptionChart } from '../../charts';
import { connect } from "react-redux";

// ----------------------------------------------------------------------



function AppWebsiteVisits({revenueData,loading,customerYearly}) {

  if(loading || !revenueData || customerYearly?.customers.length<1){
    return <div>Loading...</div>
  }

  const CHART_DATA = [
    {
      name: 'Orders',
      type: 'column',
      data: revenueData.length
    },
    {
      name: 'Revenue',
      type: 'area',
      data: revenueData.revenues
    },
    {
      name: 'customers',
      type: 'line',
      data: customerYearly.customers    
    }
  ];

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: revenueData.months,
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Revenue in 12months"/>
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}

const mapStateToProps = state => ({
  revenueData: state.order.revenueData,
  customerYearly: state.customer.customerYearly,
  loading:state.order.loading
});

export default connect(
  mapStateToProps,
  null
)(AppWebsiteVisits);