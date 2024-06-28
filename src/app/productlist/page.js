import Product from "./product";

async function ProductList (){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}

export default async function Page(){
    let products = await ProductList();
    console.log("products");
    return (
        <div>
        <h1>Product List</h1>
        {
            products.map((item)=>(
                <div key={item.id}>
                    <h3>
                        Name : {item.title}
                    </h3>
                    <Product price={item.price} />
                </div>  
            ))
        }
        </div>
    )
}