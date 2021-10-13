import React, { forwardRef } from 'react'
import ListItem from '@material-ui/core/ListItem'
import { NavLink } from 'react-router-dom'


const AppMenuItemComponent = props => {
  const { className, onClick, link, children } = props

  // If link is not set return the orinary ListItem
  if (!link || typeof link !== 'string') {
    return (
      <ListItem
        variant='body2'
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    )
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      button
      variant='body2'
      className={className}
      children={children}
      component={forwardRef((props,ref) => <NavLink exact {...props} innerRef={ref} />)}
      to={link}
    />
  )
}

export default AppMenuItemComponent
