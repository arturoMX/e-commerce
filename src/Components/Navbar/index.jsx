import { useContext } from "react";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { NavItem } from "../NavItem";
import { ShoppingCartContext } from '../../Context' 


const Navbar = () => {
    const { count } = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavItem to='/'>
                       Shopi 
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/' activeStyle={activeStyle}>
                        All
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/clothes' activeStyle={activeStyle}>
                        Clothes
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/electronics' activeStyle={activeStyle}>
                        Electronics
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/furnitures' activeStyle={activeStyle}>
                        Furnitures
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/toys' activeStyle={activeStyle}>
                        Toys
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/others' activeStyle={activeStyle}>
                        Others
                    </NavItem>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    arturo@gmail.com
                </li>
                <li>
                    <NavItem to='/my-orders' activeStyle={activeStyle}>
                        My Orders
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/my-account' activeStyle={activeStyle}>
                        My Account
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/sign-in' activeStyle={activeStyle}>
                        Sign In
                    </NavItem>
                </li>
                <li className="flex items-center">
                    <ShoppingCartIcon className="h-6 w-6 text-blue-500" /> 
                    <div>{count}</div>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }