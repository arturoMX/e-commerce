
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {

    const { isProductDetailOpen, closeProductDetail } = useContext(ShoppingCartContext)
    return(
        <aside 
        className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => closeProductDetail()}><XMarkIcon  className='w-6 h-6 text-black cursor-pointer'/></div>
            </div>
        </aside>
    )
}

export { ProductDetail }