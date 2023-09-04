
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {

    const { isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext)

    // const [image, setImage] = useState(0)
    // const nextImage = () => {
    //     if(image === productToShow.images.length-1) {
    //         setImage(0)
    //     } else {
    //         setImage(image+1)
    //     }
    // }
    
    return(
        <aside 
        className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => closeProductDetail()}><XMarkIcon  className='w-6 h-6 text-black cursor-pointer'/></div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                src={productToShow.images ? productToShow.images[0]: ""} 
                alt={productToShow.title} />
                {/* <ChevronRightIcon 
                className={`${productToShow.images.length==1 ? 'hidden' : ""} w-8 h-8 fill-white cursor-pointer right-5 center-element`}
                onClick={() => nextImage()} /> */}
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail }