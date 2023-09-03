import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

const NavItem = ({to, children, activeStyle}) => {
    NavItem.propTypes = {
        to: PropTypes.node,
        children: PropTypes.node,
        activeStyle: PropTypes.string
    }
    return (
        <NavLink 
            to={to} 
            className={({isActive}) => (isActive ? activeStyle : undefined)}>
            {children}    
        </NavLink>
    )
}

export { NavItem };