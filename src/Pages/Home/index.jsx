import { useContext } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}/products`)
  //       const data = await response.json()
  //       setItems(data)
  //     } catch (error) {
  //       console.error(`Oh no, ocurrió un error: ${error}`);
  //     }
  //   }
  //   fetchData()
  // }, [])

  const { items, searchByTitle, setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)

  const renderView = () => {
    const itemsToRender = searchByTitle?.length > 0 ? filteredItems : items
    if (itemsToRender?.length > 0) {
      return itemsToRender.map(item => (
        // Destructuración
        <Card key={item.id} {...item} />
      ))
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