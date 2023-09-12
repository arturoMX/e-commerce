import { useContext } from "react"
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard"

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if (index === 'last') index = order?.length - 1

  return (
    <div>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col'>
        {
          order?.[index]?.products.map(({id, title, images, price}) => (
              <OrderCard 
              key = {id}
              id = {id}
              title = {title}
              images = {images}
              price = {price} />
          ))
        }
        </div>
    </div>
  )
}

export { MyOrder }