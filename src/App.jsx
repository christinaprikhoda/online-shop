import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 49.99,
      category: "Electronics",
      photo: "",
    },
    {
      id: 2,
      title: "Yoga Mat",
      price: 19.99,
      category: "Fitness",
      photo: "",
    },
    {
      id: 3,
      title: "Desk Lamp",
      price: 29.99,
      category: "Home Decor",
      photo: "",
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 59.99,
      category: "Footwear",
      photo: "",
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 39.99,
      category: "Electronics",
      photo: "",
    },
    {
      id: 6,
      title: "Cooking Utensil Set",
      price: 24.99,
      category: "Kitchen",
      photo: "",
    },
    {
      id: 7,
      title: "Notebook",
      price: 4.99,
      category: "Stationery",
      photo: "",
    },
    {
      id: 8,
      title: "Gaming Mouse",
      price: 34.99,
      category: "Gaming",
      photo: "",
    },
    {
      id: 9,
      title: "Sunglasses",
      price: 14.99,
      category: "Accessories",
      photo: "",
    },
    {
      id: 10,
      title: "Portable Charger",
      price: 25.99,
      category: "Electronics",
      photo: "",
    },
  ]);

  const [basket, setBasket] = useState([]);

  const moveToCart = (product) => {
    const found = basket.find((item) => item.id === product.id);
    if (found) {
      found.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...product, count: 1 }]);
    }
  };

  const quantityUp = (product) => {
    const found = basket.find((item) => item.id === product.id);
    found.count++;
    setBasket([...basket]);
  };

  const quantityDown = (product) => {
    const found = basket.find((item) => item.id === product.id);

    if (found.count > 1) {
      found.count--;
      setBasket([...basket]);
    } else {
      deleteItem(product);
    }
  };

  const deleteItem = (product) => {
    const filtreted = basket.filter((item) => item.id !== product.id);
    setBasket(filtreted);
  };

  return (
    <>
      <header className="bg-red-200 p-4">
        <h1 className="text-center text-3xl font-bold">Shopping App</h1>
      </header>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={item.photo}
              alt={item.title}
              className="w-32 h-32 object-cover mb-4"
            />
            <p className="font-semibold text-lg">{item.title}</p>
            <p className="text-gray-700">{item.price} USD</p>
            <small className="text-sm text-gray-500">{item.category}</small>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              onClick={() => moveToCart(item)}
            >
              Move to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Count</th>
              <th className="px-4 py-2 text-left">Subtotal</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">{item.count}</td>
                <td className="px-4 py-2">
                  {(item.count * item.price).toFixed(2)}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => quantityUp(item)}
                    className="bg-green-500 text-white py-1 px-2 rounded mr-2 hover:bg-green-700"
                  >
                    +
                  </button>
                  <button
                    onClick={() => quantityDown(item)}
                    className="bg-red-500 text-white py-1 px-2 rounded mr-2 hover:bg-red-700"
                  >
                    -
                  </button>
                  <button
                    onClick={() => deleteItem(item)}
                    className="bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-700"
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
