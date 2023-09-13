import { useContext } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {

  const { setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)
  
  const renderView = () => {
    if (filteredItems?.length > 0) {
      return (
        filteredItems?.map(item => (
          // Destructuración
          <Card key={item.id} {...item} />
        ))
      )
    } else {
      return <p>No results found</p>
    }
  }

  return (
    <>
    <div className='flex items-center justify-center relative w-80 mb-5'>
        <h1>Exclusive Products</h1>
    </div>
    <input 
      type="text" 
      placeholder="Search a products"
      className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
      onChange={(e) => setSearchByTitle(e.target.value)}/>
    <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
    {renderView()}
    </div>
    <ProductDetail />
    </>
  )
}

export { Home };