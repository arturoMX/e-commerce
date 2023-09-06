import { PropTypes } from 'prop-types'
import { TrashIcon } from '@heroicons/react/24/solid'

const OrderCard = ({ title, images, price }) => {
    OrderCard.propTypes = {
        title: PropTypes.string,
        images: PropTypes.array,
        price: PropTypes.number,
    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover'
                src={images} alt={title} />
            </figure>
            <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-md font-medium'>{price}</p>
                <TrashIcon  className='w-6 h-6 text-black cursor-pointer'/>
            </div>
        </div>
    )
}

export { OrderCard }