import { Icon } from '@iconify/react';
import windowsFilled from '@iconify/icons-ant-design/dollar-circle-filled';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import { connect } from "react-redux";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

// const TOTAL = 1723315;

function AppItemOrders({featuredData,loading}) {
  if(loading || !featuredData){
    return <div>Loading...</div>
  }
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={windowsFilled} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(featuredData.revenue)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Sales Revenue
      </Typography>
    </RootStyle>
  );
}
const mapStateToProps = state => ({
  featuredData: state.order.featuredData,
  loading:state.order.loading,
});

export default connect(
  mapStateToProps,
  null
)(AppItemOrders);