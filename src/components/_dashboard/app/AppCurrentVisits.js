import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme, styled } from '@material-ui/core/styles';
import { Card, CardHeader } from '@material-ui/core';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';
import { connect } from "react-redux";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------


function AppCurrentVisits({revenueData,loading}) {
  const theme = useTheme();
  // const CHART_DATA = [4344, 5435, 1443, 4443];



  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main
    ],
    labels: revenueData? revenueData.months:[],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }
    }
  });

  if(loading || !revenueData){
    return <div>Loading....</div>
  }

  return (
    <Card>
      <CardHeader title="Monthly Revenue" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="pie" series={!loading? revenueData.revenues:[0,3]} options={chartOptions} height={280} />
      </ChartWrapperStyle>
    </Card>
  );
}
const mapStateToProps = state => ({
  revenueData: state.order.revenueData,
  loading:state.order.loading,
});

export default connect(
  mapStateToProps,
  null
)(AppCurrentVisits);
