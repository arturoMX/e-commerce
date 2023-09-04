
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const CheckoutSideMenu = () => {

    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu} = useContext(ShoppingCartContext)
    
    return(
        <aside 
        className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)] z-10`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => closeCheckoutSideMenu()}><XMarkIcon  className='w-6 h-6 text-black cursor-pointer'/></div>
            </div>
            {/* <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                src={productToShow.images ? productToShow.images?.[0]: ""} 
                alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p> */}
        </aside>
    )
}

export { CheckoutSideMenu }