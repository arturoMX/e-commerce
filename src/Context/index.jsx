import { PropTypes } from 'prop-types'
import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node
    }

    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail= () => setIsProductDetailOpen(true)
    const closeProductDetail= () => setIsProductDetailOpen(false)

    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu= () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu= () => setIsCheckoutSideMenuOpen(false)
    
    // Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart · Add Products To Cart
    const [cartProducts, setCartProducts] = useState([])
    
    // Shopping Cart · Order
    const [order, setOrder] = useState([])


    // const onAdd = product => {
    //     // Verific if the product is add in the cart
    //     const productExists = cartProducts.some(el => el.id === product.id)
    //     if (productExists) {
    //         // Valid existence
    //         const productCart = cartProducts.find(el => el.id === product.id) //Search the product
    //         productCart.quantity += 1; // Increment in 1 
    //     } else {
    //         product.quantity = 1; // If the product don't exist, add the quantity property with valor 1
    //         setCartProducts([...cartProducts, product])
    //     }
    //     setCount(count + 1)
    // }

        return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 