import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

const NavItem = ({to, children, activeStyle, onClick}) => {
    NavItem.propTypes = {
        to: PropTypes.node,
        children: PropTypes.node,
        activeStyle: PropTypes.string,
        onClick: PropTypes.func
    }
    return (
        <NavLink 
            to={to} 
            className={({isActive}) => (isActive ? activeStyle : undefined)}
            onClick={onClick}>
            {children}  
        </NavLink>
    )
}

export { NavItem };