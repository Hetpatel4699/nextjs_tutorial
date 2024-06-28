// "use client";
// import { useEffect, useState } from "react"
// export default function Page() {
//   const [product, setProduct] = useState([]);
 
//   useEffect(() => {
//     let data =async()=>{
//         data = await fetch("https://dummyjson.com/products");
//         data = await data.json();
//         setProduct(data.product)
//     }
//   }, [])

  

//   return (
//     <div>
//       <h1>Product List</h1>
//       {product.map((item,index) => (
//         <h3 key={item.index}>
//           Name: {item.title}, Price: {item.price}
//         </h3>
//       ))}
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";

export default function Page() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        // Define an async function inside the useEffect
        const fetchProducts = async () => {
            try {
                let response = await fetch("https://dummyjson.com/products");
                let data = await response.json();
                console.log(data);
                setProduct(data.products);
            } catch (error) {
                console.error("Error fetching the products:", error);
            }
        };

        // Call the async function
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {product.map((item) => (
                <h3 key={item.id}>Name: {item.title}, Price: {item.price}</h3>
            ))}
        </div>
    );
}





