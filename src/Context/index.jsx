import { createContext, useState } from "react";
import { PropTypes } from "prop-types"

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node
    }

    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const openProductDetail= () => setIsProductDetailOpen(true)
    const closeProductDetail= () => setIsProductDetailOpen(false)

    // const increment = () => {
    //     setCount(count + 1);
    // }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 