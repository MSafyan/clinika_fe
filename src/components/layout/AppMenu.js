import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconPeople from '@material-ui/icons/People'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import EmailIcon from '@material-ui/icons/Email';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import AddBoxIcon from '@material-ui/icons/AddBox';

import AppMenuItem from './AppMenuItem'

import { connect } from "react-redux";
import { UNSET_LOADING } from "../../actions/authActions";

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  // {
  //   name: 'Orders',
  //   link: '/orders',
  //   Icon: IconShoppingCart,
  // },
  {
    name: 'New Email',
    link: '/newemail',
    Icon: EmailIcon,
  },
  {
    name: 'Employees',
    link: '/employees',
    Icon: IconPeople,
  },
  {
    name: 'Customer',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Customer List',
        link: '/customers',
        Icon: IconPeople,
      },
      {
        name: 'New Customer',
        link: '/newcustomer',
        Icon: IconPeople,
      },
    ],
  },
  {
    name: 'Coupon',
    Icon: FreeBreakfastIcon,
    items: [
      {
        name: 'Coupon List',
        link: '/coupons',
        Icon: FreeBreakfastIcon,
      },
      {
        name: 'New Coupon',
        link: '/newcoupon',
        Icon: AddBoxIcon,
      },
    ],
  },
  {
    name: 'Orders',
    Icon: IconShoppingCart,
    items: [
      {
        name: 'order List',
        link: '/orders',
        Icon: IconLibraryBooks,
      },
      {
        name: 'New Order',
        link: '/neworder',
        Icon: IconShoppingCart,
      },
    ],
  },
]

const AppMenu = ({UNSET_LOADING}) => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default connect(
  null,
  { UNSET_LOADING }
)(AppMenu);