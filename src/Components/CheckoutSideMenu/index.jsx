
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'

const CheckoutSideMenu = () => {
    
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts} = useContext(ShoppingCartContext)
    
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
                        title = {title}
                        images = {images}
                        price = {price} />
                    ))
                }
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }