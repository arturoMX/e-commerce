import { createContext, useState } from "react";
import { PropTypes } from "prop-types"

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node
    }

    // Shopping Cart . Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail= () => setIsProductDetailOpen(true)
    const closeProductDetail= () => setIsProductDetailOpen(false)
    // const increment = () => {
        //     setCount(count + 1);
    // }
    
    // Product Detail . Show Product
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 