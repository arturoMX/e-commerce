import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { OrdersCard} from '../../Components/OrdersCard'

function MyOrders() {
  const { order } = useContext(ShoppingCartContext)
  console.log(order);


  return (
    <div>
      <div className='flex items-center justify-center relative w-80 mb-5'>
        <h1>My Orders</h1>
      </div>
      {
        order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts}/>
          </Link>
        ))
      }
    </div>
  )
}

export { MyOrders }