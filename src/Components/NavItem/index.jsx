import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

const NavItem = ({to, children, activeStyle}) => {
    NavItem.propTypes = {
        to: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        activeStyle: PropTypes.string.isRequired,
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