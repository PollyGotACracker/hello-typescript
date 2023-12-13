import { useEffect, useState } from "react";
import { getAllProducts } from "./services";
import { Product } from "./types";

const App = () => {
  const [products, setProducts] = useState<Product[] | []>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getAllProducts(10);
      setProducts(data);
    })();
  }, []);

  return (
    <>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <div>[{item.category}]</div>
            <div>{item.title}</div>
            <div>
              <img src={item.image} />
            </div>
            <div>{item.price}</div>
            <div>{item.description}</div>
            <div>
              {item.rating.rate} ({item.rating.count})
            </div>
          </div>
        );
      })}
    </>
  );
};

export default App;
