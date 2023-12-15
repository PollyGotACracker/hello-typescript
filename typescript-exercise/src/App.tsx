import { useEffect, useState } from "react";
import { getAllProducts } from "./services";
import { Product, Sort } from "./types";

const App = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [categoryCount, setCategoryCount] = useState<{ string: number } | {}>(
    {}
  );

  useEffect(() => {
    (async () => {
      const { data } = await getAllProducts(20, Sort.Desc);
      setProducts(data);
      setCategoryCount(setCategoryCountNumber(data));
    })();
  }, []);

  const setCategoryCountNumber = (data: Product[]) => {
    return data.reduce((acc: { [key: string]: number }, cur) => {
      acc[cur.category] ??= 0;
      acc[cur.category] += 1;
      return acc;
    }, {});
  };

  return (
    <>
      {Object.entries(categoryCount).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
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
