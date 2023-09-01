import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { apiUrl } from "../../API";

function Home() {
  const [items, setItems] = useState(null);

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

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])



  return (
    <>
    <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
    {
      items?.map(item => (
        // Destructuración
        <Card key={item.id} {...item} />
      ))
    }
    </div>
    </>
  )
}

export { Home };