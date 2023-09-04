import { createContext, useState } from "react";
import { PropTypes } from "prop-types"

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node
    }

    const [count, setCount] = useState(0);
    // const increment = () => {
    //     setCount(count + 1);
    // }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 