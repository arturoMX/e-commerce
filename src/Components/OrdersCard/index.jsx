import { PropTypes } from 'prop-types';
import { ShoppingCartIcon, CurrencyDollarIcon, CalendarDaysIcon, ChevronRightIcon} from '@heroicons/react/24/solid';
import { dateTime } from '../../utils'

const OrdersCard = ({ totalPrice, totalProducts }) => {
  OrdersCard.propTypes = {
    totalPrice: PropTypes.number,
    totalProducts: PropTypes.number,
  };

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-3">
        <span className='flex'>
            <ShoppingCartIcon className='w-6 h-6 text-black mr-1'/>{totalProducts} products
        </span>
        <span className='flex mx-2'>
            <CurrencyDollarIcon className='w-6 h-6 text-black mr-1'/>{totalPrice}
        </span>
        <span className='flex'>
            <CalendarDaysIcon className='w-6 h-6 text-black mr-1'/>{dateTime()}
        </span>
        <span className='flex'>
            <ChevronRightIcon className='w-6 h-6 text-black'/>
        </span>
    </div>
  );
};

export { OrdersCard };
