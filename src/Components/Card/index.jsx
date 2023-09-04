import PropTypes from 'prop-types'
import { useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context' 

const Card = ({price, title, images, category: {name}}) => {
    Card.propTypes = {
        price: PropTypes.number,
        title: PropTypes.string,
        images: PropTypes.array,
        category: PropTypes.object,
    }

    const {count, setCount} = useContext(ShoppingCartContext)
    
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={images[2]} alt="heacphnoes" />
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
                onClick={() => setCount(count + 1)}>
                    <PlusIcon className='w-6 h-6 text-black'/>
                </button>
            </figure>
            <p className="flex justify-between mx-2">
                <span className="text-sm font-light">{title}</span>
                <span className="text-sm font-medium">${price}</span>
            </p>
        </div>
    )
}

export { Card }