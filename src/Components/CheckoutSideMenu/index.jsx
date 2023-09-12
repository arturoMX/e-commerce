
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { totalPrice, dateTime } from '../../utils'
import { OrderCard } from '../OrderCard'

const CheckoutSideMenu = () => {
    
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, order, setOrder } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {

        const orderToAdd = {
            date: dateTime(),
            products: cartProducts,
            totalPrice: totalPrice(cartProducts),
            totalProducts: cartProducts.length,
        }

        setOrder([...order, orderToAdd])
        setCartProducts([])
        closeCheckoutSideMenu()
    }
    
    return(
        <aside 
        className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)] z-10`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => closeCheckoutSideMenu()}><XMarkIcon  className='w-6 h-6 text-black cursor-pointer'/></div>
            </div>
            <div className='px-6  overflow-y-scroll flex-1'>
                {
                    cartProducts.map(({id, title, images, price}) => (
                        <OrderCard 
                        key = {id}
                        id = {id}
                        title = {title}
                        images = {images}
                        price = {price}
                        handleDelete = {handleDelete} />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full bg-black py-3 text-white rounded-lg' 
                    onClick={() => handleCheckout()}>Checkout</button>
                </Link>

            </div>
        </aside>
    )
}

export { CheckoutSideMenu }