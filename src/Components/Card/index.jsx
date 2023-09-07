import PropTypes from 'prop-types'
import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context' 


const Card = ({id, price, title, description, images, category: {name}}) => {
    Card.propTypes = {
        id: PropTypes.number,
        price: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        images: PropTypes.array,
        category: PropTypes.object,
    }

    const data = {id, price, title, description, images, category: {name}}

    const {openProductDetail, closeProductDetail, setProductToShow, cartProducts, setCartProducts, openCheckoutSideMenu,closeCheckoutSideMenu} = useContext(ShoppingCartContext)

    const showProduct = (data) => {
        openProductDetail()
        setProductToShow(data)
        closeCheckoutSideMenu()
    }

    const addProductToCart = (e, data) =>{
        // Function for avoid the spread of event
        e.stopPropagation()
        // setCount(count + 1)
        setCartProducts([...cartProducts, data])
        openCheckoutSideMenu()
        closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = cartProducts.filter(product => product.id === id).length > 0
        return (
            isInCart ? (
                <button className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2"
                onClick={(e) =>  
                    {e.stopPropagation()}}>
                    <CheckIcon className='w-6 h-6 text-white' />
                </button>
            ) : (
                <button 
                className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
                onClick={(e) =>  
                    {addProductToCart(e,data)}}>
                    <PlusIcon className='w-6 h-6 text-black' />
                </button>
            )
        )
    }
    
    // const addProduct = payload => {
    //     const productIndex = cart.findIndex(product => product.id === payload.id)
    //     let newCart = []
    //     if (productIndex >= 0) {
    //       newCart = [...cart]
    //       newCart[productIndex].quantity++
    //       newCart[productIndex].price = payload.price + newCart[productIndex].price
    //     } else {
    //       newCart = [...cart, { ...payload, quantity: 1 }]
    //     }
    //     setCart(newCart)
    //     getTotalInfo(newCart)
    //     openCheckoutSideMenu()
    //   }
    
    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md"
            onClick={() => {showProduct(data)}}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt="heacphnoes" />
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between mx-2">
                <span className="text-sm font-light">{title}</span>                
                <span className="text-sm font-medium">${price}</span>
            </p>
        </div>
    )
}

export { Card }