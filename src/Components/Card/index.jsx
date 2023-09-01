import PropTypes from 'prop-types'

const Card = ({price, title, images, category: {name}}) => {
    Card.propTypes = {
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
        category: PropTypes.object.isRequired,
    }
    
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt="heacphnoes" />
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">
                    +
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