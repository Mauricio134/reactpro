export default function Product(){
    //const products = ["Laptop", "Modem", "Router", "Mouse"];
    /*const products = [
        {
            id: 1,
            name : "Laptop",
            price: 400,
        },
        {
            id: 2,
            name : "Mouse",
            price: 50,
        },
        {
            id: 3,
            name : "Router",
            price: 100,
        },
        {
            id: 4,
            name : "Laptop",
            price: 900,
        },
    ]*/

    const fruits = ["Banana", "Mango", "Banana"];

    /*const productList = products.map((product) => (
        <h3 key = {product.id}>{product.name}: ${product.price}</h3>
    ));*/

    const productList = fruits.map((fruit, index) => (
        <h3 key = {index}>{fruit}</h3>
    ));
    return <div>{productList}</div>
}