
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'
import { OrderCard } from '../OrderCard'

const CheckoutSideMenu = () => {
    
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, count, setCount} = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
        setCount(count -1)
    }


    
    return(
        <aside 
        className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)] z-10 overflow-y-scroll`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => closeCheckoutSideMenu()}><XMarkIcon  className='w-6 h-6 text-black cursor-pointer'/></div>
            </div>
            <div className='px-6'>
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
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>{totalPrice(cartProducts)}</span>
                </p>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }